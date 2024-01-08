import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import { useOutletContext, useLoaderData, NavLink, Outlet } from  'react-router-dom'

export const dptLoader = async ({params}) => {
    const dpt = params.dpt
    const faculty = params.faculty
    return {faculty, dpt}
}
export default function Department() {
    const {pageCtx, authCtx} = useOutletContext()
    const ring = require("../assets/media/pix/ring_banner.png")
    const {faculty, dpt } = useLoaderData()
    
    return (
        <div className="base">
            <StatusBar title={dpt.toUpperCase()} />
            <div className={pageCtx.theme=='light' ? "base-cover base-cover-light" : "base-cover base-cover-dark"}>
                <div className="fac-card" >
                    <div className="fac-card-details" >
                        <div className="fac-cover-frame">
                            <img src={ring} className="fac-cover-img" />
                        </div>
                    </div>
                    <div className="fac-titles" >
                        <div className="fac-name-cover">
                            <h1 className="fac-name">Department of {dpt.toUpperCase()}</h1>
                        </div>
                        <div className="fac-desc">
                            <span className="fac-bio">Department Motto</span>
                        </div>
                        <div className="fac-collection">
                            <NavLink to="activity" className="fac-act-cover">
                                {({isActive, isPending})=>(<div className={isActive ? "fac-btn fac-btn-active" : "fac-btn"}>Activity</div>)}
                            </NavLink>
                            <NavLink to="info" className="fac-act-cover" >
                                {({isActive, isPending})=>(<div className={isActive ? "fac-btn fac-btn-active" : "fac-btn"}>Info</div>)}
                            </NavLink>
                            <NavLink to="dpts" className="fac-act-cover" >
                                {({isActive, isPending})=>(<div className={isActive ? "fac-btn fac-btn-active" : "fac-btn"}>Levels</div>)}
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Outlet context={{pageCtx, authCtx}} />
            </div>
            <BottomNav />
        </div>
    )
}