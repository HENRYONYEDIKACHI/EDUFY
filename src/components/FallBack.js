import '../assets/css/fallback.css'

import { IonIcon } from '@ionic/react'
import { ellipsisVertical, heart, heartOutline, chatboxOutline, repeatOutline, shareSocialOutline } from 'ionicons/icons'

export default function FallBack() {
    return (
        <div className="f-card" >
            <div className="f-card-header">
                <div className="f-card-title">
                    <div className="f-card-vatar-cover skeleton"></div>
                    <div className="f-card-holder">
                        <h4 className="f-card-user skeleton"></h4>
                        <p className="f-card-username skeleton"></p>
                    </div>
                </div>
            </div>
            <div className="f-card-content">
                <div className="f-txt-content">
                    <p className="f-txt-div skeleton"></p>
                    <p className="f-txt-div skeleton"></p>
                    <p className="f-txt-div skeleton"></p>
                </div>
                <div className="f-card-imgs skeleton"></div>
            </div>
        </div>
    )
}