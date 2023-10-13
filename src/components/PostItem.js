import { useState, useContext, useEffect, useRef } from 'react'
import { useLoaderData, useOutletContext, useMatches, Link } from 'react-router-dom'

import { IonIcon } from '@ionic/react'
import { ellipsisVertical, heart, heartOutline, chatboxOutline, repeatOutline, shareSocialOutline } from 'ionicons/icons'

import { Player } from "react-tuby";
import "react-tuby/css/main.css";

import { PageContext } from '../ctx/PageContext'
import { AuthContext } from '../ctx/AuthContext'

import '../assets/css/postitem.css'

function PostItem({ toggleOption, postitem }) {
    const {pageCtx, authCtx} = useOutletContext()
    const matches = useMatches()
    
    const aniHelps = require("../assets/media/pix/anime helps.jpg")
    const bsks = require("../assets/media/pix/bsks.jpg")
    
    const postDate = new Date()
    
    const like_post = async (e) => {
        const msg = {
            'user': authCtx.user.username,
            'user_id': authCtx.user.user_id,
            'type': 'POST',
            'action': 'like',
            'object': postitem.post_id,
            'object_type': 'post'
        }
    }
    const actBtnStyle = {
        fontSize: '18px',
        color: pageCtx.iconStyle.color,
    }
    
    let mediaArray = useRef([])
    const fetch_media = async (md) => {
        const req = await fetch(`http://${pageCtx.apiRoute}/media/${md.md_id}`)
        const res = await req.json()
        if (res.res == 'OK') {
            let md_src = ''
            return md_src
        } else {
            return 'Error'
        }
    }
    const set_media= () => {
        if (postitem.media) {
            postitem.media.map((md_x)=> {
                let cardMediaWrap= document.createElement('div')
                cardMediaWrap.setAttribute('class', 'card-media-wrap')
                if (md_x.md_format.includes('image')) {
                    let cardImg = document.createElement('img')
                    cardImg.setAttribute('src', `data:${md_x.md_format};base64,${md_x.md_data}`)
                    cardImg.setAttribute('class', 'card-media')
                    cardMediaWrap.appendChild(cardImg)
                } else if (md_x.md_format.includes('video')) {
                    let cardVid = document.createElement('video')
                    cardVid.setAttribute('class', 'card-media')
                    let vidSrc = document.createElement('source')
                    vidSrc.setAttribute('type', md_x.md_format)
                    vidSrc.setAttribute('src', `data:${md_x.md_format};base64,${md_x.md_data}`)
                    cardVid.appendChild(vidSrc)
                    cardMediaWrap.appendChild(cardVid)
                }
                mediaArray.current.push(cardMediaWrap)
            })
            if (mediaArray.current.length > 4) {
                let miniArray = postitem.media.slice(0, 4)
                let blurScn = document.createElement('div')
                blurScn.setAttribute('class', 'blur-more')
                miniArray[-1].appendChild(blurScn)
                miniArray.forEach((elt)=>{
                    mediaDiv.current.appendChild(elt)
                })
            } else {
                for (let xterm=0; xterm<mediaArray.current.length; xterm++) {
                    mediaDiv.current.appendChild(mediaArray.current[xterm])
                }
            }
        }
    }
    let mediaDiv = useRef(null)
    
    useEffect(()=>{
        set_media()
    }, [])
    return (
        <Link to={`/${postitem.username}/post/${postitem.post_id}`} className="card" >
            <div className="card-header">
                <div className="card-title">
                    <div className="card-vatar-cover">
                        {postitem.avatar ? <img src={`data:image/jpeg;base64,${postitem.avatar}`} alt="Avatar" className="card-vatar" /> : <img src={bsks} alt="Avatar" className="card-vatar" />}
                    </div>
                    &nbsp;
                    <div className="card-holder">
                        <h6 className="author-fullname">{postitem.firstname} {postitem.lastname}</h6>
                        <p className="author-username">@{postitem.username}</p>
                    </div>
                </div>
                <div className="card-opt-btn" onClick={()=> pageCtx.toggleOption('more', true)}>
                    <IonIcon icon={ellipsisVertical} style={{actBtnStyle}, {color: 'rgba(0,128,128,.8)'}} />
                </div>
            </div>
            <div className="card-content" >
                {postitem.content ? <div className="txt-content" dangerouslySetInnerHTML={{ __html: postitem.content}}></div> : '' }
                {postitem.media ? <div ref={mediaDiv} className="card-imgs"></div> : ''}
             </div>
            <div className="card-actions">
                <span className="icon-span">
                    {postitem.likes}
                    <IonIcon icon={heartOutline} style={actBtnStyle} />
                </span>
                <span className="icon-span">
                    <IonIcon icon={chatboxOutline} style={actBtnStyle} />
                </span>
                <span className="icon-span" onClick={()=> toggleOption('share', true)}>
                    <IonIcon icon={repeatOutline} style={actBtnStyle} />
                </span>
                <span className="icon-span" onClick={()=> toggleOption('share', true)}>
                    <IonIcon icon={shareSocialOutline} style={actBtnStyle} />
                </span>
            </div>
        </Link>
    )
}

export default PostItem