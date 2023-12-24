import { useLoaderData, Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { school } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Faculties from '../components/Faculties'

import '../assets/css/academics.css'

export const acadLoader = async () => {
    const institutes = []
    const facData = [
        {
            id: 1,
            faculty: 'Engineering',
            code: 'fen'
        },
        {
            id: 2,
            faculty: 'Science',
            code: 'fos'
        },
        {
            id: 3,
            faculty: 'Management Science',
            code: 'fms'
        },
    ]
    return { facData, institutes }
}

export default function Academics() {
    const {pageCtx, authCtx} = useOutletContext()
    const { facData, institutes } = useLoaderData()
    const ring = require("../assets/media/pix/ring_banner.png")
    return (
        <div className="base">
            <StatusBar title="Academics" />
            <div className="base-cover">
                <div className="acd-head">
                    <div className="acd-icon-cover">
                        <IonIcon className="page-icon" icon={school} style={{'fontSize':'6em'}}></IonIcon>
                    </div>
                    <span className="acd-head-txt">Books. Past Questions. Institutions. Etc.</span>
                </div>
                <div className="acd-links">
                    <div className="acd-link-img-cover">
                        <img src={ring} className="acd-link-img" />
                    </div>
                    <div className="acd-link-txt-cover">
                        <span className="acd-link-txt-hd">Books</span>
                        <span className="acd-link-txt">Past Questions Textbooks, Research Papers, etc.</span>
                    </div>
                </div>
                <div className="acd-links" onClick={()=>pageCtx.toggleFaculties()}>
                    <div className="acd-link-img-cover">
                        <img src={ring} className="acd-link-img" />
                    </div>
                    <div className="acd-link-txt-cover">
                        <span className="acd-link-txt-hd">Faculties</span>
                        <span className="acd-link-txt">Staff, Departments, Labs, etc</span>
                    </div>
                </div>
                <div className="acd-links">
                    <div className="acd-link-img-cover">
                        <img src={ring} className="acd-link-img" />
                    </div>
                    <div className="acd-link-txt-cover">
                        <span className="acd-link-txt-hd">Events</span>
                        <span className="acd-link-txt">Sports Festivals, Workshops And Seminars</span>
                    </div>
                </div>
                <Outlet context={{ pageCtx, authCtx }} />
            </div>
            {pageCtx.showfaculties ? <Faculties facData={facData} toggleFaculties={pageCtx.toggleFaculties} /> : ''}
            <BottomNav />
        </div>
    )
}