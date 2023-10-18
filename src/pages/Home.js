import '../assets/css/home.css'
import { useState, useEffect, useContext, useRef, Suspense } from 'react'
import { useLoaderData, useOutletContext, defer,Await } from 'react-router-dom'

import { IonIcon } from '@ionic/react';
import { heart, heartOutline, repeat, repeatOutline, chatbox, chatboxOutline, ellipsisVertical, ellipsisVerticalOutline, pencilOutline, albumsOutline, createOutline } from 'ionicons/icons'

import PostItem from '../components/PostItem'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Palette from '../components/Palette'
import Poption from '../components/Poption'
import FallBack from '../components/FallBack'
import CreatePost from '../components/CreatePost'

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
    return (
        <div className="home">
            <StatusBar />
            <div className="homeCover">
                { !posts ? <>
                <FallBack />
                <FallBack />
                <FallBack />
                <FallBack /></>
                : posts.map((postitem)=><PostItem key={postitem.post_id} postitem={postitem} />) }
            </div>
            <Palette />
            {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
            <BottomNav />
            {pageCtx.showCreate ? <CreatePost /> : ''}
        </div>
    )
}