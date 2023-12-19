import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link, NavLink } from 'react-router-dom'
import { IonIcon } from '@ionic/react';
import { home, homeOutline, notifications, notificationsOutline, search, searchOutline, person, personOutline, compass, compassOutline, briefcaseOutline, briefcase } from 'ionicons/icons'

import '../assets/css/bottomnav.css'

function BottomNav() {
    const {pageCtx, authCtx} = useOutletContext()
    
    const setTab = async (xpath) => {
        pageCtx.navigateTo(xpath)
    }
    
    return (
        <div className='bottomNav' >
            <NavLink to='/' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? home : homeOutline} style={pageCtx.iconStyle}></IonIcon>)}
            </NavLink>
            <NavLink to='/services' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? briefcase : briefcaseOutline} style={pageCtx.iconStyle}></IonIcon>)}
            </NavLink>
            {/*<NavLink to='/' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? home : homeOutline} style={pageCtx.iconStyle}></IonIcon>)}
            </NavLink>
            <NavLink to='/explore' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? compass : compassOutline} style={pageCtx.iconStyle}></IonIcon>)}
            </NavLink>
            <NavLink to='/notifications' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? notifications : notificationsOutline} style={pageCtx.iconStyle}></IonIcon>)}
            </NavLink>
            <NavLink to={`/user/${authCtx.user.username}`} className="tabLinks" >
               {({isActive, isPending})=> (<IonIcon icon={isActive ? person : personOutline} style={pageCtx.iconStyle}></IonIcon>)}
            </NavLink>*/}
        </div>
    )
}

export default BottomNav