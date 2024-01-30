import { useLoaderData, Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline, imagesOutline, readerOutline, albumsOutline, informationCircleOutline } from 'ionicons/icons'

import Faculties from '../components/Faculties'
import '../assets/css/adbanner.css'

export default function AdBanner({ facData, toggleFaculties }) {
    const institutes = useLoaderData()
    const {pageCtx, authCtx} = useOutletContext()
    
    return (
        <div className="ad-banner">
            <div className="ad-banner-cover">
                <span className="ad-banner-head">Advertisements</span>
                {/*<span>Explore the different academies and institutions of learning around the country</span>*/}
            </div>
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    )
}