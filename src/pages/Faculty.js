import '../assets/css/faculty.css'
import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useOutletContext, Link, useParams, Outlet, useMatch, useLocation } from 'react-router-dom'

import { IonIcon } from '@ionic/react'
import { addOutline, addCircleOutline, shieldCheckmark, personAddOutline, person, logInOutline, personRemoveOutline, chatbubbleOutline, readerOutline, imagesOutline, albumsOutline, createOutline, informationCircleOutline, pencilOutline } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Departments from '../pages/Departments'

export const facultyLoader = async () => {
    return null
}

export default function Faculty({ faculty }) {
    const {pageCtx, authCtx} = useOutletContext()
    const ring = require("../assets/media/pix/ring_banner.png")
    
    const facTabs = async (event) => {
        event.target.style.borderBottom = '2px solid rgba(0,128,128,1)'
    }
    const location = useLocation()
    return (
        <div className="fac-hold base">
            <StatusBar title="FEN" />
            <div className="fac-cover base-cover">
                <div className="fac-card" >
                    <div className="fac-card-details" >
                        {/*<div className="pro-cover" ></div>*/}
                        <div className="fac-cover-frame">
                            <img src={ring} className="fac-cover-img" />
                            <div className="fac-avatar-cover" >
                                <img src={ring} className="fac-avatar" alt="Avatar" />
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    <div className="fac-titles" >
                        <div className="fac-name-cover">
                            <h1 className="fac-name">Faculty of Engineering</h1>
                            {/*<h3 className="fac-name-sub">@userPath</h3>*/}
                        </div>
                        <div className="fac-desc">
                            <span className="fac-bio">Faculty Motto</span>
                        </div>
                        <div className="fac-collection">
                            <div className="fac-cards-actions" >
                                <Link to="." className="fac-act-btn" onClick={(event)=> facTabs(event)}>
                                    Activity
                                </Link>
                                <Link to="info" className="fac-act-btn" onClick={(event)=> facTabs(event)}>
                                    Info
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet context={{pageCtx, authCtx}} />
            </div>
            <BottomNav />
        </div>
    )
}