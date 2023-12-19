import { Link, useOutletContext, Outlet, useLoaderData } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline } from 'ionicons/icons'
import '../assets/css/faculties.css'

export const facLoader = async () => {
    const facData = [
        {
            faculty: 'Engineering',
            code: 'fen'
        },
        {
            faculty: 'Science',
            code: 'fos'
        },
        {
            faculty: 'Management Science',
            code: 'fms'
        },
    ]
    return facData
}
export default function Faculties({ newJobState, toggleFaculties }) {
    const {pageCtx, authCtx} = useOutletContext()
    const { facData } = useLoaderData()
    console.log(facData)
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="faculties">
            <div className="back-fill" onClick={()=>toggleFaculties()}></div>
            <div className="fa-hold">
                <h1 className="fa-head">Faculties</h1>
                <div className="fa-bar">
                    <input type="search" name="fa-search" className="fa-search" placeholder="Search faculty" />
                    {/*<div className="fa-btn">
                        <IonIcon icon={searchOutline} size="large" color="teal"></IonIcon>
                    </div>*/}
                </div>
                <div className="fa-list">
                    {facData.map((fac)=><Link to="/academics/faculty/engineering" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">{fac.faculty}</h1>
                    </Link>)}
                    
                    <Link to="/academics/faculty/engineering" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">Faculty of Engineering</h1>
                    </Link>
                    <Link to="/academics/faculty/engineering" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">Faculty of Engineering</h1>
                    </Link>
                    <Link to="/academics/faculty/engineering" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">Faculty of Engineering</h1>
                    </Link>
                </div>
                <Outlet context={{pageCtx, authCtx}} />
            </div>
        </div>
    )
}