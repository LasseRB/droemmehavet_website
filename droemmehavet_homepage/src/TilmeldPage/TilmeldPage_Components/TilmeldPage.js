import React, {useState} from 'react'
import BrugerTilmelding from './BrugerTilmelding'
import BetalingsTilmelding from './BetalingsTilmelding'
import { FEJLBESKED } from './tilmeldingsfejlbeskeder'

export default function TilmeldPage() {
    const [fejlbesked, setFejlbesked] = useState('')
    const [page, setPage] = useState(0)

    // renderer fejlbeskeder på siden, på dansk
    const handleFejlBesked = (fejlKode) => {
        switch(fejlKode){
            case "auth/weak-password":  
                setFejlbesked(FEJLBESKED.WEAK_PASSWORD)
                break;
            case "auth/argument-error":
                setFejlbesked(FEJLBESKED.INVALID_EMAIL)
                break;
            case "auth/email-already-in-use":
                setFejlbesked(FEJLBESKED.EMAIL_ALREADY_EXIST)
                break;
            case "tilmelding/kode-mismatch":
                setFejlbesked(FEJLBESKED.PASSWORDS_NOT_IDENTICAL)
                break;
            case "tilmelding/email-mismatch":
                setFejlbesked(FEJLBESKED.EMAILS_NOT_IDENTICAL)
                break;
            default:
                setFejlbesked("Der skete en fejl, prøv igen!")

        }
    }
    return (
        <div>
            <div className="fejlbesked">{fejlbesked}</div>
            {page == 0 ? 
            <BrugerTilmelding handleFejlBesked ={ handleFejlBesked } setPage = {setPage}/> :
            <BetalingsTilmelding handleFejlBesked ={ handleFejlBesked } />
        }
        </div>
    )
}
