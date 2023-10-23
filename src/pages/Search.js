import { useState, useEffect, useContext } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { search, searchOutline, optionsOutline, closeOutline, arrowBackOutline } from 'ionicons/icons'

import '../assets/css/search.css'

export const searchLoader = async () => {
    return null
}

export default function Search() {
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className="search-page">
            <div className="search-bar">
                <div className="close-bar">
                    <IonIcon icon={arrowBackOutline} style={pageCtx.iconStyle} onClick={()=>window.history.back()}></IonIcon>
                </div>
                <div className="input-area">
                    <input placeholder="Search" name="search-box" className="search-box" type="search" />
                    <div className="search-btn">
                        <IonIcon icon={searchOutline} style={pageCtx.iconStyle} />
                    </div>
                </div>
            </div>
            <h3 className="head-txt">Quick Results</h3>
            <div className="quick-results">
                <div className="quick-result-items">Holla</div>
            </div>
            <h3 className="head-txt">Recent Searches</h3>
            <div className="search-history">
                <div className="history-item">Hello world</div>
                <div className="history-item">Ohayo</div>
                <div className="history-item">Holla</div>
            </div>
        </div>
    )
}