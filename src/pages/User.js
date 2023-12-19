import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useOutletContext, Link, useParams, Outlet } from 'react-router-dom'

import { IonIcon } from '@ionic/react'
import { shieldCheckmark, personAddOutline, person, logInOutline, personRemoveOutline, chatbubbleOutline, readerOutline, imagesOutline, albumsOutline, createOutline, informationCircleOutline, pencilOutline } from 'ionicons/icons'

import '../assets/css/user.css'
export default function User() {
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className="user-over">
            <div className="options">
                <div className="options-btn" >
                    <IonIcon icon={readerOutline} style={pageCtx.iconStyle}></IonIcon>
                    <p className="options-btn-txt">Posts</p>
                </div>
                <div className="options-btn" >
                    <IonIcon icon={imagesOutline} style={pageCtx.iconStyle}></IonIcon>
                    <p className="options-btn-txt">Photos</p>
                </div>
                <div className="options-btn" >
                    <IonIcon icon={albumsOutline} style={pageCtx.iconStyle}></IonIcon>
                    <p className="options-btn-txt">Spaces</p>
                </div>
                <Link to={`/user/${authCtx.user.username}/info`} className="options-btn">
                    <IonIcon icon={informationCircleOutline} style={pageCtx.iconStyle}
                    className="act-btn-icon"></IonIcon>
                </Link>
            </div>
        </div>
    )
}
