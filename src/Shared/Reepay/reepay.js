class Reepay{

    createSubscriberSession = async (handle) => {
        return await fetch('https://droem-hn4sec6b7a-lz.a.run.app/reepay/subsession?handle='+handle,
            {
                method: 'GET',
                mode: 'cors',
               
            }).then(res => res.json())
            .catch(error => console.error(error))
    
        
    }

    createPendingSubscriber = async (handle, fornavn, efternavn, email) => {
        return await fetch('https://droem-hn4sec6b7a-lz.a.run.app/reepay/pendingsub?handle='+handle+'&fornavn='+fornavn+'&efternavn='+efternavn+'&email='+email,
            {
                method: 'GET',
                mode: 'cors',
                
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
        return await fetch('https://droem-hn4sec6b7a-lz.a.run.app/reepay/customer?handle='+handle,
        {
            method: 'GET',
            mode: 'cors'
          
        }).then(response => response.json())
        .catch(error => error.json())
    
    }

    createNewSubscriptionHandle = (userID) =>{
        if(userID != null && userID.length > 0)
            return 'subscription-'+(Math.random()* 10) +userID
        else
            return 'subscription-'+ Math.random() * 10
    }

}
export const reepay = new Reepay()
export default Reepay
