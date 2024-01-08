import { useState, useEffect, useContext } from 'react'
import { useOutletContext, NavLink } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { checkmarkDoneOutline, } from 'ionicons/icons'

export default function Notivity() {
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className="">
            <div className="sections activitySection">
                <div className="notifItem notifOptBar">
                    <div className="read">
                        <h5>All</h5>
                        &nbsp;
                        <h5>Unread</h5>
                    </div>
                    <div className="markread">
                        <h5>Mark as read</h5>
                        &nbsp;
                        <IonIcon icon={checkmarkDoneOutline} style={pageCtx.iconStyle}></IonIcon>
                    </div>
                </div>
                <div className="notifItem">Hello, how are you today?. Just checking on you.</div>
                <div className="notifItem">Hey! today's the the 'day' today</div>
                <div className="notifItem">Heya! this is just another notification.</div>
                <div className="notifItem">Well, well, well, look who we have here. It's is I your notification item.</div>
            </div>
        </div>
    )
}