class Reepay{

    createSubscriberSession = async (handle) => {
        return await fetch('https://droem-hn4sec6b7a-lz.a.run.app/reepay/subsession?handle='+handle,
            {
                method: 'GET',
                mode: 'cors',
               
            }).then(res => res.json())
            .catch(error => console.error(error))
    
        
    }

    createPendingSubscriber = async (handle, navn, email, kuponkode) => {
        return await fetch('https://droem-hn4sec6b7a-lz.a.run.app/reepay/pendingsub?handle='+handle+'&navn='+navn+'&email='+email+'&kuponkode='+kuponkode,
            {
                method: 'GET',
                mode: 'cors',
            }).then(response => {
            console.log(response.json())
        })
            .catch(error => console.error(error))
    }

    async renderCheckoutWindow(handle, rp){
            console.log(handle, rp)
            if (!handle ) return
            const session = await this.createSubscriberSession(handle)
            console.log(session)
            if (!session.id) return
            rp.show(session.id, {showReceipt: false})
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
