import { useLoaderData, Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline, imagesOutline, readerOutline, albumsOutline, informationCircleOutline } from 'ionicons/icons'

import Faculties from '../components/Faculties'
import '../assets/css/acbanner.css'

export default function Academics({ toggleFaculties }) {
    const institutes = useLoaderData()
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className="ac-banner">
            <div className="ac-banner-cover">
                <h3 className="ac-banner-head">Academics</h3>
                {/*<span>Explore the different academies and institutions of learning around the country</span>*/}
            </div>
            <div className="ac-options">
                <div className="ac-options-btn" onClick={()=>toggleFaculties()}>
                    <IonIcon icon={readerOutline} style={pageCtx.iconStyle}></IonIcon>
                    <p className="ac-options-txt">Faculties</p>
                </div>
                <div className="ac-options-btn" >
                    <IonIcon icon={imagesOutline} style={pageCtx.iconStyle}></IonIcon>
                    <p className="ac-options-txt">SUG</p>
                </div>
                <div className="ac-options-btn" >
                    <IonIcon icon={imagesOutline} style={pageCtx.iconStyle}></IonIcon>
                    <p className="ac-options-txt">SUG</p>
                </div>
            </div>
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    )
}