import { useState, useEffect, useContext } from 'react'
import { useOutletContext, NavLink, Outlet } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import Notivity from './Notivity'
import Bookmarks from './Bookmarks'

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
        <div className="base">
            <StatusBar title="Notifications" />
            <div className="base-cover">
                <div className={pageCtx.theme=='light' ? "head-area head-area-light": "head-area head-area-dark"}>
                    <NavLink to="activity" className="sectionHead">
                        {({isActive,isPending})=>(<h3 className={isActive ? "tab-txt tab-txt-active" : "tab-txt"}>Activity</h3>)}
                    </NavLink>
                    <NavLink to="bookmarks" className="sectionHead">
                        {({isActive,isPending})=>(<h3 className={isActive ? "tab-txt tab-txt-active" : "tab-txt"}>Bookmark</h3>)}
                    </NavLink>
                </div>
                <Outlet context={{pageCtx, authCtx}} />
            </div>
            <BottomNav />
        </div>
    )
}

export default Notifications