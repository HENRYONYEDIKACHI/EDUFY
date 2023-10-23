import { useLoaderData, Link } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline } from 'ionicons/icons'

export const instituteLoader = async () => {
    const institutes = []
    return institutes
}

export default function Institutions() {
    const institutes = useLoaderData()
    
    return (
        <div className="page-hold">
            {/*<div className="comment">Some styling can be found at `assets/css/common.css`</div>*/}
            <div className="page-bar">
                <div className="page-bar-left">
                    <IonIcon className="page-bar-icon" icon={arrowBackOutline} onClick={()=>window.history.back()}></IonIcon>
                    <h3 className="page-bar-txt">Institutions</h3>
                </div>
                <div className="page-bar-right">
                    <IonIcon className="page-bar-icon" icon={searchOutline} onClick={()=>{}}></IonIcon>
                </div>
            </div>
            <div className="page-banner">
                <div className="page-banner-headers-cover">
                    <h3>Academies and Institutions</h3>
                    <span>Explore the different academies and institutions of learning around the country</span>
                    <div className="page-banner-option-cover">
                        <Link to="/jobs/post-job" className="page-banner-btn page-btn-1">Explore Institutions</Link>
                    </div>
                </div>
            </div>
            <div className="page-more">
                <div className="page-more-header-sort">
                    <span>News</span>
                    <span>Search</span>
                </div>
                <div className="page-more-view"></div>
            </div>
        </div>
    )
}