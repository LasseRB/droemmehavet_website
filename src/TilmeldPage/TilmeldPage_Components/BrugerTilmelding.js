import React, {useContext, useEffect, useState} from "react";
import {FORM, REGEX, FEJLBESKED} from "../../Shared/Constans";
import Havfrue from '../../images/KrabbeOgFødselsdagsbarn.png';
import FejlIkon from '../../images/fejl.svg'
import SuccesIkon from '../../images/check.svg'
import LoadingIkon from '../../images/loading.svg'
import {reepay} from "../../Shared/Reepay/reepay";
import {FirebaseContext} from "../../Shared/Firebase";


export default function BrugerTilmelding(props) {
    const firebase = useContext(FirebaseContext);

    const [enableSubmit, setEnableSubmit] = useState(true);
    const [opretter, setOpretter] = useState(false);

    const handleUserCreateSubmit = async (event) => {
        event.preventDefault();
        setOpretter(true)
        let userID = "";
        await opretBrugerIFirebase();
        await reepayFlow();


        async function opretBrugerIFirebase () {
            // create user in auth
            await firebase
                .doCreateUserWithEmailAndPassword(
                    props.formContent.email.vaerdi,
                    props.formContent.password.vaerdi
                )
                .then((res) => (userID = res.user.uid))
                .catch((error) => {
                    handleFejlBesked(error.code);
                    props.setTilmeldStadie({current: 1});
                    setOpretter(false)
                    console.error(error);
                });

            // give auth user a name
            await firebase
                .doUpdateAuthUser({
                    displayName:
                    props.formContent.navn.vaerdi
                })
                .then(() => {
                    props.setTilmeldStadie({current: 2});
                    reepayFlow();
                })
                .catch((error) => {
                    handleFejlBesked(error.code);
                    props.setTilmeldStadie({current: 1});
                    setOpretter(false)
                    console.error(error);
                });

        };
        async function reepayFlow() {
                const checkoutWindow = new window.Reepay.ModalSubscription();
                const handle = reepay.createNewSubscriptionHandle(props.formContent.email.vaerdi)

                const test = await reepay.createPendingSubscriber(handle, props.formContent.navn.vaerdi, props.formContent.email.vaerdi, props.formContent.kuponkode.vaerdi)
                console.log(test)
                await reepay.renderCheckoutWindow(handle, checkoutWindow)

                checkoutWindow.addEventHandler(window.Reepay.Event.Accept, function (data) {
                    //create user in Firestore DB - needs the right auth rules
                    firebase.doUpdateFirestoreUser(userID, {
                        navn: props.formContent.navn.vaerdi,
                        email: props.formContent.email.vaerdi,
                        "reepay-customer-handle": data.customer || "n/a",
                        "reepay-subscription-handle": data.subscription || "n/a",
                        photoID: randomIntFromInterval(0, 3)
                    })
                        .catch((error) => {
                            handleFejlBesked(error.code);
                            props.setTilmeldStadie({current: 1});
                            setOpretter(false)
                            console.error(error);
                        });
                    props.setTilmeldStadie({current: 3});
                    checkoutWindow.destroy()

                });

                checkoutWindow.addEventHandler(window.Reepay.Event.Error, function (data) {
                    console.log('betaling fejlede')
                    // console.error(data)
                    handleFejlBesked(data.code)
                    props.setTilmeldStadie({current: 1});
                    setOpretter(false)
                    checkoutWindow.destroy()
                });

                checkoutWindow.addEventHandler(window.Reepay.Event.Close, function (data) {
                    console.log('betaling lukket')
                    handleFejlBesked(data ? data.code : null)
                    props.setTilmeldStadie({current: 1});
                    setOpretter(false)
                    checkoutWindow.destroy()
                    //log user out
                });

        }

    };


    const opdaterForm = (event) => {
        event.preventDefault();
        if (!props.formContent[event.target.name]) {
            return
        }

        props.setFormContent({
            ...props.formContent,
            [event.target.name]: {
                [FORM.STATE]: props.formContent[event.target.name][FORM.STATE],
                [FORM.VAERDI]: event.target.value.trim()
            }
        });
    };

    const deaktiverFejl = (event) => {
        forceUpdate();
        console.debug(event.target.name)
        props.formContent[event.target.name][FORM.STATE] = ""
        props.formContent[event.target.name][FORM.ERRORMSG] = null

    }

    const validerNavn = (event) => {
        forceUpdate()
        console.log(props.formContent.navn)
        if (props.formContent.navn.vaerdi.trim() === "") {
            props.formContent.navn.state = FORM.DANGER
            props.formContent.navn[FORM.ERRORMSG] = FEJLBESKED.MISSING_NAME
        } else {
            props.formContent.navn.state = FORM.SUCCES
            props.formContent.navn[FORM.ERRORMSG] = null
        }
    }

    const validerEmail = event => {
        forceUpdate()
        if (props.formContent.email[FORM.VAERDI] !== "" && props.formContent.email[FORM.VAERDI].match(REGEX.email)) {
            props.formContent.email.state = FORM.SUCCES
            props.formContent.email[FORM.ERRORMSG] = null
        } else{
            props.formContent.email.state = FORM.DANGER
            props.formContent.email[FORM.ERRORMSG] = FEJLBESKED.INVALID_EMAIL
        }
    }

    const validerPassword = event => {
        forceUpdate()
        if (props.formContent.password[FORM.VAERDI] !== "" &&
            props.formContent.password[FORM.VAERDI].match(REGEX.password)) {
            props.formContent.password.state = FORM.SUCCES
            props.formContent.password[FORM.ERRORMSG] = null
        } else {
            props.formContent.password.state = FORM.DANGER
            props.formContent.password[FORM.ERRORMSG] = FEJLBESKED.WEAK_PASSWORD
        }

        validerPassword2(event)
    }

    const validerPassword2 = event => {
        forceUpdate()
        if(props.formContent.password.state == FORM.DANGER){
            props.formContent.password2.state = FORM.DANGER
        }
        else if (props.formContent.password[FORM.VAERDI] === props.formContent.password2[FORM.VAERDI] && props.formContent.password2[FORM.VAERDI] !== "") {
            props.formContent.password2.state = FORM.SUCCES
            props.formContent.password2[FORM.ERRORMSG] = null
        } else {
            props.formContent.password2.state = FORM.DANGER
            props.formContent.password2[FORM.ERRORMSG] = FEJLBESKED.PASSWORDS_NOT_IDENTICAL
        }
    }

    const handleCouponBtnState = (event) => {
        event.preventDefault();
        if (event.target.value.trim() === "") {
            props.setFormContent({...props.formContent, ["kuponkode"]: {[FORM.STATE]: "", [FORM.VAERDI]: ""}})

        }
    }

    const forceUpdate = useForceUpdate();

    const handleCouponSubmit = async (event) => {
        event.preventDefault();
        const KUPON = "kuponkode"
        props.setFormContent({
            ...props.formContent,
            [KUPON]: {...props.formContent[KUPON], [FORM.STATE]: FORM.LOADING}
        })

        await firebase.checkCoupon(props.formContent[KUPON].vaerdi)
            .then(res => {
                if (res) {
                    if (res.data.error) {
                        props.setFormContent({
                            ...props.formContent,
                            [KUPON]: {...props.formContent[KUPON], [FORM.STATE]: FORM.DANGER, [FORM.ERRORMSG]: FEJLBESKED.MISSING_COUPON}
                        })
                    } else if (res.data.code) {
                        props.setFormContent({
                            ...props.formContent,
                            [KUPON]: {...props.formContent[KUPON], [FORM.STATE]: FORM.SUCCES, [FORM.ERRORMSG]: null}
                        })
                    } else {
                        props.setFormContent({...props.formContent, [KUPON]: {[FORM.STATE]: "", [FORM.VAERDI]: "",[FORM.ERRORMSG]: null}})
                    }
                }
            })
            .catch(error => {
                console.error(error)
                props.setFormContent({
                    ...props.formContent,
                    [KUPON]: {...props.formContent[KUPON], [FORM.STATE]: FORM.DANGER}
                })
            })
    };

    const handleFejlBesked = (fejlKode, element) => {
        switch (fejlKode) {
            case "fixet":
                props.setFormContent({...props.formContent, [element]: {[FORM.STATE]: "", [FORM.VAERDI]: props.formContent[element][FORM.VAERDI], [FORM.ERRORMSG]: null } })
                break;
            case "auth/weak-password":
                props.setFormContent({...props.formContent, password: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: "", [FORM.ERRORMSG]: FEJLBESKED.WEAK_PASSWORD } })
                props.setFormContent({...props.formContent, password2: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: "", [FORM.ERRORMSG]: FEJLBESKED.WEAK_PASSWORD} })
                break;
            case "auth/argument-error":

                props.setFormContent({...props.formContent, email: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: props.formContent.email[FORM.VAERDI], [FORM.ERRORMSG]: FEJLBESKED.INVALID_EMAIL} })

                break;
            case "auth/email-already-in-use":

                props.setFormContent({...props.formContent, email: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: props.formContent.email[FORM.VAERDI], [FORM.ERRORMSG]: FEJLBESKED.EMAIL_ALREADY_EXIST} })

                break;
            case "tilmelding/kode-mismatch":

                props.setFormContent({...props.formContent, password: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: "", [FORM.ERRORMSG]: FEJLBESKED.PASSWORDS_NOT_IDENTICAL} })
                props.setFormContent({...props.formContent, password2: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: "", [FORM.ERRORMSG]: FEJLBESKED.PASSWORDS_NOT_IDENTICAL} })
                break;
            case "tilmelding/email-mismatch":

                props.setFormContent({...props.formContent, email: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: props.formContent.email[FORM.VAERDI], [FORM.ERRORMSG]: FEJLBESKED.EMAILS_NOT_IDENTICAL} })

                break;
            case "tilmelding/navn-mangler":
                props.setFormContent({...props.formContent, navn: {[FORM.STATE]: FORM.DANGER, [FORM.VAERDI]: props.formContent.navn[FORM.VAERDI], [FORM.ERRORMSG]: FEJLBESKED.MISSING_NAME} })
                break;
        }
    };


    return (
        <>
            <form onSubmit={handleUserCreateSubmit} onChange={opdaterForm}>
                <img src={Havfrue} id="havfrueKrabbe" className="bgImages"/>
                {!opretter ? <>
                <div className="navne_container">
                    <span className="inputBox">
                        <div className="inputBox_inner_left">
                            <label className="required" htmlFor="navn">Hvad må vi kalde dig?</label>
                            <input
                                name="navn"
                                type="text"
                                className={props.formContent.navn.state}
                                onBlur={validerNavn}
                                onFocus={deaktiverFejl}
                                required
                                autoComplete="on"
                                value={props.formContent.navn.vaerdi}
                                placeholder="E.g. dit fornavn"
                            />
                     </div>
                         <div className="inputBox_inner_right">
                            <Ikon validation={props.formContent.navn.state}/>
                        </div>
                     </span>
                </div>
                <FejlBesked besked={props.formContent.navn[FORM.ERRORMSG]} />

                <span className="inputBox">
                    <div className="inputBox_inner_left">
                        <label className="required">Email</label>
                        <input
                            name="email"
                            type="email"
                            className={props.formContent.email.state}
                            required
                            onFocus={deaktiverFejl}
                            onBlur={validerEmail}
                            autoComplete="on"
                            value={props.formContent.email.vaerdi}
                        />
                    </div>

                    <div className="inputBox_inner_right">
                            <Ikon validation={props.formContent.email.state}/>
                    </div>
                </span>
                <FejlBesked besked={props.formContent.email[FORM.ERRORMSG]} />
                <p/>
                <span className="inputBox">
                     <div className="inputBox_inner_left">
                        <label className="required">Kodeord</label>
                        <input
                            name="password"
                            type="password"
                            onBlur={validerPassword}
                            onFocus={deaktiverFejl}
                            className={props.formContent.password.state}
                            value={props.formContent.password.vaerdi} // forsøg
                            required
                        />
                     </div>
                    <div className="inputBox_inner_right">
                        <Ikon validation={props.formContent.password.state}/>
                    </div>
                </span>
              <FejlBesked besked={props.formContent.password[FORM.ERRORMSG]} />
                <span className="inputBox">
                    <div className="inputBox_inner_left">
                        <label className="required">Skriv din kode igen</label>
                        <input
                            name="password2"
                            type="password"
                            onBlur={validerPassword2}
                            onFocus={deaktiverFejl}
                            className={props.formContent.password2.state}
                            value={props.formContent.password2.vaerdi}
                            required
                        />
                    </div>
                    <div className="inputBox_inner_right">
                        <Ikon validation={props.formContent.password2.state}/>
                    </div>
                </span>
              <FejlBesked besked={props.formContent.password2[FORM.ERRORMSG]} />
                <div className="divider"></div>
                <span className="inputBox kuponInput">
                    <div className="inputBox_inner_left">
                        <label htmlFor="kuponkode">Kuponkode</label>
                        <input
                            id="kuponkode"
                            name="kuponkode"
                            className={props.formContent.kuponkode.state}
                            type="text"
                            onChange={handleCouponBtnState}
                            onFocus={deaktiverFejl}
                            placeholder="Skriv eventuel kuponkode her"
                        />

                    </div>
                    <div className="inputBox_inner_right">
                       {props.formContent.kuponkode.state ?
                           <Ikon validation={props.formContent.kuponkode.state}/>
                           : <input id="kuponKnap" type="button" alt="tilføj kuponkode" value="Tilføj" name="kuponkode"
                                    onClick={handleCouponSubmit}/>}
                    </div>
                </span>

                <FejlBesked besked={props.formContent.kuponkode[FORM.ERRORMSG]} />
                 <input
                    id="submitBtn"
                    type="submit"
                    value="Næste skridt 👉"
                    disabled={!( props.formContent.password.state === FORM.SUCCES
                        && props.formContent.password2.state === FORM.SUCCES
                        && props.formContent.email.state === FORM.SUCCES
                        && props.formContent.navn.state === FORM.SUCCES
                        && props.formContent.kuponkode.state !== FORM.DANGER)}
                    // disabled={false}
                />
                </>
                    : <div className="loading_tilmeld">
                        <Ikon validation={FORM.LOADING} />
                    </div>}

            </form>
        </>
    );
}

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Ikon({validation}) {
    function ikon(state) {
        if (state === FORM.SUCCES) {
            return <div className={"validator_ikon"}><img src={SuccesIkon} alt="Succes"/></div>
        } else if (state === FORM.DANGER) {
            return <div className={"validator_ikon"}><img src={FejlIkon} alt="Fejl"/></div>
        } else if (state === FORM.LOADING) {
            return <div className={"validator_ikon loading"}><img src={LoadingIkon} alt="Loading"/></div>
        } else {
            return null
        }
    }

    return (
        ikon(validation)
    )
}

function FejlBesked({besked}) {
    return (<>
            {besked ? <div className="fejlbesked">{besked}</div> : null}
        </>
    )
}
