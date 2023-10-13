import { useState, useEffect, useContext } from 'react'
import { PageContext } from '../ctx/PageContext'
import { AuthContext } from '../ctx/AuthContext'

import '../assets/css/poption.css'
import { IonIcon } from '@ionic/react'
import { clipboardOutline, eyeOffOutline, megaphoneOutline, arrowRedoOutline } from 'ionicons/icons'

export default function Poption ({ viewOption, setVisibility, post }) {
    const pageCtx = useContext(PageContext)
    
    const closeOptions = () => {
        setVisibility(false)
    }
    const pickOption = (event) => {
        event.stopPropagation()
        alert('Option picked!')
    }
    return (
        <div className="poptions" onClick={() => closeOptions()} >
            {viewOption === 'share' ? <div className="optGrp">
                <div className="optItem" onClick={(event)=> pickOption(event)}>
                    <IonIcon icon={arrowRedoOutline} style={pageCtx.iconStyle}></IonIcon>
                    &nbsp;
                    <p>Repost</p>
                </div>
                <div className="optItem" onClick={(event)=> pickOption(event)}>
                    <IonIcon icon={clipboardOutline} style={pageCtx.iconStyle}></IonIcon>
                    &nbsp;
                    <p>Share to Group/Page</p>
                </div>
                <div className="optItem" onClick={(event)=> pickOption(event)}>
                    <IonIcon icon={clipboardOutline} style={pageCtx.iconStyle}></IonIcon>
                    &nbsp;
                    <p>Copy link</p>
                </div>
            </div> : <div className="optGrp">
                <div className="optItem" onClick={(event)=> pickOption(event)}>
                    <IonIcon icon={eyeOffOutline} style={pageCtx.iconStyle}></IonIcon>
                    &nbsp;
                    <p>Hide Post</p>
                </div>
                <div className="optItem" onClick={(event)=> pickOption(event)}>
                    <IonIcon icon={megaphoneOutline} style={pageCtx.iconStyle}></IonIcon>
                    &nbsp;
                    <p>Report Post</p>
                </div>
                <div className="optItem" onClick={(event)=> pickOption(event)}>
                    <IonIcon icon={clipboardOutline} style={pageCtx.iconStyle}></IonIcon>
                    &nbsp;
                    <p>Report User</p>
                </div>
            </div>}
        </div> 
    )
}