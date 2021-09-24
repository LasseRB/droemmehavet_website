import React, {useState, useEffect, useContext, useRef} from 'react'
import { reepay }from '../../Shared/Reepay/reepay'
import { FirebaseContext } from '../../Shared/Firebase'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";
import BrugerLoadingScreen from './BrugerLoadingScreen'

export default function BetalingsTilmelding(props) {
    const firebase = useContext(FirebaseContext)
    const rpRef = useRef()
    let history = useHistory();
    const [oprettetIReepay, setOprettetIReepay] = useState(false)
    
    const createNewCustomer= async ()=>{
            const checkoutWindow = new window.Reepay.EmbeddedSubscription(null, { html_element: 'rp_container' } );
            const handle = reepay.createNewSubscriptionHandle(props.formContent.email)

            await reepay.createPendingSubscriber(handle, props.formContent.fornavn,props.formContent.efternavn, props.formContent.email) 
            await reepay.renderCheckoutWindow(handle, checkoutWindow)
            
            checkoutWindow.addEventHandler(window.Reepay.Event.Accept, function(data) {
                props.setFormContent({...props.formContent, 'customer_handle': data.customer,'subscription_handle': data.subscription})
                setOprettetIReepay(true)
            });

            checkoutWindow.addEventHandler(window.Reepay.Event.Error, function(data) {
                console.log('betaling fejlede')
                console.error(data)
                props.handleFejlbesked(data.code)
                history.push('/tilmeld/1')
            });

            checkoutWindow.addEventHandler(window.Reepay.Event.Close, function(data) {
                console.log('betaling lukket')
                history.push('/')
                //log user out
            });
    }
    useEffect(() => {
        createNewCustomer()
      
    }, [])
    return (
        <div>
            {!oprettetIReepay ? 
            <div id="rp_container" ref={rpRef} style={{width: "500px", height:" 730px"}}></div> 
            : 
            <BrugerLoadingScreen handleFejlBesked ={ props.handleFejlBesked } formContent = { props.formContent } currentUser = {props.currentUser}/>

            }
        </div>
    )
}
