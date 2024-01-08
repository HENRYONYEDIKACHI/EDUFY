import { useState, useContext } from 'react'
import { useOutletContext, Link } from 'react-router-dom'

import { useIonToast } from '@ionic/react'
import StatusBar from '../components/StatusBar'
import BackFill from '../components/BackFill'
// import LoadingState from '../components/LoadingState'

import '../assets/css/Signin.css'

export default function Signin({pageCtx,authCtx}) {
    // const {pageCtx, authCtx} = useOutletContext()
    
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [loading, setLoading] = useState(false)
    
    if (authCtx.user.loggedIn !== false) {
        window.location='/'
    }
    const handleView = (xpage) => {
        pageCtx.navigateTo(xpage)
    }
    
    const handleMail = async (event) => {
        setEmail(event.target.value)
    }
    const handlePass = async (event) => {
        setPass(event.target.value)
    }
    const loginAction = async () => {
        if (email === '' || password === '') {
            alert('Empty fields detected!')
        } else if (email !=='' && password !=='') {
            const formData = {'email': email, 'password': password}
            const req = await fetch(`http://${pageCtx.apiRoute}/signin`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            const res = await req
            localStorage.removeItem('chappUser')
            if (res.status === 200) {
                const data = await res.json()
                console.log(data)
                if (data.res === 'Error') {
                    alert(data.error)
                } else if (data.res === 'OK') {
                    authCtx.onLogIn(data.message)
                } else {
                    alert('An unknown error occurred')
                }
            } else {
                alert('An error occurred!')
            }
        }
    }
    const [present] = useIonToast();

    const presentToast = (position: 'top' | 'middle' | 'bottom') => {
        present({
            message: 'Hello World!',
            duration: 1500,
            position: position,
        });
    }
    // authCtx.onLogOut()
    return (
        <div className="container">
            {/*<StatusBar title="Sign in" />*/}
            <BackFill action={authCtx.toggleLogin} />
            <div className="signin-cover" >
                <span className="logintxt" >Sign in</span>
                <div className="signin-form" >
                    <input name="email" onChange={handleMail} type="email" placeholder="Email" className="signin-fields" />
                    <input name="password" onChange={handlePass} type="password" placeholder="Password" className="signin-fields" />
                </div>
                <div className="signin-actions" >
                    <button className="signin-btn" type="submit" onClick={()=>{loginAction(); presentToast('bottom')}} >Login</button>
                    <div className="others">
                        <Link to="/reset" className="otherOpts" >Reset Password</Link>
                        <Link to="/signup" className="otherOpts" >Sign up</Link>
                    </div>
                </div>
            </div>
            {/*{loading ? <LoadingState /> : ''}*/}
        </div>
    )
}
