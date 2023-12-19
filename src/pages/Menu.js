import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link } from 'react-router-dom'

import User from './User'
import Settings from './Settings'
import StatusBar from '../components/StatusBar'

import { IonIcon } from '@ionic/react'
import { settingsOutline, logOutOutline, logInOutline } from 'ionicons/icons'

import '../assets/css/menu.css'

function Menu() {
    const {pageCtx, authCtx} = useOutletContext()
    const [view, setView] = useState(pageCtx.page)
    
    const handleView = (xpage) => {
        // window.history.pushState({'page': xpage}, 'xpage', xpage)
        pageCtx.navigateTo(xpage)
    }
    const logout = () => {
        authCtx.onLogOut()
        pageCtx.toggleMenu()
    }
    
    return (
        <div className="menu">
            <StatusBar />
            <div className="link-cover">
                <div className="link-item">
                    <Link to="/account">Account</Link>
                </div>
                <div className="link-item">
                    <IonIcon icon={settingsOutline} style={pageCtx.iconStyle} ></IonIcon>
                    <Link to="/settings">Settings</Link>
                </div>
                {authCtx.user.loggedIn ? <Link className="auth-state-btn
                logout-btn" onClick={()=> authCtx.onLogOut()} >Log out</Link> : <div className="auth-btn-cover">
                    <Link to="/signin" className="auth-state-btn login-btn" >Log in</Link>
                    <Link to="/signup" className="auth-state-btn signup-btn" >Sign up</Link>
                </div>}
            </div>
            {/*<div className="auth-state-cover" >*/}
            {/*</div>*/}
        </div>
    )
}

export default Menu