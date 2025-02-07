import React from 'react'
import { useState } from 'react'
import '../Styles/styles.css'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [credentials, setCredentials] = useState({})

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const myHeaders = new Headers();
    
    myHeaders.append("Content-Type", "application/json");

    const handleClick = async () => {
        try {
            const response = await fetch('https://frontend-take-home-service.fetch.com/auth/login', {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({name,email})
              });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
            const data = await response;
            console.log(data, 'login successful');
            setCredentials(data)
            return data
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    //Form validation for email. Not my regex -- thanks emailregex.com, for sharing a 99.99% solution! 
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const disabled = !regex.test(email)

    return (
        <>
            <form>
                <input type='text' placeholder='name' onChange={handleName} />
                <input name='email' type='email' placeholder='email' onChange={handleEmail} />
                {disabled && <label for='email'>Enter a valid email address</label>}
                <button className='login-button' onClick={handleClick} disabled={disabled}>Login</button>
                {credentials.status}
            </form>
        </>
    )
}

export default Login