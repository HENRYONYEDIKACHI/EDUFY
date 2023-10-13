import { useState, useEffect, useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import '../assets/css/notif.css'

import { IonIcon } from '@ionic/react'
import { checkmarkDoneOutline } from 'ionicons/icons'

function Notifications() {
    const {pageCtx, authCtx} = useOutletContext()
    
    const [tabSection, setTabSection] = useState('activity')
    const setTab = (tab) => {
        setTabSection(tab)
    }
    
    let winvent = window.onpopstate= function(event){
        console.log(event)
    }
    // console.log(winvent)
    useEffect(() => {
        // setPage('/notifications')
    })
    
    return (
        <div className="notifs">
            <StatusBar />
            <div className="notifCover">
                <div className="headArea">
                    <div className="sectionHead activitySectionHead" style={tabSection === 'activity' ? {borderBottom: pageCtx.borderStyle.borderBottom} : {borderBottom: 0}} onClick={()=> setTab('activity')}>
                        <h3>Activity</h3>
                    </div>
                    <div style={tabSection === 'bookmark' ? {borderBottom: pageCtx.borderStyle.borderBottom} : {borderBottom: 0}} className="sectionHead bookmarkSectionHead" onClick={()=> setTab('bookmark')}>
                        <h3>Bookmarks</h3>
                    </div>
                </div>
                {tabSection === 'activity' ? 
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
                : <div className="sections bookmarkSection"></div>}
            </div>
            <BottomNav />
        </div>
    )
}

export default Notifications