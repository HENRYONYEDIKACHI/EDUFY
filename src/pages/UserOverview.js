import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useOutletContext, Link, useParams, Outlet } from 'react-router-dom'

import { IonIcon } from '@ionic/react'
import { shieldCheckmark, personAddOutline, person, personOutline, logInOutline, personRemoveOutline, chatbubbleOutline, readerOutline, imagesOutline, albumsOutline, createOutline, informationCircleOutline, pencilOutline } from 'ionicons/icons'

import '../assets/css/useroverview.css'

export default function UserOverview() {
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className="user-over">
            {/*<div className="options">*/}
                <Link to="about" className="options-btn" >
                    <span className="options-btn-txt">About</span>
                    <IonIcon icon={personOutline} className="options-btn-img"></IonIcon>
                </Link>
                <Link to="uploads" className="options-btn" >
                    <span className="options-btn-txt">Uploads</span>
                    <IonIcon className="options-btn-img" icon={imagesOutline}></IonIcon>
                </Link>
                {/*{<Link to="" className="options-btn" >
                    <span className="options-btn-txt">Spaces</span>
                    <img className="options-btn-img" src={pageCtx.ring} />
                </Link>
                <Link to={`/user/${authCtx.user.username}/info`} className="options-btn">
                    <IonIcon icon={informationCircleOutline} style={pageCtx.iconStyle} className="act-btn-icon"></IonIcon>
                </Link>*/}
            {/*</div>*/}
        </div>
    )
}
