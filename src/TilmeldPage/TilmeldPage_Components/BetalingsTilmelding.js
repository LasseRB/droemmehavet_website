import React, {useState, useEffect, useContext, useRef} from 'react'
import {reepay} from '../../Shared/Reepay/reepay'
import {FirebaseContext} from '../../Shared/Firebase'
import {PaymentInputsWrapper, usePaymentInputs} from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import {BrowserRouter as Router, Switch, Link, Route, useHistory} from "react-router-dom";
import BrugerLoadingScreen from './BrugerLoadingScreen'
import Lochness from "../../images/loch_ness_fuld.png";

export default function BetalingsTilmelding(props) {
    const firebase = useContext(FirebaseContext)
    const rpRef = useRef()
    let history = useHistory();
    const [oprettetIReepay, setOprettetIReepay] = useState(false)

    const createNewCustomer = async () => {
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
            setOprettetIReepay(true)
        });

        checkoutWindow.addEventHandler(window.Reepay.Event.Error, function (data) {
            console.log('betaling fejlede')
            console.error(data)
            props.handleFejlbesked(data.code)
        });


        checkoutWindow.addEventHandler(window.Reepay.Event.Close, function (data) {
            console.log('betaling lukket')
            history.push('/')
            //log user out
        });
    }
    useEffect(() => {
        createNewCustomer()

    }, [])

    return (
        <>
            {/*{!oprettetIReepay ?*/}
            {/*     <form className="betalingsform" action="#">*/}
            {/*         <img src={Lochness} id="lochness" className="bgImages"/>*/}
                    {/*< PaymentInputs/>*/}
                    {/*<div id="rp_container" ref={rpRef}></div>*/}
                    {/*<div id="divider"></div>*/}
                    {/*<div className="bottom_container">*/}
                    {/*    <div className="kuponkode_container">*/}
                    {/*    <span>*/}
                    {/*        <label htmlFor="kuponkode">Kuponkode</label>*/}
                    {/*        <input id="kuponkode" type="text" name="kuponkode"*/}
                    {/*               placeholder="Skriv eventuel kuponkode her"/>*/}
                    {/*        </span>*/}
                    {/*        <span>*/}
                    {/*            <input id="kuponKnap" type="button" value="tilføj kode"/>*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*    <span className="abonnementvilkaar">*/}

                    {/*      <label className="required">*/}
                    {/*        Jeg accepterer Drømmehavets <a href="http://droemmehavet.dk/handelsbetingelser"*/}
                    {/*                                       target="_blank"> handelsbetingelser </a> og <a*/}
                    {/*          href="http://droemmehavet.dk/privatlivspolitik" target="_blank"> privatlivspolitik</a>*/}
                    {/*      </label>*/}
                    {/*      <input*/}
                    {/*          name="abonnementvilkaar"*/}
                    {/*          type="checkbox"*/}
                    {/*          required*/}
                    {/*          // onSubmit={handleChange}*/}
                    {/*      />*/}
                    {/*</span>*/}
                    {/*</div>*/}
                    {/*<input*/}
                    {/*    id="submitBtn"*/}
                    {/*    type="submit"*/}
                    {/*    value="Gem betalingskort"*/}
                    {/*    // disabled={enableSubmit}*/}
                    {/*/>*/}
                 {/*</form>*/}
                 <BrugerLoadingScreen handleFejlBesked={props.handleFejlBesked} formContent={props.formContent}
                                       currentUser={props.currentUser} setTilmeldStadie={props.setTilmeldStadie}/>
            }
        </>
    )
}

export function PaymentInputs() {
    const [kortOplysninger, setKortOplysninger] = useState({kortnummer: "", udloebsdato: "", cvc: ""})

    const ERROR_MESSAGES = {
        emptyCardNumber: 'Kortnummeret skal være udfyldt.',
        invalidCardNumber: 'Ugyldigt kortnummer. Har du indtastet det korrekt?',
        emptyExpiryDate: 'Udløbsdato skal være udfyldt.',
        monthOutOfRange: 'Måneden skal være mellem 01 og 12.',
        yearOutOfRange: 'Udløbsåret må ikke ligge i fortiden.',
        dateOutOfRange: 'Udløbsdatoen må ikke ligge i fortiden.',
        invalidExpiryDate: 'Ugyldigt udløbsdato. Har du indtastet det korrekt?',
        emptyCVC: 'Kontrolcifrene skal være udfyldt.',
        invalidCVC: 'Ugyldige kontrolcifre. Har du indtastet dem korrekt?'
    }

    const {
        meta,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs(
        {errorMessages: ERROR_MESSAGES}
    );
    const {erroredInputs, touchedInputs} = meta;
    const handleChange = (event) => {
        setKortOplysninger({
            ...kortOplysninger,
            [event.currentTarget.name]: event.currentTarget.value
        })
        return console.log(erroredInputs)
    }

    return (
        <div className="payments_container">
            <div id="kortnummer_container" className="payment-inner">
                <label htmlFor="kortnummer">Kortnummer</label>
                <input
                    className={erroredInputs.cardNumber && touchedInputs.cardNumber ? 'danger' : ''}
                    {...getCardNumberProps({onChange: handleChange})}
                    name="kortnummer" value={kortOplysninger.kortnummer} placeholder="0000 0000 0000 0000"
                    label="kortnummer" aria-label="kortnummer"/>
                <div id="kort">
                    <svg {...getCardImageProps({images})} />
                </div>
                {erroredInputs.cardNumber && touchedInputs.cardNumber && (meta.isTouched && meta.error) &&
                <span className="error">{meta.erroredInputs.cardNumber}</span>}
            </div>
            <div id="udloeb_cvc_container" className="payment-inner">
                <span>
                    <label htmlFor="udloebsdato">Udløbsdato</label>
                    <input
                        className={erroredInputs.expiryDate && touchedInputs.expiryDate ? 'danger' : ''}
                        {...getExpiryDateProps({onChange: handleChange})} name="udloebsdato"
                        value={kortOplysninger.udloebsdato} placeholder="MM / ÅÅ" label="udløbsdato"
                        aria-label="udløbsdato"/>
                    {erroredInputs.expiryDate && touchedInputs.expiryDate &&
                    <span className="error"><br/> {meta.erroredInputs.expiryDate}</span>}

                </span>
                <span>
                    <label htmlFor="cvc">Kontrolcifre</label>
                    <input
                        className={erroredInputs.cvc && touchedInputs.cvc ? 'danger' : ''}
                        {...getCVCProps({onChange: handleChange})} name="cvc" value={kortOplysninger.cvc}
                        placeholder="123" label="kontrolcifre" aria-label="kontrolcifre"/>
                    {erroredInputs.cvc && touchedInputs.cvc && (meta.isTouched && meta.error) &&
                    <span className="error"><br/> {meta.erroredInputs.cvc}</span>}

                </span>
            </div>

        </div>
    );

}