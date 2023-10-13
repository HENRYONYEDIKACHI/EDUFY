import { useState, useContext, useEffect } from 'react'
import { Link, Outlet, useLoaderDsta } from 'react-router-dom'
import { IonIcon } from '@ionic/react';

import '../assets/css/base.css'

import StatusBar from './StatusBar'
import BottomNav from './BottomNav'

import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Notifications from '../pages/Notifications'
import Profile from '../pages/Profile'

function Base({ page }) {
    const [tabPage, setTab] = useState(null)
    const curUser = localStorage.getItem('user')
    
    const switchTab = (xpage) => {
        window.history.pushState({'page': xpage}, 'xpage', '')
        setTab(xpage)
    }
    // alert(window.location)
    return (
        <div className='appBase'>
            <StatusBar />
            {tabPage == '/' ? <Home /> : tabPage == '/explore' ? <Explore /> : tabPage == '/notifications' ? <Notifications /> : tabPage == `/${curUser}/profile` ? <Profile /> : ''}
            <BottomNav switchTab={switchTab} />
        </div>
    )
}

export default Base;