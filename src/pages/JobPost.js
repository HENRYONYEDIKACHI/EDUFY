import { IonIcon } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'

export const jobPostLoader = async () => {
    return null
}

export default function JobPost() {
    return (
        <div className="">
            <div className="page-bar">
                <IonIcon className="arrow-back" icon={arrowBackOutline} onClick={()=>window.history.back()}></IonIcon>
                <h3 className="jobs-bar-txt">Jobs and Offers</h3>
            </div>
            <div className="block">
                <p className="job-title">Job Title</p>
                <input type="text" className="job-input job-title-input" />
            </div>
            <div className="block">
                <p className="job-desc">Give a description of the job</p>
                <textarea className="job-input job-desc-input"></textarea>
                </div>
            <div className="block">
                <p>What skillset or knowledge is required?</p>
                <input type="search" className="job-input job-skill-input" />
                <div className="job-skillset-array"></div>
            </div>
            <div className="block">
                <p>What is your budget?</p>
                <input type="number" className="job-input budget-input" />
            </div>
            <div className="block job-btn">Post</div>
        </div>
    )
}