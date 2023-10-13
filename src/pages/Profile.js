import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { useOutletContext, Link, useParams } from 'react-router-dom'

import PostItem from '../components/PostItem'
import Palette from '../components/Palette'
import Poption from '../components/Poption'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import { IonIcon } from '@ionic/react'
import { shieldCheckmark, personAddOutline, person, logInOutline, personRemoveOutline, chatbubbleOutline, readerOutline, imagesOutline, albumsOutline, createOutline, informationCircleOutline, pencilOutline } from 'ionicons/icons'

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
    
    return (
        <div style={bottomStyle} className="profile">
            <StatusBar />
            <div className="profile-cover">
                <div className="info-card" >
                    <div className="card-details" >
                        <div className="pro-cover" >
                            <div className="cover-frame">
                                <img src={aniHelps} className="cover-img" />
                            </div>
                            <div className="pro-avatar-cover" >
                                {!authCtx.user.loggedIn ? <IonIcon icon={person} size="large" color="teal" className="pro-avatar" ></IonIcon> :  <img src={bsks} className="pro-avatar" alt="Avatar" />}
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    <div className="user-titles" >
                        {authCtx.user.username === userPath ? 
                        <div className="fullname-cover">
                            <h3 className="fullname">{authCtx.user.firstname} {authCtx.user.lastname}</h3>
                            <p className="username">@{authCtx.user.username}</p>
                        </div> : 
                        <div className="fullname-cover">
                            <div className="fullname">{userPath}</div>
                            <div className="username">@{userPath}</div>
                        </div>}
                        <div className="collection">
                            {authCtx.user.username === userPath ? <>
                                <div className="cards-actions" >
                                    { authCtx.user.username === userPath ? <>
                                    <Link to={`/user/${authCtx.user.username}/chats`} className="act-btn">
                                        <IonIcon icon={chatbubbleOutline} style={pageCtx.iconStyle}
                                        className="act-btn-icon"></IonIcon>
                                    </Link>
                                    <Link to={`/user/${authCtx.user.username}/about`} className="act-btn">
                                        <IonIcon icon={informationCircleOutline} style={pageCtx.iconStyle}
                                        className="act-btn-icon"></IonIcon>
                                    </Link> </> : <>
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
                    </div>
                    <div className="user-desc">
                        <span className="user-bio">Cool and Calm fjdjsjdjfjfjdddjjdjdjdj</span>
                    </div>
                    <div className="connect-cover" >
                        <Link to={`/user/${userPath}/followed`} className="connections">Followed &#8226;</Link>
                        &nbsp;
                        <Link to={`/user/${userPath}/followers`} className="connections">Followers &#8226;</Link>
                    </div>
                </div>
                <div className="options">
                    <div className="options-btn" >
                        <IonIcon icon={readerOutline} style={pageCtx.iconStyle}></IonIcon>
                        <p className="options-btn-txt">Posts</p>
                    </div>
                    <div className="options-btn" >
                        <IonIcon icon={imagesOutline} style={pageCtx.iconStyle}></IonIcon>
                        <p className="options-btn-txt">Photos</p>
                    </div>
                    <div className="options-btn" >
                        <IonIcon icon={albumsOutline} style={pageCtx.iconStyle}></IonIcon>
                        <p className="options-btn-txt">Pages</p>
                    </div>
                </div>
                {/*<PostItem toggleOption={toggleOption} />*/}
                <Palette />
                {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
            </div>
            { authCtx.user.username === userPath ? <BottomNav /> : '' }
        </div>
    )
}
