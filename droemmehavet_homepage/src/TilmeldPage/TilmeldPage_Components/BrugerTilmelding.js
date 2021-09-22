import React, {useState, useContext} from 'react'
import { FirebaseContext } from '../../Shared/Firebase'

export default function BrugerTilmelding(props) {
    const firebase = useContext(FirebaseContext);
    const [formContent, setFormContent] = useState({})
    
    const handleUserCreateSubmit = event =>{
        event.preventDefault()
        if(formContent.email != formContent.email2){
            props.handleFejlBesked('tilmelding/email-mismatch')
            return
        }

        if(formContent.password != formContent.password2){
            props.handleFejlBesked('tilmelding/kode-mismatch')
            return
        }
        // create user in auth
        firebase.doCreateUserWithEmailAndPassword(formContent.email, formContent.password)
        .then(res => console.log(res.json))
        .catch(error => {
            props.handleFejlBesked(error.code)
            console.error(error)
            return
        })
        //create user in DB
        


        props.setPage(1)
        
    }

    const handleChange = event =>{
        event.preventDefault()
        setFormContent({...formContent, [event.target.name]:event.target.value })

        // console.log(formContent)
    }
    return (
        <div>
             <form onSubmit={handleUserCreateSubmit}>
                <label>Navn</label>
                <input name="name" type="text" onChange={handleChange} />

                <label>Email</label>
                <input name="email" type="email" onChange={handleChange}/>
                <label>Skriv din email igen</label>
                <input name="email2" type="email" onChange={handleChange}/>

                <div id="divider"></div>
                
                <label>Kodeord</label>
                <input name="password" type="password" onChange={handleChange}/>

                <label>Skriv din kode igen</label>
                <input name="password2" type="password" onChange={handleChange}/>

                <input type="submit" value="Næste skridt 👉" />
            </form>
        </div>
    )
}
