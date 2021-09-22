import React, {useEffect, useContext, useRef} from 'react'
import Reepay from '../../Shared/Reepay/reepay'
import { FirebaseContext } from '../../Shared/Firebase'

export default function BetalingsTilmelding(props) {
    const reepay = new Reepay()
    const firebase = useContext(FirebaseContext)
    const rpRef = useRef()
    useEffect(() => {
            const user = firebase.getCurrentUser()
            reepay.renderCheckoutWindow(user)
    
    }, [])
    return (
        <div>
            <div id="rp_container" ref={rpRef} style={{width: "500px", height:" 730px"}}></div>
        </div>
    )
}
