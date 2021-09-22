import React, {useEffect, useContext, useRef} from 'react'
import Reepay from '../../Shared/Reepay/reepay'
import { FirebaseContext } from '../../Shared/Firebase'

export default function BetalingsTilmelding(props) {
    const reepay = new Reepay()
    const firebase = useContext(FirebaseContext)
    const rpRef = useRef()
    useEffect(() => {
        const handle = reepay.createNewSubscriptionHandle(firebase.getCurrentUser().uid)
        reepay.createPendingSubscriber(firebase.getCurrentUser().uid, handle, 'lars', 'lars@email.dk')
        const session = reepay.createSubscriberSession(firebase.getCurrentUser().uid) 
        reepay.renderCheckoutWindow(session.id)
    }, [])
    return (
        <div>
            <div id="rp_container" ref={rpRef} style={{width: "500px", height:" 730px"}}></div>
        </div>
    )
}
