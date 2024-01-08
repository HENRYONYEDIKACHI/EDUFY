import { useState, useEffect, useContext } from 'react'
import { Link, useOutletContext, Outlet, NavLink } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { search, searchOutline, optionsOutline, closeOutline, arrowBackOutline } from 'ionicons/icons'

import '../assets/css/search.css'

export const searchLoader = async () => {
    return null
}

export default function Search() {
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className={pageCtx.theme=='light' ? "s-page s-page-light" : "s-page s-page-dark"}>
            <div className={pageCtx.theme=='light' ? "s-bar s-bar-light" : "s-bar s-bar-dark"}>
                <div className="s-close-bar">
                    <IonIcon icon={arrowBackOutline} size="medium" className="s-close-icon" style={pageCtx.iconStyle} onClick={()=>window.history.back()}></IonIcon>
                </div>
                <div className="s-box">
                    <input type="search" name="s-input" className={pageCtx.theme=='light' ? "s-input s-input-light" : "s-input s-input-dark"} placeholder="Search" />
                </div>
            </div>
            <div className="quick-bar">
                <NavLink to="history" className={pageCtx.theme=='light' ? "quick-link-cover quick-link-cover-light" : "quick-link-cover quick-link-cover-dark"}>
                    {({isActive, isPending})=>(<span className={isActive ? "quick-link-item quick-link-active" : "quick-link-item"}>History</span>)}
                </NavLink>
            </div>
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    )
}