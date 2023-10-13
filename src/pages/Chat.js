import { useState, useEffect, useContext, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'

import { IonIcon } from '@ionic/react'
import { arrowBackOutline, navigateOutline, send, sendOutline, happyOutline, filmOutline, imageOutline } from 'ionicons/icons'
import EmojiPicker from 'emoji-picker-react';

import '../assets/css/Chat.css'

export default function Chat() {
    const {pageCtx, authCtx} = useOutletContext()
    
    const [view, setView] = useState(pageCtx.page)
    const [msgTxt, setMsgTxt] = useState('')
    
    console.log(authCtx)
    // if (page.includes('/chat/')) {
        const chatInfo = pageCtx.page
        const chatArray = chatInfo.split('/')
        let chatId = chatArray[1]
        let recipient = chatArray[2]
    // }
    window.addEventListener("popstate", function(event) {
        // alert(event)
        window.history.pushState({'page': event.state}, `${event.state.page}`, event.state.page)
        pageCtx.setPage(event.state.page)
        console.log(event)
    } )
    
    const msgDate = new Date()
    let mediaHold = useRef([])
    const handleValue = (event) => {
        {msgTxt ? event.target.defaultValue = msgTxt : event.target.defaultValue = '' }
    }
    const handleMsg = (event) => {
        setMsgTxt(event.target.value)
    }
    const handleTxt = async (event) => {
        console.log(event.target.value)
        setMsgTxt(event.target.value)
    }
    const sendMsg = () => {
        if (msgTxt === ''){
            alert('Message cannot be empty')
        } else if (msgTxt !== '') {
            let data = {
                type: 'chat',
                chatId: chatId,
                sender: authCtx.user.username,
                senderId: authCtx.user.user_id,
                recipient: recipient,
                recipientId: '',
                message: msgTxt,
            }
            authCtx.socket.send(JSON.stringify(data))
        }
        setMsgTxt('')
    }
    
    const [emoPicker, setEmoPicker] = useState(false)
    const toggleEmoPicker = () => {
        if (emoPicker) {
            setEmoPicker(false)
        }else{
            setEmoPicker(true)
        }
    }
    // socketCtx.socket.onmessage = (event) => {
    //     alert(event.data)
    // }
    return (
        <div className="chatCover">
            <div className="chatHead">
                <div className="backBtn" onClick={()=> window.history.back()}>
                    <IonIcon icon={arrowBackOutline} size="large" color="rgb(0, 128, 128)"></IonIcon>
                </div>
                <h2 className="pgTxt">Mapro</h2>
            </div>
            <div className="chatView">
                <div className="chat-box">
                    <div className="msg-item msg-out">
                        <div className="chat-bubble">
                            <p className="msg-content">Message text</p>
                            <p className="msg-date">{msgDate.getDay()}-{msgDate.getDate()}-{msgDate.getFullYear()}</p>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="msg-item msg-in">
                        <div className="chat-bubble">
                            <p className="msg-content">Message text</p>
                            <p className="msg-date">{msgDate.getDay()}-{msgDate.getDate()}-{msgDate.getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-input-container">
                <div id="media-hold" className="media-hold" ref={mediaHold}></div>
                <div className="input-hold">
                    <div className="dv-extra">
                        <div className="icon-div" onClick={()=>toggleEmoPicker()}>
                            <IonIcon icon={happyOutline} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                        <div className="icon-div" onClick={()=>toggleEmoPicker()}>
                            <IonIcon icon={imageOutline} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                        <div className="icon-div" onClick={()=>toggleEmoPicker()}>
                            <IonIcon icon={filmOutline} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                    </div>
                    <div className="field-btn-hold">
                        <textarea placeholder="Holla..." className="msgInput" onChange={handleTxt}></textarea>
                        <div className="msgBtn" onClick={()=> sendMsg}>
                            <IonIcon icon={send} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                    </div>
                </div>
                {emoPicker ? <div className="emo-div">
                    <EmojiPicker autoFocusSearch={false} emojiStyle="google" width="100%" height="25em" previewConfig={{showPreview:false}} />
                </div> : ''}
            </div>
        </div>
    )
}