import { Link, useOutletContext, Outlet, useLoaderData } from 'react-router-dom'
import '../assets/css/book.css'
import BackFill from '../components/BackFill'


export default function Books() {
    const { pageCtx, authCtx } = useOutletContext()
    // const facData = useLoaderData()
    // console.log(facData)
    const ring = require('../assets/media/pix/ring_banner.png')
    return(
        <div className="books">
            <BackFill action={pageCtx.toggleFaculties} />
            <div className={pageCtx.theme=='light' ? "bks-hold bks-hold-light" : "bks-hold bks-hold-dark"}>
                <h3 className="bks-head">Books</h3>
                <div className="bks-bar">
                    <input type="search" name="bks-search" className="bks-search" placeholder="Search books" />
                    {/*<div className="fa-btn">
                        <IonIcon icon={searchOutline} size="large" color="teal"></IonIcon>
                    </div>*/}
                </div>
                {/*<div className="bks-list">
                    <Link className={pageCtx.theme=='light' ? "bk-item bk-item-light" : "bk-item bk-item-dark"}>
                        <div className="bk-img-cover">
                            <img src={ring} className="bk-item-img" />
                        </div>
                        <h4 className="bk-item-txt">Fluid Mechanics</h4>
                    </Link>
                </div>*/}
                <Outlet context={{pageCtx, authCtx}} />
            </div>
        </div>
    )
}