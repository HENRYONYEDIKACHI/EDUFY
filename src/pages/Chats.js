import { useState, useEffect, useContext } from 'react'
import { useOutletContext, useParams, defer } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, chatbubbleOutline } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import ChatItem from '../components/ChatItem'

import'../assets/css/Chats.css'
   
const grab_chats = async (username) =>{
    const chatsGrabber = await fetch(`http://127.0.0.1:8080/${username}/chats`)
    const chats = await chatsGrabber.json()
    return chats
}
const chatsQuery = ({username}) => ({
    queryKey: ['chats'],
    queryFn: async () => grab_chats(username),
})

export const chatsLoader = (queryClient) => async ({ params }) => {
    const query = chatsQuery(params.username)
    return defer({
        posts: queryClient.getQueryData(query.queryKey) ?? (queryClient.fetchQuery(query))
    })    
}

function Chats ({ setPage, page }) {
    const { pageCtx, authCtx } = useOutletContext()
    const params = useParams()
    const {data, isLoading, error} = useQuery(chatsQuery(params.username))
    
    const [chats, setChats] = useState([
        {'name': 'Mapro','id': 1},{'name': 'Maxpee','id': 2},{'name': 'Peemax','id': 3},{'name': 'Promax','id': 4},{'name': 'Primax','id': 5},{'name': 'Maxee','id': 6}
    ])
    
    return (
        <div className="chatsCover">
            <div className="pageHead">
                <div className="backBtn" onClick={()=> window.history.back()}>
                    <IonIcon icon={arrowBackOutline} style={pageCtx.iconStyle}></IonIcon>
                </div>
                <h2 className="pgTxt">Chats</h2>
            </div>
            <div className="chatList">
                {chats.map((cht)=><ChatItem key={cht.id} setPage={setPage} chatitem={cht} />)}
            </div>
            <div className="newChat">
                <IonIcon icon={chatbubbleOutline} style={pageCtx.iconStyle}></IonIcon>
            </div>
        </div>
    )
}

export default Chats