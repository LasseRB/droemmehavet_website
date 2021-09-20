import React, {useState} from 'react'

export default function TilmeldPage() {
    const [formContent, setFormContent] = useState({})
    const handleSubmit = event =>{
        event.preventDefault()
    }

    const handleChange = event =>{
        event.preventDefault()
        setFormContent({...formContent, [event.target.name]:event.target.value })

        console.log(formContent)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Navn</label>
                <input name="name" type="text" onChange={handleChange} />

                <label>Email</label>
                <input name="email" type="email" onChange={handleChange}/>

                <div id="divider"></div>
                
                <label>Kodeord</label>
                <input name="password" type="password" onChange={handleChange}/>

                <input type="submit" />
            </form>
        </div>
    )
}
