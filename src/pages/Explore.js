import { useState, useEffect, useContext } from 'react'
import { Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { search, searchOutline, optionsOutline, closeOutline, arrowBackOutline } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
// import Search from '../components/Search'

import '../assets/css/explore.css'

function Explore() {
    const {pageCtx, authCtx} = useOutletContext()
    
    // const [searchView, setSearchView] = useState(
    // const toggleSearchView = () => {
    //     if (searchView) {
    //         setSearchView(false)
    //     }else {
    //         setSearchView(true)
    //     }
    // }
    
    const bsks = require("../assets/media/pix/bsks.jpg");
    const ringBanner = require("../assets/media/pix/ring_banner.png");
    
    useEffect(() => {
        // setPage('/explore')
    })
    return (
        <div className="explore">
            <StatusBar />
            <div className="exp-cover">
                <div className="explore-bar">
                    <h2>Explore</h2>
                    <Link to="/explore/s" className="dummy-bar">
                        <IonIcon icon={searchOutline} style={pageCtx.iconStyle}></IonIcon>
                    </Link>
                </div>
                <div className="gigs-box">
                    <Link to="/explore/jobs" className="gigs-card">
                        <img src={ringBanner} className="gigs-img" />
                        <div className="gigs-cover">
                            <h3 className="gigs-header">Jobs</h3>
                            {/*<p className="gigs-txt">Do you have a job or task you want done</p>*/}
                            {/*<Link to="/explore/jobs" className="gigs-links">View</Link>*/}
                        </div>
                    </Link>
                    <Link to="/explore/institutions" className="gigs-card">
                        <img src={ringBanner} className="gigs-img" />
                        <div className="gigs-cover">
                            <h3 className="gigs-header">Academics</h3>
                            {/*<p className="gigs-txt">Explore schools and institutions across the country</p>*/}
                            {/*<Link to="/explore/institutions" className="gigs-links">View</Link>*/}
                        </div>
                    </Link>
                    <Link to="/explore/spaces" className="gigs-card">
                        <img src={ringBanner} className="gigs-img" />
                        <div className="gigs-cover">
                            <h3 className="gigs-header">Spaces</h3>
                            {/*<p className="gigs-txt">Create Spaces to share your content</p>*/}
                            {/*<Link to="/explore/institutions" className="gigs-links">View</Link>*/}
                        </div>
                    </Link>
                    <Link to="/explore/books" className="gigs-card">
                        <img src={ringBanner} className="gigs-img" />
                        <div className="gigs-cover">
                            <h3 className="gigs-header">Books</h3>
                            {/*<p className="gigs-txt">Create Spaces to share your content</p>*/}
                            {/*<Link to="/explore/institutions" className="gigs-links">View</Link>*/}
                        </div>
                    </Link>
                </div>
                {/*<div className="comm-div">
                    <h3 className="head-txt">Communities & Spaces</h3>
                    <div className="comm-grp">
                        <div className="comm-item">
                            <div className="comm-item-cover">
                                <img src={ringBanner} alt="Cover Image" className="comm-item-img" />
                            </div>
                            <div className="comm-item-content">
                                <div className="comm-item-txt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="comm-item">
                            <div className="comm-item-cover">
                                <img src={ringBanner} alt="Cover Image" className="comm-item-img" />
                            </div>
                            <div className="comm-item-content">
                                <div className="comm-item-txt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="comm-item">
                            <div className="comm-item-cover">
                                <img src={ringBanner} alt="Cover Image" className="comm-item-img" />
                            </div>
                            <div className="comm-item-content">
                                <div className="comm-item-txt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="comm-item">
                            <div className="comm-item-cover">
                                <img src={ringBanner} alt="Cover Image" className="comm-item-img" />
                            </div>
                            <div className="comm-item-content">
                                <div className="comm-item-txt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/explore/communities" className="gigs-links">View more</Link>
                </div>*/}
                {/* searchView ? <Search searchView={searchView} toggleSearchView={toggleSearchView} /> : '' */}
            </div>
                <Outlet context={{pageCtx, authCtx}} />
            <BottomNav />
        </div>
    )
}

export default Explore