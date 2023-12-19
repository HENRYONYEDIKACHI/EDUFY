import { Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline } from 'ionicons/icons'

import '../assets/css/departments.css'

export default function Departments() {
    const {pageCtx, authCtx} = useOutletContext()
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="fad-depts-hold">
            <div className="fad-head">
                <h3 className="fad-header">Departments</h3>
                <input type="search" name="fad-src" placeholder="Find a department" className="fad-search" />
            </div>
            <div className="fad-depts">
                <div className="fa-list">
                    <Link to="/academics/faculty/engineering/dpt/chm" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">Chemical Engineering</h1>
                    </Link>
                    <Link to="/academics/faculty/engineering/dpt/eee" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">Electrical and Electronics</h1>
                    </Link>
                    <Link to="/academics/faculty/engineering/dpt/mce" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">Mechatronics Engineering</h1>
                    </Link>
                    <Link to="/academics/faculty/engineering/dpt/mee" className="fa-item">
                        <div className="fa-img-cover">
                            <img src={ring} className="fa-item-img" />
                        </div>
                        <h1 className="fa-item-txt">Mechanical Engineering</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}