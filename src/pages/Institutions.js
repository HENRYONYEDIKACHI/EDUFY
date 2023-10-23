import { useLoaderData, Link } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'

export const instituteLoader = async () => {
    const institutes = []
    return institutes
}

export default function Institutions() {
    const institutes = useLoaderData()
    
    return (
        <div className="page-hold">
            <div className="page-bar">
                <IonIcon className="arrow-back" icon={arrowBackOutline} onClick={()=>window.history.back()}></IonIcon>
                <h3 className="page-bar-txt">Jobs and Offers</h3>
            </div>
            <div className="page-banner">
                <div className="page-banner-headers-cover">
                    <h3>Welcome to the Jobs and Offers Page</h3>
                    <span>Post jobs. Find skilled persons to carry out tasks</span>
                    <div className="page-banner-option-cover">
                        <Link to="/jobs/post-job" className="page-banner-btn page-btn-1">Post a Gig</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}