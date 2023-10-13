import { useState, useEffect, useContext, useRef, Suspense, startTransition } from 'react'
import { useOutletContext, useLoaderData, defer, Await, useParams, useFetcher } from 'react-router-dom'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { Editor } from '@tinymce/tinymce-react';

import PostItem from '../components/PostItem'
import Poption from '../components/Poption'
import FallBack from '../components/FallBack'
import CreatePost from '../components/CreatePost'
import '../assets/css/post.css'

import { IonIcon } from '@ionic/react'
import { arrowBackOutline, sendOutline, happyOutline, play } from 'ionicons/icons'

const fetchComments = async (postid) => {
    const cmts_grabber = await fetch(`http://127.0.0.1:8080/post/${postid}/comments`)
    const cmts = cmts_grabber.json()
    return cmts
}
const cmtsQuery = (postid) => ({
    queryKey: ['comments'],
    queryFn: async ()=> fetchComments(postid),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
})

const grab_post = async (postid) => {
    const post_grabber = await fetch(`http://127.0.0.1:8080/post/${postid}`)
    const post = post_grabber.json()
    return post
}
const postQuery = (postid) => ({
    queryKey: ['post', postid],
    queryFn: async ()=> grab_post(postid),
})
export const postLoader = (queryClient) => async ({ params }) => {
    console.log(params)
    const query = postQuery(params.postid)
    return defer({
        post: queryClient.getQueryData(query.queryKey) ?? (queryClient.fetchQuery(query))
    })
}
    
function Post({ viewOption, visibility, setVisibility, toggleOption }) {
    const params = useParams()
    const fetcher = useFetcher()
    const {data:post, isLoading, error: postErr} = useQuery(postQuery(params.postid))
    
    let postRef = useRef([])
    let post_replies = useRef([])
    
    const {pageCtx, authCtx} = useOutletContext()
    
    const { data:comments, error: cmtErr, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status,} = useInfiniteQuery(cmtsQuery(params.postid))
    console.log(comments)
    const [newCmt, setNewCmt] = useState()
    const toggleNewCmt = async () => {
        if (newCmt) {
            setNewCmt(false)
        } else {
            setNewCmt(true)
        }
    }
    return (
        <div className="postView">
            <div className="viewHolder">
                <div className="viewHead">
                    <div className="viewIcon">
                        <IonIcon icon={arrowBackOutline} style={pageCtx.iconStyle} ></IonIcon>
                    </div>
                    <h2>Thread</h2>
                </div>
                {isLoading ? <FallBack /> : postErr ? <p>message</p> : post ? <PostItem toggleOption={toggleOption} postitem={post.post} />: ''}
            </div>
            <div className="comments"></div>
            {comments && !'err' in comments.pages.entries ? comments.pages.map((cmtitem)=><PostItem key={cmtitem.post.post_id} toggleOption={toggleOption} postitem={cmtitem.post} />) : ''}
            {!newCmt ? <div className="toggle-cmt-btn" onClick={()=> toggleNewCmt()}>Comment</div>: ''}
            {pageCtx.showCreate ? <CreatePost /> : ''}
            {visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''}
        </div>
    )
}

export default Post