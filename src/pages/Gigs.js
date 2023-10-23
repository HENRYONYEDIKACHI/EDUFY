import { arrowBackOutline, searchOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { useLoaderData, Link, Outlet } from 'react-router-dom'

import '../assets/css/gigs.css'

export const gigLoader = async () => {
    // Fetch gigs from api
    const gigs = [
        {
            'id': 1,
            'title': 'Ecommerce Website',
            'description': "I am looking for a web developer to create an ecommerce website. The design is to be responsive as well as intuitive and easy to use. Some contents are available but the developer will have to create some. I don't have a specific design in mind so the developer is free to come up with a design of his/her own.",
            'skills': [
                'HTML', 'CSS', 'JavaScript', 'Reactjs'
            ],
            'budget':  '$65',
            'expiration': '5 days',
        },
        {
            'id': 2,
            'title': 'Logo Design',
            'description': "I need logo designed for a transport/freight company. The design should be a simple one. The name of the company is LightPath Logistics. The colors to be used are grey and blue",
            'skills': [
                'PhotoShop', 'Graphic Design'
            ],
            'budget':  '$35',
            'expiration': '3 days',
        },
        {
            'id': 3,
            'title': 'Document Typing',
            'description': "A fast typist and proofreader is needed to proofread, edit and type an eight pages ling document with an average of 120 words per page",
            'skills': [
                'MS Word', 'Typing', 'Editing',
            ],
            'budget':  '$40',
            'expiration': '4 days'
        },
    ]
    return gigs
}

export default function Gigs() {
    const gigs = useLoaderData()
    console.log(gigs)
    return (
        <div className="page-hold">
            {/*<div className="comment">Some styling can be found at `assets/css/common.css`</div>*/}
            <div className="page-bar">
                <div className="page-bar-left">
                    <IonIcon className="page-bar-icon" icon={arrowBackOutline} onClick={()=>window.history.back()}></IonIcon>
                    <h3 className="page-bar-txt">Jobs</h3>
                </div>
                <div className="page-bar-right">
                    <IonIcon className="page-bar-icon" icon={searchOutline} onClick={()=>{}}></IonIcon>
                </div>
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
            <div className="page-more">
                <div className="page-more-header-sort">
                    <span>Jobs</span>
                    <span>Search</span>
                </div>
                <div className="page-more-view">
                {
                    gigs ? gigs.map((gigItem)=>
                    <div key={gigItem.id} className="gig-item">
                        <h2 className="gig-item-header">{gigItem.title}</h2>
                        <span className="gig-skills">Skills: {gigItem.skills.map((skl)=><span key={gigItem.skills.indexOf(skl)} className="skill-item">{skl}&nbsp;</span>)}</span>
                        <p className="gig-budget">Budget: {gigItem.budget}</p>
                        <div className="gig-btn">View</div>
                    </div>) : <div className="no-gig">No gigs available</div>
                }</div>
            </div>
            <div className="gig-filter-popup"></div>
        </div>
    )
}