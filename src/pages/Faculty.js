import '../assets/css/faculty.css'
import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useOutletContext, NavLink, Link, useParams, Outlet, useMatch, useLocation } from 'react-router-dom'

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
    
    return (
        <div className="fac-hold base">
            <StatusBar title="FEN" />
            <div className={pageCtx.theme=='light' ? "base-cover base-cover-light" : "base-cover base-cover-dark"}>
                <div className="fac-card" >
                    <div className="fac-card-details" >
                        {/*<div className="pro-cover" ></div>*/}
                        <div className="fac-cover-frame">
                            <img src={ring} className="fac-cover-img" />
                            <div className={pageCtx.theme=='light' ? "fac-avatar-cover fac-avatar-cover-light" : "fac-avatar-cover fac-avatar-cover-dark"} >
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
                            <NavLink to="activity" className="fac-act-cover">
                                {({isActive, isPending})=>(<div className={isActive ? "fac-btn fac-btn-active" : "fac-btn"}>Activity</div>)}
                            </NavLink>
                            <NavLink to="info" className="fac-act-cover" >
                                {({isActive, isPending})=>(<div className={isActive ? "fac-btn fac-btn-active" : "fac-btn"}>Info</div>)}
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Outlet context={{pageCtx, authCtx}} />
            </div>
            <BottomNav />
        </div>
    )
}