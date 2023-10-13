import { useState, useContext } from 'react'
import { useOutletContext, Link, redirect } from 'react-router-dom'

import StatusBar from '../components/StatusBar'
// import LoadingState from '../components/LoadingState'

import '../assets/css/Signup.css'

import { IonIcon } from '@ionic/react'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'

function Signup() {
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPass] = useState('')
    const [match, setMatch] = useState(true)
    
    const {pageCtx, authCtx} = useOutletContext()
    
    if (authCtx.user.username !== 'Guest' && authCtx.user.loggedIn !== false) {
        pageCtx.navigateTo('/')
    }
    const handleView = async (xpage) => {
        pageCtx.navigateTo(xpage)
    }
    const handleMail = async (event) => {
        setEmail(event.target.value)
    }
    const handleUserName = async (event) => {
        setUserName(event.target.value)
    }
    const handleFirstName = async (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = async (event) => {
        setLastName(event.target.value)
    }
    const handlePass = async (event) => {
        setPass(event.target.value)
    }
    const handlePass2 = async (event) => {
        if (event.target.value !== password ) {
            setMatch(false)
        } else {
            setMatch(true)
        }
    }
    
    const signupAction = async (event) => {
        if (email === '') {
            alert('Email is required!')
        } else if (username === '') {
            alert('Username is required!')
        } else if (firstname === '') {
            alert('Firstname is required!')
        } else if (lastname === '') {
            alert('Lastname is required!')
        } else if (password === '') {
            alert('Password is required!')
        } else if (!match) {
            alert('Passwords do not match!')
        } else if (email !== '' || username !== '' || password !== '' || firstname !== '' || lastname !== '') {
            // alert("All fields are filled, all that's left is to reel")
            
            const formData = {'email': email, 'username': username, 'firstname': firstname, 'lastname': lastname, 'password': password}
            try {
                const req = await fetch('http://127.0.0.1:8080/signup', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'accept': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                const res = await req
                if (res.status === 200) {
                    const data = await res.json()
                    if (data.res.type === 'error') {
                        alert(data.res.message)
                    } else if (data.res.type === 'success') {
                        authCtx.onLogIn(data.res)
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    const [showPass1, setShowPass1] = useState()
    const [showPass2, setShowPass2] = useState()

    const togglePass = async (passId) => {
        if (passId && passId===1) {
            if (showPass1) {setShowPass1(false)}
            else{setShowPass1(true)}
        } else if (passId && passId===2) {
            if (showPass2) {setShowPass2(false)}
            else{setShowPass2(true)}
        }
    }
    return (
        <div className="container">
            <StatusBar auths={true} />
            <div className="signup-cover" >
                <span className="signuptxt" >Sign up</span>
                <div method="post" className="signup-form" >
                    <input name="email" onChange={handleMail} type="email" placeholder="Email" className="signup-fields" />
                    <input name="username" onChange={handleUserName} type="text" placeholder="Username" className="signup-fields" />
                    <input name="firstname" onChange={handleFirstName} type="text" placeholder="First Name" className="signup-fields" />
                    <input name="lastname" onChange={handleLastName} type="text" placeholder="Last Name" className="signup-fields" />
                    <div className="password-cover">
                        <input name="password" onChange={handlePass} type={showPass1 ? "text" : "password"} placeholder="Password" className="signup-fields password-field" />
                        <div className="pass-icon" onClick={()=>togglePass(1)}>
                            <IonIcon icon={showPass1 ? eyeOffOutline : eyeOutline} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                    </div>
                    {!match ? <span className="passErr" >Passwords do not match</span>: ''}
                    <div className="password-cover">
                        <input name="password2" onChange={handlePass2} type={showPass2 ? "text" : "password"} placeholder="Confirm Password" className="signup-fields password-field" />
                        <div className="pass-icon" onClick={()=>togglePass(2)}>
                            <IonIcon icon={showPass2 ? eyeOffOutline : eyeOutline} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup-actions">
                <button className="signup-btn" type="submit" onClick={signupAction} >Signup</button>
                <div className="others">
                    <Link to="/reset" className="otherOpts" >Reset Password</Link>
                    <Link to="/signin" className="otherOpts" >Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup