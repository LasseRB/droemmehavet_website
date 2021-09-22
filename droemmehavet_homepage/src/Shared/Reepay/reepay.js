import base64 from 'base-64'
class Reepay{
    
    getAPIKeyAsBase64 = () => {
        return base64.encode(process.env.REACT_APP_REEPAY_APIKEY)
    }

    createSubscriberSession = async (handle) => {
        return await fetch('https://checkout-api.reepay.com/v1/session/subscription',
            {
                method: 'POST',
                // mode: 'same-origin',
                headers: {
                    'Authorization': 'Basic ' + this.getAPIKeyAsBase64(),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                 },
        
                body: JSON.stringify({
                    "subscription": handle,
                })
            }).then(res => res.json())
    
        
    }

    createPendingSubscriber = async (userID, handle, name, email) => {
        return await fetch('https://api.reepay.com/v1/subscription/prepare',
            {
                method: 'POST',
                headers: {
                    'authorization': 'Basic ' + this.getAPIKeyAsBase64(),
                    'content-type': 'application/json',
                    'accept': 'application/json'
                 },
                body: JSON.stringify({
                    "plan": process.env.REACT_APP_REEPAY_STANDARD_PLAN,
                    "create_customer": {
                        "email": email,
                        "test": true,
                        "name": name,
                        // "first_name": firstName,
                        // "last_name": lastName,
                        "generate_handle": false,
                        "handle": userID
                    },
                    "handle": handle,
                    "signup_method": "link"
                })
            }).then(response => response.json())
    
        
    }

    renderCheckoutWindow(sessionID){
        if(sessionID != null)
           return new window.Reepay.EmbeddedSubscription(sessionID, { html_element: 'rp_container' } );
        else{
            return new window.Reepay.EmbeddedSubscription(null, { html_element: 'rp_container' } );
        }
    }

    

    createNewSubscriptionHandle = (userID) =>{
        if(userID != null && userID.length > 0)
            return 'subscription-'+userID
        else
            return -1
    }

}
export default Reepay