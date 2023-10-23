import { useState, useEffect, useContext } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { search, searchOutline, optionsOutline, closeOutline, arrowBackOutline } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import '../assets/css/explore.css'

function Explore() {
    const {pageCtx, authCtx} = useOutletContext()
    
    const [searchView, setSearchView] = useState()
    
    const toggleSearchView = () => {
        if (searchView) {
            setSearchView(false)
        }else {
            setSearchView(true)
        }
    }
    
    const bsks = require("../assets/media/pix/bsks.jpg");
    const ringBanner = require("../assets/media/pix/ring_banner.png");
    
    useEffect(() => {
        // setPage('/explore')
    })
    return (
        <div className="explore">
            <StatusBar />
            <div className="expCover">
                <div className="explore-bar">
                    <h2>Explore</h2>
                    <div className="dummyBar" onClick={()=> toggleSearchView()}>
                        <IonIcon icon={searchOutline} style={pageCtx.iconStyle}></IonIcon>
                    </div>
                </div>
                <Link to="/jobs" className="gigs-card">
                    <div className="gigs-cover">
                        <h3 className="gigs-header">Jobs and Offers</h3>
                        <p className="gigs-txt">Do you have a job or task you want done</p>
                        {/*<Link to="/explore/jobs" className="gigs-links">View</Link>*/}
                    </div>
                </Link>
                <Link to="/institutions" className="gigs-card">
                    <div className="gigs-cover">
                        <h3 className="gigs-header">Academies and Institutions</h3>
                        <p className="gigs-txt">Explore schools and institutions across the country</p>
                        {/*<Link to="/explore/institutions" className="gigs-links">View</Link>*/}
                    </div>
                </Link>
                <div className="commDiv">
                    <h3 className="headTxt">Communities & Spaces</h3>
                    <div className="commGrp">
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={ringBanner} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemContent">
                                <div className="commItemTxt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={ringBanner} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemContent">
                                <div className="commItemTxt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={ringBanner} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemContent">
                                <div className="commItemTxt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={ringBanner} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemContent">
                                <div className="commItemTxt">
                                    <h3>Web Developers</h3>
                                    <p>1.7k Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/explore/communities" className="gigs-links">View more</Link>
                </div>
                { searchView ? <div className="searchPage">
                    <div className="searchBar">
                        <div className="closeBar" onClick={()=> toggleSearchView()}>
                            <IonIcon icon={arrowBackOutline} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                        <div className="inputArea">
                            <input placeholder="Search" name="searchBox" className="searchBox" type="search" />
                            <div className="searchBtn">
                                <IonIcon icon={search} style={pageCtx.iconStyle} />
                            </div>
                        </div>
                    </div>
                    <h3 className="headTxt">Quick Results</h3>
                    <div className="quickResults">
                        <div className="quickResultItems">Holla</div>
                    </div>
                    <h3 className="headTxt">Recent Searches</h3>
                    <div className="searchHistory">
                        <div className="historyItem">Hello world</div>
                        <div className="historyItem">Ohayo</div>
                        <div className="historyItem">Holla</div>
                    </div>
                </div> : '' }
            </div>
            <BottomNav />
        </div>
    )
}

export default Explore