import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";

export default function BrugerTilmelding(props) {
    let history = useHistory();
    
    const handleUserCreateSubmit = event =>{
        event.preventDefault()
        if(props.formContent.email != props.formContent.email2){
            props.handleFejlBesked('tilmelding/email-mismatch')
            return
        }

        if(props.formContent.password != props.formContent.password2){
            props.handleFejlBesked('tilmelding/kode-mismatch')
            return
        }
        else{
            history.push('/tilmeld/2')
        }
        
    }

    const handleChange = event =>{
        event.preventDefault()
        props.setFormContent({...props.formContent, [event.target.name]:event.target.value })
    }

    return (
        <div>
             <form onSubmit={handleUserCreateSubmit}>
                <label>For -og mellemnavn(e)</label>
                <input name="fornavn" type="text" onChange={handleChange} required/>
                
                <label>Efternavn(e)</label>
                <input name="efternavn" type="text" onChange={handleChange} />
                
                <label>Email</label>
                <input name="email" type="email" onChange={handleChange} required/>
                <label>Skriv din email igen</label>
                <input name="email2" type="email" onChange={handleChange} required/>

                <div id="divider"></div>
                
                <label>Kodeord</label>
                <input name="password" type="password" onChange={handleChange} required/>

                <label>Skriv din kode igen</label>
                <input name="password2" type="password" onChange={handleChange} required/>

                <input type="submit" value="Næste skridt 👉" />
            </form>
        </div>
    )
}
