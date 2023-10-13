import { useState, useContext, useEffect } from 'react'
import { useOutletContext, Link } from 'react-router-dom'

import { IonIcon } from '@ionic/react';
import { chatbubble, chatbubbleOutline, menu, menuOutline, closeOutline } from 'ionicons/icons'
import { PageContext } from '../ctx/PageContext'
import { AuthContext } from '../ctx/AuthContext'

import Menu from '../pages/Menu'
import '../assets/css/statusbar.css'

function StatusBar({ auths }) {
    const {pageCtx, authCtx} = useOutletContext()
    
    const handleView = async (xpage) => {
       if (pageCtx.page === '/menu') {
           window.history.back()
       } else {
            pageCtx.navigateTo(xpage)
       }
    }
    
    return (
        <div className='statusBar' >
            <div className="topBar" >
                <a href="/" className="topBarLeft" >Edufy</a>
                {/* {auths ? '' : <TopBar handleView={handleView} />} */}
                <div className="topBarRight">
                    { authCtx.user.username === 'Guest' ? '' : <Link to={`/user/${authCtx.user.username}/chats`} className="topBarItem chatLink"  >
                        <IonIcon icon={chatbubbleOutline} style={pageCtx.iconStyle}></IonIcon>
                    </Link>}
                    <div className="topBarItem menuLink" onClick={()=> pageCtx.toggleMenu()} >
                        <IonIcon icon={pageCtx.menuView ? closeOutline : menuOutline} style={pageCtx.iconStyle}></IonIcon>
                    </div>
                </div>
            </div>
            { pageCtx.menuView ? <Menu /> : '' }
        </div>
    )
}

export default StatusBar