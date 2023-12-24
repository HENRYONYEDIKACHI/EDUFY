import { arrowBackOutline, searchOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { useState, useEffect, useContext } from 'react'
import { useLoaderData, Link, Outlet, useOutletContext } from 'react-router-dom'
import JobPost from '../components/JobPost';
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import '../assets/css/services.css'

export const serviceLoader = async () => {
    // Fetch gigs from api
    const services = [
        {
            'id': 1,
            'title': 'Typing/Writing',
            'desc': ''
        },
        {
            'id': 2,
            'title': 'Graphics & Design',
            'description': '',
        },
        {
            'id': 3,
            'title': 'Sales And Marketing',
            'desc': ''
        },
        {
            'id': 4,
            'title': 'Programming and Tech',
            'desc': ''
        },
        {
            'id': 5,
            'title': '',
            'desc': ''
        },
        {
            'id': 6,
            'title': 'Sales And Marketing',
            'desc': ''
        },
    ]
    return services
}

export default function Services() {
    const {services } = useLoaderData()
    const { pageCtx, authCtx } = useOutletContext()
    const [newJobState, setNewJobState] = useState(false)
    console.log(services)
    
    const toggleJobPost = async () => {
        if (newJobState) {
            setNewJobState(false)
        } else {
            setNewJobState(true)
        }
    }
    return (
        <div className="base">
            <StatusBar title="Services" />
            <div className="page-hold">
                <div className="page-bar">
                    <div className="page-bar-left">
                        <IonIcon className="page-bar-icon" icon={arrowBackOutline} onClick={()=>window.history.back()}></IonIcon>
                        <h3 className="page-bar-txt">Services</h3>
                    </div>
                    {/*<div className="page-bar-right">
                        <IonIcon className="page-bar-icon" icon={searchOutline} onClick={()=>{}}></IonIcon>
                    </div>*/}
                </div>
                <div className="comment">Some styling can be found at `assets/css/common.css`</div>
                <div className="page-banner">
                    <div className="page-banner-headers-cover">
                        <h3>Welcome to the Jobs and Offers Page</h3>
                        <span>Post jobs. Find skilled persons to carry out tasks</span>
                        <div className="page-banner-option-cover">
                            <div onClick={()=> toggleJobPost()} className="page-banner-btn page-btn-1">Post Gig</div>
                        </div>
                    </div>
                </div>
                
                <div className="gig-filter-popup"></div>
                {newJobState ? <JobPost newJobState={newJobState} toggleJobPost={toggleJobPost} /> : ''}
            </div>
            {/*<BottomNav />*/}
        </div>
    )
}