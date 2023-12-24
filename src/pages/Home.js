import '../assets/css/home.css'
import { useState, useEffect, useContext, useRef, Suspense } from 'react'
import { useLoaderData, useOutletContext, defer,Await, Outlet, Link } from 'react-router-dom'

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
    const facData = [
        {
            id: 1,
            faculty: 'Engineering',
            code: 'fen'
        },
        {
            id: 2,
            faculty: 'Science',
            code: 'fos'
        },
        {
            id: 3,
            faculty: 'Management Science',
            code: 'fms'
        },
    ]
    const data = {posts, facData}
    return data
}

export const postsLoader = async () => {
    return await grab_posts()
}

export default function Home({ viewOption, visibility, setVisibility, toggleOption }) {
    const {pageCtx, authCtx} = useOutletContext()
    const { posts, facData } = useLoaderData()
    console.log(facData)
    
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="base">
            <StatusBar title="Edufy" />
            <div className="base-cover">
                <AcadeRoll facData={facData} showfaculties={pageCtx.showfaculties} toggleFaculties={pageCtx.toggleFaculties} />
                <div className="pop-serve">
                    <div className="ft-div">
                        <h2 className="ft-txt">Services</h2>
                        <Link to="services" className="ft-more">See more</Link>
                    </div>
                    <div className="pop-cover">
                        <Link className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Writing/Typing</div>
                        </Link>
                        <Link className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Barbing</div>
                        </Link>
                        <Link className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Fashion</div>
                        </Link>
                        <Link className="pop-item">
                            <img className="pop-img" src={ring} />
                            <div className="pop-txt">Graphics Design</div>
                        </Link>
                    </div>
                </div>
                <div className="gigs-cover">
                    <div className="ft-div">
                        <h2 className="ft-txt">Gigs</h2>
                        <Link to="explore" className="ft-more">See more</Link>
                    </div>
                    <div className="gigs-roll">
                        <GigItem />
                        <GigItem />
                        <GigItem />
                    </div>
                </div>
                <div className="channels-cover">
                    <div className="ft-div">
                        <h2 className="ft-txt">Channels</h2>
                        <Link to="explore" className="ft-more">See more</Link>
                    </div>
                    <div className="channel-roll">
                        <GigItem />
                        <GigItem />
                        <GigItem />
                    </div>
                </div>
            </div>
            {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
            {pageCtx.showfaculties ? <Faculties facData={facData} toggleFaculties={pageCtx.toggleFaculties} /> : ''}
            <BottomNav />
            {/*pageCtx.showCreate ? <CreatePost /> : ''*/}
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    )
}