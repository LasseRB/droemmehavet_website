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

    createPendingSubscriber = async (handle, fornavn, efternavn, email) => {
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
                        "first_name": fornavn,
                        "last_name": efternavn || "",
                        "generate_handle": true,
                        // "handle": userID
                    },
                    "handle": handle,
                    "signup_method": "link",
                })
            }).then(response => response.json())
            .catch(error => console.error(error))
    
        
    }

    async renderCheckoutWindow(handle, rp){
        if(handle){
            const session = await this.createSubscriberSession(handle)
            rp.show(session.id) 
        }
    }

    async getCustomer(handle) {
        return await fetch('https://api.reepay.com/v1/customer/'+handle,
        {
            method: 'GET',
            headers: {
                'authorization': 'Basic ' + this.getAPIKeyAsBase64(),
                'content-type': 'application/json',
                'accept': 'application/json'
             }
        }).then(response => response.json())
        .catch(error => error.json())
    
    }

    createNewSubscriptionHandle = (userID) =>{
        if(userID != null && userID.length > 0)
            return 'subscription-'+userID
        else
            return -1
    }

}
export const reepay = new Reepay()
export default Reepay
