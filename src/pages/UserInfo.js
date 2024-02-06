import { useState, useContext, useEffect } from 'react'
import { useOutletContext, Link, useParams, Outlet, NavLink, useLocation } from 'react-router-dom'

import '../assets/css/userinfo.css'

export default function UserInfo() {
    const {pageCtx, authCtx} = useOutletContext()
    return (
        <div className="us-hold">
            <div className={pageCtx.theme=='light' ? "us-card us-card-light" : "us-card us-card-dark"}>
                <span className={pageCtx.theme=='light' ? "us-tag us-tag-light" : "us-tag us-tag-dark"}>Basic</span>
                <div className="us-info">
                    <div className="rows">
                        <span className="col col-1">Name:</span>
                        &nbsp;
                        <span className="col col-2">Max Prosper</span>
                    </div>
                    <div className="rows">
                        <span className="col col-1">Age:</span>
                        &nbsp;
                        <span className="col col-2">18</span>
                    </div>
                    <div className="rows">
                        <span className="col col-1">Bio:</span>
                        &nbsp;
                        <span className="col col-2">Cool and calm</span>
                    </div>
                </div>
            </div>
            <div className={pageCtx.theme=='light' ? "us-card us-card-light" : "us-card us-card-dark"}>
                <span className={pageCtx.theme=='light' ? "us-tag us-tag-light" : "us-tag us-tag-dark"}>Education</span>
                <div className="us-info">
                    <div className="rows">
                        <span className="col col-1">School:</span>
                        &nbsp;
                        <span className="col col-2">Federal University Otuoke (FUO)</span>
                    </div>
                    <div className="rows">
                        <span className="col col-1">Dept:</span>
                        &nbsp;
                        <span className="col col-2">Mechatronics Engineering</span>
                    </div>
                    <div className="rows">
                        <span className="col col-1">Level:</span>
                        &nbsp;
                        <span className="col col-2">300</span>
                    </div>
                </div>
            </div>
            <div className={pageCtx.theme=='light' ? "us-card us-card-light" : "us-card us-card-dark"}>
                <span className={pageCtx.theme=='light' ? "us-tag us-tag-light" : "us-tag us-tag-dark"}>Work History</span>
                <div className="us-info">
                    <div className="rows">
                        <span className="col col-1">Company/Organization:</span>
                        &nbsp;
                        <span className="col col-2">Federal University Otuoke (FUO)</span>
                    </div>
                    <div className="rows">
                        <span className="col col-1">Position:</span>
                        &nbsp;
                        <span className="col col-2">Mechatronics Engineering</span>
                    </div>
                    <div className="rows">
                        <span className="col col-1">Duration:</span>
                        &nbsp;
                        <span className="col col-2">2020-2023</span>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}
