import { createContext } from 'react'


export const SocketContext = createContext({
    loggedUser: {username: 'Guest', user_id: null, acctoken: null},
    socket: new WebSocket("ws://127.0.0.1:8000/wstest"),
    reconnect: ()=> {this.socket = new WebSocket("ws://127.0.0.1:8000/wstest")}
})