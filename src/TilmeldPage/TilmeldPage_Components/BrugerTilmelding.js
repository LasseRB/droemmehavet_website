import React, {useContext, useEffect, useState} from "react";
import Havfrue from '../../images/KrabbeOgFødselsdagsbarn.png';
import FejlIkon from '../../images/fejl.svg'
import SuccesIkon from '../../images/check.svg'
import LoadingIkon from '../../images/loading.svg'
import {reepay} from "../../Shared/Reepay/reepay";
import {FirebaseContext} from "../../Shared/Firebase";


export default function BrugerTilmelding(props) {
    const firebase = useContext(FirebaseContext);
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [harKupon, setHarKupon] = useState(null)
    const handleUserCreateSubmit = async (event) => {
        event.preventDefault();
        const checkoutWindow = new window.Reepay.ModalSubscription();
        const handle = reepay.createNewSubscriptionHandle(props.formContent.email)

        await reepay.createPendingSubscriber(handle, props.formContent.fornavn, props.formContent.efternavn, props.formContent.email)
        await reepay.renderCheckoutWindow(handle, checkoutWindow)

        checkoutWindow.addEventHandler(window.Reepay.Event.Accept, function (data) {
            props.setFormContent({
                ...props.formContent,
                'customer_handle': data.customer,
                'subscription_handle': data.subscription
            })
            props.setTilmeldStadie({current: 3});
        });

        checkoutWindow.addEventHandler(window.Reepay.Event.Error, function (data) {
            console.log('betaling fejlede')
            console.error(data)
            props.handleFejlbesked(data.code)
        });

        checkoutWindow.addEventHandler(window.Reepay.Event.Close, function (data) {
            console.log('betaling lukket')
            props.setTilmeldStadie({current: 1});
            //log user out
        });

    };
    const valider = (e) => {
        setEnableSubmit(
            (props.formContent.password !== props.formContent.password2 ||
                (props.formContent.password === "" &&
                    props.formContent.password === "") ||
                (props.formContent.email === "" && props.formContent.email2 === "") ||
                props.formContent.email !== props.formContent.email2 ||
                props.formContent.fornavn === "")
        );

        // console.log(e.target.id);
        if (e.target.id == "NextStep" && props.formContent.fornavn == "") {
            props.handleFejlBesked("tilmelding/navn-mangler");
        }
        if (
            props.formContent.fornavn != "" &&
            e.target.name == props.formContent.fornavn
        ) {
            props.handleFejlBesked("fixet error");
        }

        if (
            "password" == e.target.name &&
            props.formContent.email != props.formContent.email2 &&
            props.formContent.email2 !== ""
        ) {
            props.handleFejlBesked("tilmelding/email-mismatch");
        }

        if (
            ("password" == e.target.name ||
                "email1" == e.target.name ||
                "email2" == e.target.name) &&
            props.formContent.email == props.formContent.email2 &&
            props.formContent.email2 !== ""
        ) {
            props.handleFejlBesked("fixet error");
        }

        if (
            "abonnementvilkaar" == e.target.name &&
            props.formContent.password != props.formContent.password2
        ) {
            props.handleFejlBesked("tilmelding/kode-mismatch");
        }
        if (
            ("password2" == e.target.name ||
                "password1" == e.target.name ||
                "abonnementvilkaar" == e.target.name) &&
            props.formContent.password == props.formContent.password2 &&
            props.formContent.password2 !== ""
        ) {
            props.handleFejlBesked("fixet error");
        }
    };

    // || props.formContent.acceptAfVilkaar == true;

    const handleChange = (event) => {
        event.preventDefault();
        props.setFormContent({
            ...props.formContent,
            [event.target.name]: event.target.value,
        });
        valider(event);
        // console.log(props.formContent);
    };

    const handleCoupon = async (event) => {
        event.preventDefault();
        if(event.target.value.trim() == ""){
            setHarKupon(null)
            return
        }

        await firebase.checkCoupon(event.target.value)
            .then(res => {
                console.log(res)
                if(res){
                    if (res.data.error) {
                        setHarKupon('danger')
                    } else if (res.data.name) {
                        setHarKupon('succes')
                    } else {
                        setHarKupon(null)

                    }
                }

            })
            .catch(error => {
                console.error(error)
                setHarKupon('danger')
            })
    };

    return (
        <>
            <form onSubmit={handleUserCreateSubmit}>
                <img src={Havfrue} id="havfrueKrabbe" className="bgImages"/>
                <div className="navne_container">
                    <span className="inputBox">
                        <label className="required" htmlFor="fornavn">Hvad må vi kalde dig?</label>
                        <input
                            name="fornavn"
                            type="text"
                            onChange={handleChange}
                            required
                            autoComplete="on"
                            value={props.formContent.fornavn}
                            placeholder="E.g. dit fornavn"
                        />
                    </span>

                </div>
                <span className="inputBox">
                    <label className="required">Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        required
                        autoComplete="on"
                        value={props.formContent.email}
                    />
                </span>
                {/*<div className="divider"></div>*/}
                <p/>
                <span className="inputBox">
                    <label className="required">Kodeord</label>
                    <input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={props.formContent.password}
                        required
                    />
                </span>
                <span className="inputBox">
                <label className="required">Skriv din kode igen</label>
                <input
                    name="password2"
                    type="password"
                    onChange={handleChange}
                    value={props.formContent.password2}
                    required
                />
                </span>

                <div className="divider"></div>
                <span className="inputBox">
                    <label htmlFor="kuponkode">Kuponkode</label>
                    <input id="kuponkode" className={ harKupon } type="text" name="kuponkode" placeholder="Skriv eventuel kuponkode her"
                           onInput={handleCoupon}/>
                    <Ikon validation={harKupon}/>
                    {/*<input id="kuponKnap" type="button" value="tilføj kode"/>*/}
                </span>

                <input
                    id="submitBtn"
                    type="submit"
                    value="Næste skridt 👉"
                    // disabled={enableSubmit}
                    disabled={false}
                />
            </form>
        </>
    );
}

function Ikon({validation}) {

    function ikon(state) {
        if (state === 'succes') {
            return <img className="validator_ikon" src={ SuccesIkon } />
        } else if (state === 'danger') {
            return <img className="validator_ikon" src={ FejlIkon } />
        } else {
            return null
        }
    }

    return (
        ikon(validation)
    )
}