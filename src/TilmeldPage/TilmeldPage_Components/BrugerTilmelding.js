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
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleUserCreateSubmit = async (event) => {
        event.preventDefault();
        props.setFormContent({
            ...props.formContent,
            'customer_handle': "data.customer",
            'subscription_handle': "data.subscription"
        })
        props.setTilmeldStadie({current: 2});

        async function reepayFlow() {
            const checkoutWindow = new window.Reepay.ModalSubscription();
            const handle = reepay.createNewSubscriptionHandle(props.formContent.email.vaerdi)

            await reepay.createPendingSubscriber(handle, props.formContent.fornavn, props.formContent.efternavn, props.formContent.email, props.formContent.kuponkode)

            await reepay.renderCheckoutWindow(handle, checkoutWindow)

            checkoutWindow.addEventHandler(window.Reepay.Event.Accept, function (data) {
                console.log('suuuccceeeeeess')
                props.setFormContent({
                    ...props.formContent,
                    'customer_handle': data.customer,
                    'subscription_handle': data.subscription
                })
                props.setTilmeldStadie({current: 2});
            });

            checkoutWindow.addEventHandler(window.Reepay.Event.Error, function (data) {
                console.log('betaling fejlede')
                console.error(data)
                props.handleFejlBesked(data.code)
            });

            checkoutWindow.addEventHandler(window.Reepay.Event.Close, function (data) {
                console.log('betaling lukket')
                props.setTilmeldStadie({current: 1});
                //log user out
            });
        }

        // await reepayFlow();

    };
    const validerInput = async event => {

        if (props.formContent.navn[FORM.VAERDI].trim() === "") {
            props.formContent.navn.state = ""
        } else {
            props.formContent.navn.state = FORM.SUCCES
        }

        if (props.formContent.email[FORM.VAERDI] !== "" &&
            props.formContent.email[FORM.VAERDI].match(REGEX.email)) {
                await firebase.doFetchSignForEmail(props.formContent.email[FORM.VAERDI])
                    .then(res => {
                        console.log(res)
                        if (res === []){
                            props.formContent.email.state = FORM.SUCCES
                            props.handleFejlBesked("fixet error")
                        }
                        else {
                            props.formContent.email.state = FORM.DANGER
                            props.handleFejlBesked("auth/email-already-in-use")
                        }
                    })
        }

        if (props.formContent.password !== "" &&
            props.formContent.password[FORM.VAERDI].match(REGEX.password)) {
            props.formContent.password.state = FORM.SUCCES
        }

    }

    const valider = async (e) => {

        // setEnableSubmit(
        //     (props.formContent.password.vaerdi !== props.formContent.password2.vaerdi ||
        //         (props.formContent.password.vaerdi === "" &&
        //             props.formContent.password2.vaerdi === "") ||
        //         (props.formContent.email.vaerdi === ""))
        // );

        // console.log(e.target.id);
        // if (e.target.id === "NextStep" && props.formContent.navn.vaerdi === "") {
        //     props.handleFejlBesked("tilmelding/navn-mangler");
        // }
        // if (
        //     props.formContent.navn.vaerdi !== "" &&
        //     e.target.name === props.formContent.navn.vaerdi
        // ) {
        //     props.handleFejlBesked("fixet error");
        // }
        //
        // if (
        //     "abonnementvilkaar" == e.target.name &&
        //     props.formContent.password.vaerdi != props.formContent.password2.vaerdi
        // ) {
        //     props.handleFejlBesked("tilmelding/kode-mismatch");
        // }
        // if (
        //     ("password2" == e.target.name.vaerdi ||
        //         "password1" == e.target.name.vaerdi ||
        //         "abonnementvilkaar" == e.target.name.vaerdi) &&
        //     props.formContent.password.vaerdi == props.formContent.password2.vaerdi &&
        //     props.formContent.password2.vaerdi !== ""
        // ) {
        //     props.handleFejlBesked("fixet error");
        // }
    };

    // || props.formContent.acceptAfVilkaar == true;

    const handleChange = async (event) => {
        event.preventDefault();
        props.setFormContent({
            ...props.formContent,
            [event.target.name]: {
                [FORM.STATE]: props.formContent[event.target.name][FORM.STATE],
                [FORM.VAERDI]: event.target.value
            },
        });

        await validerInput(event);
    };
    const handleCouponInput = (event) => {
        event.preventDefault();
        const KUPON = "kuponkode"

        if (event.target.value.trim() === "") {
            props.setFormContent({...props.formContent, [KUPON]: {[FORM.STATE]: "", [FORM.VAERDI]: ""}})
            return
        }

        if (event.target.value.trim() === props.formContent[KUPON][FORM.VAERDI])
            return

        props.setFormContent({
            ...props.formContent,
            [KUPON]: {[FORM.STATE]: "", [FORM.VAERDI]: event.target.value.trim()}
        })

    }

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
                            [KUPON]: {...props.formContent[KUPON], [FORM.STATE]: FORM.DANGER}
                        })
                    } else if (res.data.code) {
                        props.setFormContent({
                            ...props.formContent,
                            [KUPON]: {...props.formContent[KUPON], [FORM.STATE]: FORM.SUCCES}
                        })

                        valider(event);
                    } else {
                        props.setFormContent({...props.formContent, [KUPON]: {[FORM.STATE]: "", [FORM.VAERDI]: ""}})
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

    return (
        <>
            <form onSubmit={handleUserCreateSubmit}>
                <img src={Havfrue} id="havfrueKrabbe" className="bgImages"/>
                <div className="navne_container">
                    <span className="inputBox">
                        <label className="required" htmlFor="navn">Hvad må vi kalde dig?</label>
                        <input
                            name="navn"
                            type="text"
                            className={props.formContent.navn.state}
                            onInput={handleChange}
                            required
                            autoComplete="on"
                            value={props.formContent.navn.vaerdi}
                            placeholder="E.g. dit fornavn"
                        />
                    </span>

                </div>
                <span className="inputBox">
                    <label className="required">Email</label>
                    <input
                        name="email"
                        type="email"
                        className={props.formContent.email.state}
                        onInput={handleChange}
                        required
                        autoComplete="on"
                        value={props.formContent.email.vaerdi}
                    />
                </span>
                {/*<div className="divider"></div>*/}
                <p/>
                <span className="inputBox">
                    <label className="required">Kodeord</label>
                    <input
                        name="password"
                        type="password"
                        className={props.formContent.password.state}
                        onInput={handleChange}
                        value={props.formContent.password.vaerdi} // forsøg
                        required
                    />
                </span>
                <span className="inputBox">
                <label className="required">Skriv din kode igen</label>
                <input
                    name="password2"
                    type="password"
                    className={props.formContent.password2.state}
                    onInput={handleChange}
                    value={props.formContent.password2.vaerdi}
                    required
                />
                </span>

                <div className="divider"></div>
                <span className="inputBox kuponInput">
                    <div className="kuponInput_kode">
                        <label htmlFor="kuponkode">Kuponkode</label>
                        <input
                            id="kuponkode"
                            className={props.formContent.kuponkode.state}
                            type="text"
                            placeholder="Skriv eventuel kuponkode her"
                            onInput={handleCouponInput}
                        />

                    </div>

                    <div className="kuponInput_knap">
                       {props.formContent.kuponkode.state ?
                           <Ikon validation={props.formContent.kuponkode.state}/>
                           : <input id="kuponKnap" type="button" alt="tilføj kuponkode" value="Tilføj" name="kuponkode"
                                    onClick={handleCouponSubmit}/>}
                    </div>
                </span>

                <input
                    id="submitBtn"
                    type="submit"
                    value="Næste skridt 👉"
                    disabled={enableSubmit}
                    // disabled={false}
                />
            </form>
        </>
    );
}

function Ikon({validation}) {

    function ikon(state) {
        if (state === FORM.SUCCES) {
            return <img className="validator_ikon" src={SuccesIkon}/>
        } else if (state === FORM.DANGER) {
            return <img className="validator_ikon" src={FejlIkon}/>
        } else if (state === FORM.LOADING) {
            return <img className="validator_ikon loading" src={LoadingIkon}/>
        } else {
            return null
        }
    }

    return (
        ikon(validation)
    )
}