import { useLoaderData, Link, useOutletContext, Outlet } from 'react-router-dom'
import '../assets/css/academics.css'
export const acadLoader = async () => {
    const institutes = []
    return institutes
}

export default function Academics() {
    const {pageCtx, authCtx} = useOutletContext()
    const ring = require("../assets/media/pix/ring_banner.png")
    return (
        <div className="acade-hold">
            <Outlet context={{pageCtx, authCtx  }} />
        </div>
    )
}