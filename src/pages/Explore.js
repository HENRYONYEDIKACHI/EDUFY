import { useState, useEffect, useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { search, searchOutline, optionsOutline, closeOutline, arrowBackOutline } from 'ionicons/icons'

import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

import '../assets/css/explore.css'

function Explore({ setPage, page }) {
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
    
    useEffect(() => {
        // setPage('/explore')
    })
    return (
        <div className="explore">
            <StatusBar />
            <div className="expCover">
                <div className="searchTab">
                    <input readOnly placeholder="Search" className="dummyBar" onClick={()=> toggleSearchView()} />
                    <div className="searchOptBar">
                        <IonIcon icon={optionsOutline} style={pageCtx.iconStyle}></IonIcon>
                    </div>
                </div>
                {/*&nbsp;*/}
                <div className="gigs-card">
                    <div className="gigs-cover">
                        <h3 className="gigs-header">Gigs and Offers</h3>
                        <p className="gigs-txt">Do you have a job or task you want done. Click to create an advert</p>
                    </div>
                </div>
                <div className="gigs-card">
                    <div className="gigs-cover">
                        <h3 className="gigs-header">Academics and Schoo;s</h3>
                        <p className="gigs-txt">Explore other schools beaides your's. Keep up with news and updates</p>
                    </div>
                </div>
                <h3 className="headTxt">Communities & Spaces</h3>
                <div className="commDiv">
                    <div className="commGrp">
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={bsks} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemTxt">
                                <h3>Web Developers</h3>
                                <p>1.7k Members</p>
                            </div>
                        </div>
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={bsks} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemTxt">
                                <h3>Web Developers</h3>
                                <p>1.7k Members</p>
                            </div>
                        </div>
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={bsks} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemTxt">
                                <h3>Web Developers</h3>
                                <p>1.7k Members</p>
                            </div>
                        </div>
                        <div className="commItem">
                            <div className="commItemCover">
                                <img src={bsks} alt="Cover Image" className="commItemImg" />
                            </div>
                            <div className="commItemTxt">
                                <h3>Web Developers</h3>
                                <p>1.7k Members</p>
                            </div>
                        </div>
                    </div>
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