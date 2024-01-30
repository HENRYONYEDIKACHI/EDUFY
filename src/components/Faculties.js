import { Link, useOutletContext, Outlet, useLoaderData } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline } from 'ionicons/icons'

import BackFill from './BackFill'

import '../assets/css/faculties.css'

export const facLoader = async () => {
    const facData = [
        {
            id: 1,
            faculty: 'Engineering',
            code: 'fen'
        },{
            id: 2,
            faculty: 'Science',
            code: 'fos'
        },{
            id: 3,
            faculty: 'Management Science',
            code: 'fms'
        },
    ]
    return facData
}
export default function Faculties() {
    const { pageCtx, authCtx } = useOutletContext()
    const facData = useLoaderData()
    console.log(facData)
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="faculties">
            <BackFill action={pageCtx.toggleFaculties} />
            <div className={pageCtx.theme=='light' ? "fa-hold fa-hold-light" : "fa-hold fa-hold-dark"}>
                <h3 className="fa-head">Faculties</h3>
                <div className="fa-bar">
                    <input type="search" name="fa-search" className="fa-search" placeholder="Search faculty" />
                    {/*<div className="fa-btn">
                        <IonIcon icon={searchOutline} size="large" color="teal"></IonIcon>
                    </div>*/}
                </div>
                <div className="fa-list">
                    {facData.map((fac)=><Link key={fac.id} to={`/academics/faculty/${fac.faculty}`} className={pageCtx.theme=='light' ? "fa-item fa-item-light" : "fa-item fa-item-dark"}>
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h4 className="fa-item-txt">{fac.faculty}</h4>
                    </Link>)}
                </div>
                <Outlet context={{pageCtx, authCtx}} />
            </div>
        </div>
    )
}