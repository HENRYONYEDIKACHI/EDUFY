import { Link } from 'react-router-dom'

import '../assets/css/storefront.css'

export default function StoreFront({ store }) {
    const ring = require("../assets/media/pix/ring_banner.png")
    return (
        <Link to={`pd/${store.id}`} className="st-front">
            <div className="st-cover">
                <img src={ring} className="st-img" />
            </div>
            <div className="st-content">
                <span className="st-title">NoteBook</span>
                <div className="st-main">
                    <span className="st-price">$5</span>
                    <span className="st-rating">5 Likes</span>
                </div>
            </div>
        </Link>
    )
}