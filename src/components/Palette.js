import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link } from 'react-router-dom'

import { IonIcon } from '@ionic/react'
import { pencilOutline, albumsOutline } from 'ionicons/icons'

import '../assets/css/palette.css'

export default function Palette({ toggleCreate}) {
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className="shortCuts">
            <div className="shortCutItem" onClick={()=> pageCtx.toggleCreate()}>
                <IonIcon icon={pencilOutline} style={pageCtx.iconStyle}></IonIcon>
            </div>
            &nbsp;
            <Link to="/status" className="shortCutItem">
                <IonIcon icon={albumsOutline} style={pageCtx.iconStyle}></IonIcon>
            </Link>
            {/*<div className="shortCutItem"></div>*/}
        </div>
    )
}