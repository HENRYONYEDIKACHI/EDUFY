import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useOutletContext, Link, useParams, Outlet, NavLink, useLocation } from 'react-router-dom'

import PostItem from '../components/PostItem'
import Palette from '../components/Palette'
import Poption from '../components/Poption'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import CreatePost from '../components/CreatePost'

import { IonIcon } from '@ionic/react'
import { ellipsisVerticalOutline, addOutline, addCircleOutline, shieldCheckmark, personAddOutline, person, logInOutline, personRemoveOutline, chatbubbleOutline, readerOutline, imagesOutline, albumsOutline, createOutline, informationCircleOutline, pencilOutline, settingsOutline } from 'ionicons/icons'

import '../assets/css/profile.css'

export default function Profile({ viewOption, visibility, setVisibility, toggleOption }) {
    const {pageCtx, authCtx} = useOutletContext()
    
    const bottomStyle = {
        bottom: '3em'
    }
    
    const params = useParams()
    const userParam = params.username
    console.log(userParam)
    
    let dataArray = useRef([])
    if (authCtx.user.username === userParam) {
        bottomStyle.bottom = '3em'
    } else if (authCtx.user.username !== userParam) {
        bottomStyle.bottom = 0
    }
    
    const aniHelps = require("../assets/media/pix/anime helps.jpg")
    const bsks = require("../assets/media/pix/bsks.jpg")
    const ring = require("../assets/media/pix/ring_banner.png")
    
    const location = useLocation()
    return (
        <div style={bottomStyle} className="base">
            <StatusBar title="Profile" />
            <div className="base-cover">
                <div className={pageCtx.theme=='light' ? "info-card info-card-light" : "info-card info-card-dark"}>
                    <div className="card-details" >
                        {/*<img src={ring} className="cover-img" />*/}
                        <div className="pro-avatar-cover" >
                            {!authCtx.user.loggedIn ? 
                                <IonIcon icon={person} size="large" color="teal" className="pro-avatar" ></IonIcon> :  <img src={ring} className="pro-avatar" alt="Avatar" />
                            }
                        </div>
                        <div className="collection">
                            {/*<div className="card-act-cover">
                                {authCtx.user.username === userParam ? <>*/}
                                    <div className="cards-actions" >
                                        { authCtx.user.username === userParam ? <>
                                            <div onClick={()=> pageCtx.toggleCreate()} className="act-btn">
                                                <IonIcon icon={pencilOutline} style={pageCtx.iconStyle}
                                                className="act-btn-icon"></IonIcon>
                                            </div>
                                            <Link to={`/user/${authCtx.user.username}/chats`} className="act-btn">
                                                <IonIcon icon={chatbubbleOutline} style={pageCtx.iconStyle}
                                                className="act-btn-icon"></IonIcon>
                                            </Link>
                                            <Link to={`/user/${authCtx.user.username}/info`} className="act-btn">
                                                <IonIcon icon={ellipsisVerticalOutline} style={pageCtx.iconStyle}
                                                className="act-btn-icon"></IonIcon>
                                            </Link>
                                        </> : <>
                                            <div className="act-btn">
                                                <IonIcon icon={personAddOutline} style={pageCtx.iconStyle}
                                                className="act-btn-icon"></IonIcon>
                                            </div>
                                            <div className="act-btn">
                                                <IonIcon icon={personRemoveOutline} style={pageCtx.iconStyle}
                                                className="act-btn-icon"></IonIcon>
                                            </div>
                                        </> }
                                    </div>
                                {/*</> : ''}
                            </div>*/}
                            <div className="hint-btn">Follow</div>
                            <div className="subs">
                                <div className="follows">
                                    <span>300</span>
                                    <span>Followers</span>
                                </div>
                                <div className="follows">
                                    <span>300</span>
                                    <span>Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*<div className="user-links"></div>*/}
                    <div className="user-titles" >
                        {
                            authCtx.user.username === userParam ? 
                            <div className="fullname-cover">
                                <span className={pageCtx.theme=='light' ? "fullname u-link-cover-light" : "fullname u-link-cover-dark"}>{authCtx.user.firstname} {authCtx.user.lastname}</span>
                                <span className="username">@{authCtx.user.username}</span>
                            </div> : 
                            <div className="fullname-cover">
                                <span className="fullname">{userParam}</span>
                                <span className="username">@{userParam}</span>
                            </div>
                        }
                    </div>
                </div>
                <Outlet context={{pageCtx, authCtx}} />
                {/*<PostItem toggleOption={toggleOption} />*/}
            </div>
                {/*<Palette />*/}
                {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
                {pageCtx.showCreate ? <CreatePost /> : ''}
            { authCtx.user.username === userParam ? <BottomNav /> : '' }
        </div>
    )
}
