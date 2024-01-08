import '../assets/css/chanitem.css'
import { Link } from 'react-router-dom'

export default function ChanItem ({ theme }) {
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className={theme=='light' ? "cha-item cha-item-light" : "cha-item cha-item-dark"}>
            <div className="cha-img-cover">
                <img className="cha-img" src={ring} />
            </div>
            <div className="cha-content">
                <div className="cha-col cha-col-1">
                    <span className="cha-title">
                        <Link to="channels/maprotech">Mapro Tech</Link>
                    </span>
                    <div className="cha-tags">
                        <span className={theme=='light' ? "cha-tag cha-tag-light" : "cha-tag cha-tag-dark"}>Tech</span>
                    </div>
                </div>
                <div className="cha-col cha-col-2">
                    <span className={theme=='light' ? "cha-sub cha-tag-light" : "cha-sub cha-tag-dark"}>Subscribe</span>
                    <span className={theme=='light' ? "cha-tag cha-tag-light" : "cha-tag cha-tag-dark"}>Sub: 338</span>
                </div>
            </div>
        </div>
    )
}