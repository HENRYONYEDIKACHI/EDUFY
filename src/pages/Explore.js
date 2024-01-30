import { useState, useEffect, useContext } from 'react'
import { Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { search, searchOutline, options, optionsOutline, closeOutline, arrowBackOutline, cog, cogOutline, compass, colorPalette, colorPaletteOutline, briefcaseOutline } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Search from '../pages/Search'

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
    const ring = require("../assets/media/pix/ring_banner.png");
    const channelFill = require("../assets/media/icons/channel-fill.svg")
    const channelOutline = require("../assets/media/icons/channel-outline.svg")
    console.log(ring)
    return (
        <div className="base">
            <StatusBar title="Explore" />
            <div className="base-cover">
                <div className={pageCtx.theme=='light' ? "exp-head exp-head-light" : "exp-head exp-head-dark"}>
                    <div className="exp-icon-cover">
                        <IonIcon className={pageCtx.theme=='light' ? "page-icon page-icon-light" : "page-icon page-icon-dark"} icon={compass}></IonIcon>
                    </div>
                    <span className={pageCtx.theme=='light' ? "exp-head-txt exp-head-txt-light" : "exp-head-txt exp-head-txt-dark"}>Explore the vast world of Edufy</span>
                </div>
                {/*<div className="explore-bar">
                    <input type="search" name="explore-box" className="explore-box" placeholder="Search" />
                </div>*/}
                <Link to="s" className={pageCtx.theme=='light' ? "exp-links exp-links-light" : "exp-links exp-links-dark"}>
                    <div className="exp-link-img-cover">
                        <IonIcon icon={searchOutline} size="large" className="exp-link-img"></IonIcon>
                    </div>
                    <div className="exp-link-txt-cover">
                        <span className="exp-link-txt-hd">Search</span>
                        <span className="exp-link-txt">Books, Tutorials, Freelancers, Entertainment</span>
                    </div>
                </Link>
                <Link to="/market" className={pageCtx.theme=='light' ? "exp-links exp-links-light" : "exp-links exp-links-dark"}>
                    <div className="exp-link-img-cover">
                        <IonIcon icon={colorPaletteOutline} size="large" className="exp-link-img"></IonIcon>
                    </div>
                    <div className="exp-link-txt-cover">
                        <span className="exp-link-txt-hd">Market</span>
                        <span className="exp-link-txt">Products, Services, Auctions, etc.</span>
                    </div>
                </Link>
                <div className={pageCtx.theme=='light' ? "exp-links exp-links-light" : "exp-links exp-links-dark"}>
                    <div className="exp-link-img-cover">
                        <IonIcon icon={optionsOutline} size="large" className="exp-link-img"></IonIcon>
                    </div>
                    <Link to="channels" className="exp-link-txt-cover">
                        <span className="exp-link-txt-hd">Channels</span>
                        <span className="exp-link-txt">Artists, Tutors, Freelancers, Jobs, etc.</span>
                    </Link>
                </div>
                <div className={pageCtx.theme=='light' ? "exp-links exp-links-light" : "exp-links exp-links-dark"}>
                    <div className="exp-link-img-cover">
                        <IonIcon icon={briefcaseOutline} size="large" className="exp-link-img"></IonIcon>
                    </div>
                    <Link to="jobs" className="exp-link-txt-cover">
                        <span className="exp-link-txt-hd">Jobs</span>
                        <span className="exp-link-txt">Vacancies, Freelancing</span>
                    </Link>
                </div>
                <div className={pageCtx.theme=='light' ? "exp-top exp-top-light" : "exp-top exp-top-dark"}>
                    <div className={pageCtx.theme=='light' ? "exp-top-head exp-top-head-light" : "exp-top-head exp-top-head-dark"}>
                        Trending
                    </div>
                </div>
            </div>
            <BottomNav />
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    )
}

export default Explore