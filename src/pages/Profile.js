import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useOutletContext, Link, useParams, Outlet } from 'react-router-dom'

import PostItem from '../components/PostItem'
import Palette from '../components/Palette'
import Poption from '../components/Poption'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import CreatePost from '../components/CreatePost'

import { IonIcon } from '@ionic/react'
import { addOutline, addCircleOutline, shieldCheckmark, personAddOutline, person, logInOutline, personRemoveOutline, chatbubbleOutline, readerOutline, imagesOutline, albumsOutline, createOutline, informationCircleOutline, pencilOutline } from 'ionicons/icons'

import '../assets/css/profile.css'

export default function Profile({ viewOption, visibility, setVisibility, toggleOption }) {
    const {pageCtx, authCtx} = useOutletContext()
    
    const bottomStyle = {
        bottom: '3em'
    }
    
    const pathArray = pageCtx.page.split('/')
    const params = useParams()
    const userPath = params.username
    console.log(userPath)
    
    let dataArray = useRef([])
    if (authCtx.user.username === userPath) {
        bottomStyle.bottom = '3em'
    } else if (authCtx.user.username !== userPath) {
        bottomStyle.bottom = 0
    }
    
    const aniHelps = require("../assets/media/pix/anime helps.jpg")
    const bsks = require("../assets/media/pix/bsks.jpg")
    const ring = require("../assets/media/pix/ring_banner.png")
    
    return (
        <div style={bottomStyle} className="profile">
            <StatusBar />
            <div className="profile-cover">
                <div className="info-card" >
                    <div className="card-details" >
                        {/*<div className="pro-cover" ></div>*/}
                        <div className="cover-frame">
                            <img src={ring} className="cover-img" />
                            <div className="pro-avatar-cover" >
                                {!authCtx.user.loggedIn ? <IonIcon icon={person} size="large" color="teal" className="pro-avatar" ></IonIcon> :  <img src={ring} className="pro-avatar" alt="Avatar" />}
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    <div className="user-titles" >
                        {authCtx.user.username === userPath ? 
                        <div className="fullname-cover">
                            <h1 className="fullname">{authCtx.user.firstname} {authCtx.user.lastname}</h1>
                            <h3 className="username">@{authCtx.user.username}</h3>
                        </div> : 
                        <div className="fullname-cover">
                            <h1 className="fullname">{userPath}</h1>
                            <h3 className="username">@{userPath}</h3>
                        </div>}
                        <div className="collection">
                            {authCtx.user.username === userPath ? <>
                                <div className="cards-actions" >
                                    { authCtx.user.username === userPath ? <>
                                    {/*<div onClick={()=> pageCtx.toggleCreate()} className="act-btn">
                                        <IonIcon icon={addCircleOutline} style={pageCtx.iconStyle}
                                        className="act-btn-icon"></IonIcon>
                                    </div>*/}
                                    {/*<Link to={`/user/${authCtx.user.username}/info`} className="act-btn">
                                        <IonIcon icon={informationCircleOutline} style={pageCtx.iconStyle}
                                        className="act-btn-icon"></IonIcon>
                                    </Link>*/}
                                    {/*<Link to={`/user/${authCtx.user.username}/chats`} className="act-btn">
                                        <IonIcon icon={chatbubbleOutline} style={pageCtx.iconStyle}
                                        className="act-btn-icon"></IonIcon>
                                    </Link>*/} </> : <>
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
                             </> : ''}
                        </div>
                        <div className="user-desc">
                            <span className="user-bio">Cool and Calm fjdjsjdjfjfjdddjjdjdjdj</span>
                        </div>
                    </div>
                    {/*<div className="user-tabs-cover">
                        <Link to={`/user/${userPath}/`} className="user-tabs user-dash" onClick={(event)=>userLink(event)}>Dashboard</Link>
                        <Link to={`/user/${userPath}/info`} className="user-tabs user-info" onClick={(event)=>userLink(event)}>Info</Link>
                    </div>*/}
                </div>
                <Outlet context={{pageCtx, authCtx}} />
                {/*<PostItem toggleOption={toggleOption} />*/}
            </div>
                <Palette />
                {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
                {pageCtx.showCreate ? <CreatePost /> : ''}
            { authCtx.user.username === userPath ? <BottomNav /> : '' }
        </div>
    )
}
