import { arrowBackOutline, searchOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { useState, useEffect, useContext } from 'react'
import { useLoaderData, Link, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import JobPost from '../components/JobPost';
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import '../assets/css/common.css'
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
            <div className={pageCtx.theme=='light' ? "base-cover base-cover-light" : "base-cover base-cover-dark"}>
                <div className="servi-cat">
                    <NavLink to="all" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>All</span>)}
                    </NavLink>
                    <NavLink to="graphics" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Graphics</span>)}
                    </NavLink>
                    <NavLink to="tech" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Tech</span>)}
                    </NavLink>
                    <NavLink to="writing" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Writing</span>)}
                    </NavLink>
                    <NavLink to="fashion" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Fashion</span>)}
                    </NavLink>
                </div>
                <Link to="graphics" className={pageCtx.theme=='light' ? "servi-links servi-links-light" : "servi-links servi-links-dark"}>
                    <div className="servi-link-img-cover">
                        <IonIcon icon={searchOutline} size="large" className="servi-link-img"></IonIcon>
                    </div>
                    <div className="servi-link-txt-cover">
                        <span className="servi-link-txt-hd">Graphics and Design</span>
                    </div>
                </Link>
                <Link to="tech" className={pageCtx.theme=='light' ? "servi-links servi-links-light" : "servi-links servi-links-dark"}>
                    <div className="servi-link-img-cover">
                        <IonIcon icon={searchOutline} size="large" className="servi-link-img"></IonIcon>
                    </div>
                    <div className="servi-link-txt-cover">
                        <span className="servi-link-txt-hd">Programming and Tech</span>
                    </div>
                </Link>
                <Link to="tutorials" className={pageCtx.theme=='light' ? "servi-links servi-links-light" : "servi-links servi-links-dark"}>
                    <div className="servi-link-img-cover">
                        <IonIcon icon={searchOutline} size="large" className="servi-link-img"></IonIcon>
                    </div>
                    <div className="servi-link-txt-cover">
                        <span className="servi-link-txt-hd">Tutorials</span>
                    </div>
                </Link>
                <Link to="electricals" className={pageCtx.theme=='light' ? "servi-links servi-links-light" : "servi-links servi-links-dark"}>
                    <div className="servi-link-img-cover">
                        <IonIcon icon={searchOutline} size="large" className="servi-link-img"></IonIcon>
                    </div>
                    <div className="servi-link-txt-cover">
                        <span className="servi-link-txt-hd">Electrical and Electronics</span>
                    </div>
                </Link>
                <Link to="fashion" className={pageCtx.theme=='light' ? "servi-links servi-links-light" : "servi-links servi-links-dark"}>
                    <div className="servi-link-img-cover">
                        <IonIcon icon={searchOutline} size="large" className="servi-link-img"></IonIcon>
                    </div>
                    <div className="servi-link-txt-cover">
                        <span className="servi-link-txt-hd">Fashion and Lifestyle</span>
                    </div>
                </Link>
            </div>
            <BottomNav />
        </div>
    )
}