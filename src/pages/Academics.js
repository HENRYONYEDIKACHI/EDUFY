import { useLoaderData, Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { school, schoolOutline, book,  bookOutline, megaphone, easel, easelOutline, globle, globeOutline, calendar, calendarOutline } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Faculties from '../components/Faculties'

import '../assets/css/academics.css'

export const acadLoader = async () => {
    const institutes = []
    return { institutes }
}

export default function Academics() {
    const {pageCtx, authCtx} = useOutletContext()
    const { institutes } = useLoaderData()
    const ring = require("../assets/media/pix/ring_banner.png")
    return (
        <div className="base">
            <StatusBar title="Academics" />
            <div className={pageCtx.theme=='light' ? "base-cover base-cover-light" : "base-cover base-cover-dark"}>
                <div className={pageCtx.theme=='light' ? "acd-head acd-head-light" : "acd-head acd-head-dark"}>
                    <div className="acd-icon-cover">
                        <IonIcon className={pageCtx.theme=='light' ? "page-icon page-icon-light" : "page-icon page-icon-dark"} icon={school}></IonIcon>
                    </div>
                    <span className={pageCtx.theme=='light' ? "acd-head-txt acd-head-txt-light" : "acd-head-txt acd-head-txt-dark"}>Books. Past Questions. Tutorials. Etc.</span>
                </div>
                <div className="acd-link-hold">
                    <Link to="books" className={pageCtx.theme=='light' ? "acd-links acd-links-light" : "acd-links acd-links-dark"}>
                        <div className="acd-link-img-cover">
                            <IonIcon icon={bookOutline} size="large" className="acd-link-img"></IonIcon>
                        </div>
                        <div className="acd-link-txt-cover">
                            <span className="acd-link-txt-hd">Books</span>
                            <span className="acd-link-txt">Past Questions Textbooks, Research Papers, etc.</span>
                        </div>
                    </Link>
                    <Link to="faculties" className={pageCtx.theme=='light' ? "acd-links acd-links-light" : "acd-links acd-links-dark"}>
                        <div className="acd-link-img-cover">
                            <IonIcon icon={schoolOutline} size="large" className="acd-link-img"></IonIcon>
                        </div>
                        <div className="acd-link-txt-cover">
                            <span className="acd-link-txt-hd">Faculties</span>
                            <span className="acd-link-txt">Staff, Departments, Labs, etc</span>
                        </div>
                    </Link>
                    <div className={pageCtx.theme=='light' ? "acd-links acd-links-light" : "acd-links acd-links-dark"}>
                        <div className="acd-link-img-cover">
                            <IonIcon icon={calendarOutline} size="large" className="acd-link-img"></IonIcon>
                        </div>
                        <div className="acd-link-txt-cover">
                            <span className="acd-link-txt-hd">Events</span>
                            <span className="acd-link-txt">Sports Festivals, Workshops And Seminars</span>
                        </div>
                    </div>
                    <div className={pageCtx.theme=='light' ? "acd-links acd-links-light" : "acd-links acd-links-dark"}>
                        <div className="acd-link-img-cover">
                            <IonIcon icon={globeOutline} size="large" className="acd-link-img"></IonIcon>
                        </div>
                        <div className="acd-link-txt-cover">
                            <span className="acd-link-txt-hd">SUG</span>
                            <span className="acd-link-txt">Offices, Elections</span>
                        </div>
                    </div>
                    <div className={pageCtx.theme=='light' ? "acd-links acd-links-light" : "acd-links acd-links-dark"}>
                        <div className="acd-link-img-cover">
                            <IonIcon icon={easelOutline} size="large" className="acd-link-img"></IonIcon>
                        </div>
                        <div className="acd-link-txt-cover">
                            <span className="acd-link-txt-hd">Tutorials</span>
                            <span className="acd-link-txt">Training Centers,  Videos, Channels</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*pageCtx.showfaculties ? <Faculties facData={facData} toggleFaculties={pageCtx.toggleFaculties} /> : ''*/}
            <Outlet context={{ pageCtx, authCtx }} />
            <BottomNav />
        </div>
    )
}