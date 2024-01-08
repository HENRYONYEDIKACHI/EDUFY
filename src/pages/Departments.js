import { Link, useOutletContext, Outlet, useLoaderData } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline } from 'ionicons/icons'

import '../assets/css/departments.css'

export const dptsLoader = async ({params}) => {
    const dpts = [
        {
            id: 1,
            dpt: 'Mechanical',
            code: 'MEE'
        },{
            id: 2,
            dpt: 'Mechatronics',
            code: 'MCE'
        },{
            id: 3,
            dpt: 'Electrical and Elctronics',
            code: 'EEE'
        },{
            id: 4,
            dpt: 'Civil',
            code: 'CVE'
        }
    ]
    return {dpts}
}

export default function Departments() {
    const {pageCtx, authCtx} = useOutletContext()
    const ring = require('../assets/media/pix/ring_banner.png')
    
    const { dpts } = useLoaderData()
    return (
        <div className="fad-depts-hold">
            <div className="fad-head">
                {/*<h3 className="fad-header">Departments</h3>*/}
                <input type="search" name="fad-src" placeholder="Find a department" className="fad-search" />
            </div>
            <div className="fad-depts">
                <div className="fa-list">
                    {dpts.map((dpt)=><Link key={dpt.id} to={`/academics/faculty/engineering/dpt/${dpt.code.toLowerCase()}`} className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">{dpt.dpt}</h1>
                    </Link>)}
                </div>
            </div>
        </div>
    )
}