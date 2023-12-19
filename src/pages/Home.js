import '../assets/css/home.css'
import { useState, useEffect, useContext, useRef, Suspense } from 'react'
import { useLoaderData, useOutletContext, defer,Await, Outlet } from 'react-router-dom'

import { IonIcon } from '@ionic/react';
import { heart, heartOutline, repeat, repeatOutline, chatbox, chatboxOutline, ellipsisVertical, ellipsisVerticalOutline, pencilOutline, albumsOutline, createOutline } from 'ionicons/icons'

import PostItem from '../components/PostItem'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Palette from '../components/Palette'
import Poption from '../components/Poption'
import FallBack from '../components/FallBack'
import CreatePost from '../components/CreatePost'
import GigItem from '../components/GigItem'
import Faculties from '../components/Faculties'

import AcadeRoll from '../components/AcadeRoll'
import dummyposts from '../dummy/dummyposts'

const grab_posts = async (pageParam) =>{
    // const postsGrabber = await fetch(`http://127.0.0.1:8080/posts/${pageParam}`)
    // const posts = await postsGrabber.json()
    // return posts
    const posts = dummyposts
    return posts
}

export const postsLoader = async () => {
    return await grab_posts()
}

export default function Home({ viewOption, visibility, setVisibility, toggleOption }) {
    const {pageCtx, authCtx} = useOutletContext()
    const { posts } = useLoaderData()
    const [showfaculties, setFaculties] = useState(false)
    
    const toggleFaculties = async () => {
        {showfaculties? setFaculties(false) : setFaculties(true)}
    }
    
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="base">
            <StatusBar />
            <div className="baseCover">
                <div className="pop-serve">
                    <div className="ft-div">
                        <h2 className="ft-txt">Services</h2>
                    </div>
                    <div className="pop-cover">
                        <div className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Typing</div>
                        </div>
                        <div className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Typing</div>
                        </div>
                        <div className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Typing</div>
                        </div>
                        <div className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Typing</div>
                        </div>
                    </div>
                </div>
                <div className=""></div>
                <AcadeRoll showfaculties={showfaculties} toggleFaculties={toggleFaculties} />
                <div className="gigs-cover">
                    <div className="ft-div">
                        <h2 className="ft-txt">Gigs</h2>
                    </div>
                    <div className="gigs-roll">
                        <GigItem />
                        <GigItem />
                        <GigItem />
                    </div>
                </div>
                <div className="events-cover">
                    <div className="ft-div">
                        <h2 className="ft-txt">Gigs</h2>
                    </div>
                    <div className="events-roll"></div>
                </div>
            </div>
            {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
            {showfaculties ? <Faculties toggleFaculties={toggleFaculties} /> : ''}
            <BottomNav />
            {/*pageCtx.showCreate ? <CreatePost /> : ''*/}
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    )
}