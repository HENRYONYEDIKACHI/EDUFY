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
            <div className="linkCover">
                <div className="linkItem">
                    <Link to="/account">Account</Link>
                </div>
                <div className="linkItem">
                    <IonIcon icon={settingsOutline} style={pageCtx.iconStyle} ></IonIcon>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
            <div className="authStateCover" >
                {authCtx.user.loggedIn ? 
                <div className="authStateBtn
                logoutBtn" onClick={()=> authCtx.onLogOut()} >Log out</div> : 
                <>
                    <Link to="/signin" className="authStateBtn loginBtn" >Log in</Link>
                    <Link to="/signup" className="authStateBtn signupBtn" >Sign up</Link>
                </>}
            </div>
        </div>
    )
}

export default Menu