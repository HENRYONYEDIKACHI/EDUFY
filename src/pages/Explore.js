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
        <div className="base">
            <StatusBar title="Explore" />
            <div className="base-cover">
                <div className="explore-bar">
                    <input type="search" name="explore-box" className="explore-box" placeholder="Search" />
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