import { IonIcon } from '@ionic/react'
import { useState, useEffect, useContext, useRef } from 'react'
import { useLoaderData, Link, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import { arrowBackOutline, searchOutline, filterOutline } from 'ionicons/icons'

import JobPost from '../components/JobPost';
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import MarketFactory from '../components/MarketFactory'
import StoreFront from '../components/StoreFront'

import '../assets/css/common.css'
import '../assets/css/market.css'

export const martLoader = async () => {
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

export default function Market() {
    const stores = useLoaderData()
    const { pageCtx, authCtx } = useOutletContext()
    const [newJobState, setNewJobState] = useState(false)
    console.log(stores)
    
    const toggleJobPost = async () => {
        if (newJobState) {
            setNewJobState(false)
        } else {
            setNewJobState(true)
        }
    }
    // const scrollView = async (refname) => {
    //     refname.current.scrollIntoView()
    // }
    // const gphcs = useRef()
    // const fsh = useRef()
    // const tech = useRef()
    // const wrtn = useRef()
    // const tuts = useRef()
    // const elect = useRef()
    
    const [mkFilter, setMkFilter] = useState()
    const toggleMkFilter = async (event, ft) => {
        setMkFilter(ft)
        event.target.scrollIntoView()
    }
    return (
        <div className="base">
            <StatusBar title="Market" />
            <div className={pageCtx.theme=='light' ? "base-cover base-cover-light" : "base-cover base-cover-dark"}>
                <div className={pageCtx.theme=='light' ? "servi-cat servi-cat-light" : "servi-cat servi-cat-dark"}>
                    <NavLink to="all" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"} onClick={(event)=>toggleMkFilter(event, 'all')}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>All</span>)}
                    </NavLink>
                    <NavLink to="graphics" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"} onClick={(event)=>toggleMkFilter(event, 'graphics')}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Graphics</span>)}
                    </NavLink>
                    <NavLink to="tech" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"} onClick={(event)=>toggleMkFilter(event, 'tech')}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Tech</span>)}
                    </NavLink>
                    <NavLink to="writing" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"} onClick={(event)=>toggleMkFilter(event, 'writing')}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Writing</span>)}
                    </NavLink>
                    <NavLink to="fashion" className={pageCtx.theme=='light' ? "cat-link-cover cat-link-cover-light" : "cat-link-cover cat-link-cover-dark"} onClick={(event)=>toggleMkFilter(event, 'fashion')}>
                        {({isActive, isPending})=>(<span className={isActive ? "cat-links cat-links-active" : "cat-links cat-links-dark"}>Fashion</span>)}
                    </NavLink>
                </div>
                <MarketFactory stores={stores} mkFilter={mkFilter} />
                <div className={pageCtx.theme=='light' ? "mart-filter mart-filter-light" : "mart-filter mart-filter-dark"}>
                    <div className="mart-filter-img-cover">
                        <IonIcon icon={filterOutline} size="medium" className="mart-filter-img"></IonIcon>
                    </div>
                    <div className="mart-filter-txt-cover">
                        <span className="mart-filter-txt">Filter</span>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    )
}