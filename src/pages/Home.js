import '../assets/css/home.css'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
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

const grab_posts = async (pageParam) =>{
    const postsGrabber = await fetch(`http://127.0.0.1:8080/posts/${pageParam}`)
    const posts = await postsGrabber.json()
    return posts
}
    
const postsQuery = () => ({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 1 }) => grab_posts(pageParam),
    getNextPageParam: (lastPage) => {
        console.log(lastPage)
        return lastPage.nextPage
    }
})

export const postsLoader = (queryClient) => async () => {
    const query = postsQuery()
    return defer({
        posts: queryClient.getQueryData(query.queryKey) ?? (queryClient.fetchQuery(query))
    })    
}

export default function Home({ viewOption, visibility, setVisibility, toggleOption }) {
    const {pageCtx, authCtx} = useOutletContext()
    // const { posts } = useLoaderData()data,
    const {data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status,} = useInfiniteQuery(postsQuery())
    // if (isSuccess) {
    //     cursor += 5
    // }
    console.log(data)
    return (
        <div className="home">
            <StatusBar />
            <div className="homeCover">
                { status === 'loading' ? <>
                <FallBack />
                <FallBack />
                <FallBack />
                <FallBack />
                </> : error ? <p>Error loading posts!</p> 
                : data.posts ? data.posts.map((postitem)=><PostItem key={postitem.post_id} postitem={postitem} />) 
                : ''
                }
                <button onClick={()=> fetchNextPage()}>{isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}</button>
            </div>
            <Palette />
            {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
            <BottomNav />
            {pageCtx.showCreate ? <CreatePost /> : ''}
        </div>
    )
}