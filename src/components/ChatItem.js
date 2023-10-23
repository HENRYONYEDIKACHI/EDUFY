import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import '../assets/css/ChatItem.css'

function ChatItem({ chatitem }) {
    const [view, setView] = useState(window.location.pathname)
    
    const {authCtx, pageCtx} = useOutletContext()
    
    const aniHelps = require("../assets/media/pix/anime helps.jpg")
    const bsks = require("../assets/media/pix/bsks.jpg")
    
    const handleChat = (xpath) => {
        window.history.pushState({'page': xpath}, 'xpath', xpath)
        setView(xpath)
        pageCtx.navigateTo(xpath)
    }
    
    return (
        <Link className="listItem" to={`/chat/${chatitem.id}/`} >
            <div className="chavatarCover" >
                <img className="chavatar" src={bsks} />
            </div>
            &nbsp;
            <p>{chatitem.name}</p>
        </Link>
    )
}

export default ChatItem