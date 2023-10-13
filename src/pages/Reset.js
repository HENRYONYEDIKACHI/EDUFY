import { useState, useEfect, useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import StatusBar from '../components/StatusBar'

import '../assets/css/reset.css'
import { IonIcon } from '@ionic/react'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'


export default function Reset() {
    const desc='Accepts an phone/email, send code to phone/email, verifies code is correct and grant permission to reset password'
    
    const {pageCtx, authCtx} = useOutletContext()
    const [contactType, setContactType] = useState('email') // Email or phone
    const [contact, setContact] = useState() // User's email or phone
    const [code, setCode] = useState() // Verification code
    const [newPassword, setNewPassword] = useState() // New password
    
    const fillContact = (event) => {
        setContact(event.target.value)
    }
    const getCode = async () => {
        if (contact) {
            const reqCode = await fetch(`http://${pageCtx.apiRoute}/reset_code`, {
                method: "POST",
                headers: {
                    "accept": "application/json"
                },
                body: JSON.stringify({'email': contact})
            })
            const req = await reqCode.json()
            if(req.res==='OK') {
                alert(req.message)
            } else if (req.res=='Error') {
                alert(req.message)
            }
        }else{
            alert('Must fill in email field')
        }
    }
    return (
        <div className="reset">
            <StatusBar />
            <div className="reset-form">
                <h2 className="form-header">Password Reset</h2>
                <div className="contact-input">
                    <input className="contact-input-field" type="email" placeholder="Enter email" onChange={fillContact} />
                    <div className="contact-action-btn" onClick={()=>getCode()}>
                        <p>Get</p>
                        <p>code</p>
                    </div>
                </div>
                <div className="contact-input verification-code">
                    <input className="contact-input-field code-input" type="tel" maxLength="6" placeholder="Enter code" />
                </div>
                <div className="contact-input new-pass">
                    <input className="contact-input-field" type="password" placeholder="Enter new password" />
                    <div className="contact-action-btn">
                        <IonIcon icon={eyeOutline} style={pageCtx.iconStyle}></IonIcon>
                    </div>
                </div>
                <div className="contact-input new-pass">
                    <input className="contact-input-field" type="password" placeholder="Confirm password" />
                    <div className="contact-action-btn">
                        <IonIcon icon={eyeOutline} style={pageCtx.iconStyle}></IonIcon>
                    </div>
                </div>
                <div className="reset-btn">Submit</div>
            </div>
        </div>
    )
}