import { useState, useEffect, useContext, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'

import BackFill from './BackFill'
import StatusBar from '../components/StatusBar'
import Toast from './Toast'
import TextEditor from './TextEditor'
import FilePicker from './FilePicker'
import EmojiPicker from 'emoji-picker-react';

import '../assets/css/createpost.css'
import { IonIcon } from '@ionic/react'
import { imageOutline, filmOutline, peopleCircleOutline, peopleOutline, checkmarkOutline, lockOpenOutline, lockClosedOutline, closeCircle, play, happyOutline } from 'ionicons/icons'
import { useSpring, animated } from '@react-spring/web'

function CreatePost({ toggleCreate }) {
    const [pub, setPub] = useState(true)
    const [pubOpt, setPubOpt] = useState(false)
    const [postTxt, setPostTxt] = useState()
    const [attachments, setAttachments] = useState()
    const bsks = require("../assets/media/pix/bsks.jpg")
    
    const {pageCtx, authCtx} = useOutletContext()
    
    if (authCtx.user.loggedIn===false) {
        window.location = '/signin'
    }
    const togglePub = async (xvalue) => {
        if (xvalue === 'public') {
            setPub(true)
        } else if (xvalue === 'private') {
            setPub(false)
        }
    }
    const togglePubOpt = async (event) => {
        if (!pubOpt) {
            setPubOpt(true)
        } else {
            setPubOpt(false)
        }
    }
    const handleTxt = (edContent) => {
        setPostTxt(edContent)
    }
    
    let mediaArray = useRef([])
    const popMedia = (e) =>{
        let del_target = e.target.parentElement
        mediaHold.current.removeChild(del_target)
        let arrayItem = mediaArray.current.find((itm)=>{
            return itm.name.split('.')[0] === del_target.id
        })
        mediaArray.current.splice(arrayItem, 1)
    }
    const pickFiles = (md_type) => {
        let mediaList
        let mediaPicker = document.createElement('input')
        mediaPicker.setAttribute('id', 'pick-file')
        mediaPicker.setAttribute('style', 'visibility: hidden')
        mediaPicker.setAttribute('type', 'file')
        mediaPicker.setAttribute('multiple', 'multiple')
        mediaPicker.setAttribute('accept', md_type)
        document.querySelector('.options-cover').appendChild(mediaPicker)
        mediaPicker.click()
        mediaPicker.addEventListener('change', (e)=>{
            function setupReader(xfile) {
                let mediaData = {}
                let src = `data:${xfile.type};base64,`
                mediaData.name = xfile.name
                mediaData.type = xfile.type
                
                let mediaBox = document.createElement('div')
                mediaBox.setAttribute('class', 'media-box')
                mediaBox.setAttribute('id', xfile.name.split('.')[0])
                
                let mediaIcon = document.createElement('div')
                mediaIcon.innerHTML = '&times;'
                mediaIcon.setAttribute('class', 'media-icon')
                mediaIcon.addEventListener('click', popMedia)
                // if (!xfile.size > 4000000) {
                    if (xfile.type.includes('video')) {
                        let mediaVid = document.createElement('video')
                        mediaVid.setAttribute('width', '130')
                        mediaVid.setAttribute('height', '180px')
                        mediaVid.setAttribute('nocontrols', true)
                        mediaVid.setAttribute('class', 'media-item')
                        mediaVid.type = xfile.type
                        
                        let reader = new FileReader();
                        reader.readAsDataURL(xfile)
                        reader.onload = function(ev) {
                            mediaData.data = ev.target.result.split(',')[1]
                            mediaVid.src  = src + mediaData.data
                        }
                        
                        let mediaPlay = document.createElement('IonIcon')
                        mediaPlay.icon = play
                        mediaPlay.setAttribute('class', 'media-play')
                        mediaPlay.style = pageCtx.iconStyle
                        
                        mediaBox.appendChild(mediaIcon)
                        mediaBox.appendChild(mediaPlay)
                        mediaBox.appendChild(mediaVid)
                        mediaHold.current.appendChild(mediaBox)
                    }else if (xfile.type.includes('image')){
                        let mediaImg = document.createElement('img')
                        mediaImg.setAttribute('class', 'media-item')
                        
                        let reader = new FileReader();
                        reader.readAsDataURL(xfile)
                        reader.onload = function(ev) {
                            mediaData.data = ev.target.result.split(',')[1]
                            src = src + mediaData.data
                            mediaImg.src = src
                        }
                        mediaBox.appendChild(mediaIcon)
                        mediaBox.appendChild(mediaImg)
                        mediaHold.current.appendChild(mediaBox)
                    } 
                // }else {
                        // alert('Media sizes must not be larger than 4MB')
                    // }
                mediaArray.current.push(mediaData)
            }
            mediaList = Array.from(e.target.files)
            mediaList.forEach(setupReader)
            setAttachments(mediaArray.current)
            console.log(attachments)
        })
    }
    let mediaHold = useRef(null)
    const upload_post = async () => {
        if (!postTxt && !attachments) {
            alert('Post upload failed!. Cannot upload an empty post.')
        } else {
            console.log(attachments)
            const post_data = {
                'content': postTxt,
                'media': attachments,
                'author': authCtx.user.username,
                'author_id': authCtx.user.user_id,
            }
            const fwd_post = await fetch(`http://${pageCtx.apiRoute}/user/post/new`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${authCtx.user.acctoken}`,
                },
                body: JSON.stringify(post_data)
            })
            const rez = await fwd_post.json()
            if (rez.res === 'OK') {
                alert(rez.message)
            }else {
                alert(rez.message)
            }
        }
    }
    const closeCreate = async () => {
        pageCtx.toggleCreate()
    }
    const [emoPicker, setEmoPicker] = useState(false)
    const toggleEmoPicker = () => {
        if (emoPicker) {
            setEmoPicker(false)
        }else{
            setEmoPicker(true)
        }
    }
    return (
        <div className="container">
            <BackFill action={closeCreate} />
            <div className="create-page-hold">
                <div className="banner">
                    <div className="user-banner">
                        <div className="avatar-cover" >
                            <img className="avatar" src={bsks} alt="Avatar" />
                        </div>
                        &nbsp;
                        <div className="user-div">
                            <h4>{authCtx.user.firstname}&nbsp;{authCtx.user.lastname}</h4>
                            <span>@{authCtx.user.username}</span>
                        </div>
                    </div>
                    <div className="view-grp" onClick={()=> togglePubOpt() }>
                        <IonIcon icon={pub ? peopleOutline : peopleCircleOutline} style={pageCtx.iconStyle}></IonIcon>
                        <span className="view-txt">{pub ? 'Public' : 'Private'}</span>
                    </div>
                </div>
                <div className="options-hold">
                    <h3 className="options-txt">New Post</h3>
                    <div className="options-cover">
                        <div className="opt-btn" onClick={()=> toggleEmoPicker()}>
                            <IonIcon icon={happyOutline} style={pageCtx.iconStyle} />
                        </div>
                        <div className="opt-btn" onClick={()=> pickFiles('images/*')}>
                            <IonIcon icon={imageOutline} style={pageCtx.iconStyle} />
                        </div>
                        <div className="opt-btn" onClick={()=> pickFiles('videos/*')}>
                            <IonIcon icon={filmOutline} style={pageCtx.iconStyle} />
                        </div>
                        <div className="action-btn" onClick={()=> upload_post()}>Post</div>
                    </div>
                </div>
                <div className="post-inputs">
                    <TextEditor handleTxt={handleTxt} />
                    {/*<FilePicker />*/}
                    <div id="media-hold" className="media-hold" ref={mediaHold}></div>
                    {emoPicker ? <div className="emo-div">
                        <EmojiPicker autoFocusSearch={false} emojiStyle="google" width="100%" height="25em" previewConfig={{showPreview:false}} />
                    </div> : ''}
                </div>
            </div>
            {/* Modal for changing view group */}
            <div style={pubOpt ? { display: 'flex'}: {display: 'none'}} className="view-change" onClick={()=> togglePubOpt() }>
                <div className="view-select">
                    {/*<p>Select who can view your posts</p>*/}
                    <div className="view-opt" onClick={()=> togglePub('public')}>
                        <div className="view-opt-left">
                            <IonIcon className="lock-icon" icon={peopleOutline} style={pageCtx.iconStyle}></IonIcon>
                            <div className="view-left-inn">
                                <span className="inn-hd">Public</span>
                                <p className="inn-txt">Anyone can see your posts</p>
                            </div>
                        </div>
                        {pub ? <IonIcon className="check-icon" icon={checkmarkOutline} style={pageCtx.iconStyle}></IonIcon> : ''}
                    </div>
                    <div className="view-opt" onClick={()=> togglePub('private')}>
                        <div className="view-opt-left">
                            <IonIcon className="lock-icon" icon={peopleCircleOutline} style={pageCtx.iconStyle}></IonIcon>
                            <div className="view-left-inn">
                                <span className="inn-hd">Private</span>
                                <p className="inn-txt">Only followers can view your posts</p>
                            </div>
                        </div>
                        {!pub ? <IonIcon className="check-icon" icon={checkmarkOutline} style={pageCtx.iconStyle}></IonIcon> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost