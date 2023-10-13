import { useState, useEffect, useContext, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import '../assets/css/manager.css'

import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Notifications from '../pages/Notifications'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings';
import Chats from '../pages/Chats';
import Chat from '../pages/Chat';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
// import CreatePost from '../pages/CreatePost';
import AboutUser from '../pages/UserDesc';
import Reset from '../pages/Reset';

import Req404 from './404.js';

export default function Manager() {
    const {pageCtx, authCtx} = useOutletContext()
    // authCtx.socket.onclose = async (event) => {
    //     authCtx.reconnect()
    // }
    
    // const [postArray, se)tPostArray] = useState()
    
    useEffect(()=>{
    }, [])
    return (
        {/*<div className="manager">
            {
                pageCtx.page === '/' ? <Home viewOption={viewOption} visibility={visibility} setVisibility={setVisibility} toggleOption={toggleOption} /> : 
                pageCtx.page === '/explore' ? <Explore /> : 
                pageCtx.page === '/notifications' ? <Notifications /> : 
                pageCtx.page === pageCtx.paths.userURL ? <Profile viewOption={viewOption} visibility={visibility} setVisibility={setVisibility} toggleOption={toggleOption} /> : 
                pageCtx.page === pageCtx.paths.aboutUser ? <AboutUser /> : 
                pageCtx.page === pageCtx.paths.chatURL ? <Chat /> : 
                pageCtx.page === pageCtx.paths.allChats ? <Chats /> : 
                pageCtx.page === '/settings' ? <Settings /> : 
                pageCtx.page === '/createpost' ? <CreatePost /> : 
                pageCtx.page === '/posts' ? <Posts /> : 
                pageCtx.page === pageCtx.paths.postView ? <Post viewOption={viewOption} visibility={visibility} setVisibility={setVisibility} toggleOption={toggleOption} /> : 
                pageCtx.page === '/signin' ? <Signin /> : 
                pageCtx.page === '/signup' ? <Signup /> : 
                pageCtx.page === '/reset' ? <Reset /> : 
                <Req404 />
            }
        </div>*/}
    )
}