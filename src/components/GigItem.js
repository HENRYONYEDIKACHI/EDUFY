import '../assets/css/gigitem.css'

export default function GigItem () {
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="gig-item">
            <img className="gig-img" src={ring} />
            <div className="gig-content">Typing</div>
        </div>
    )
}