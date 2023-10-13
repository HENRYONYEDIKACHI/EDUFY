import { IonIcon } from '@ionic/react'
import { receiptOutline } from 'ionicons/icons'

import '../assets/css/req404.css'
import StatusBar from './StatusBar'

export default function Req404() {
    return(
        <div className="page404">
        <StatusBar auths={true} />
            <IonIcon icon={receiptOutline} size="large" color="teal" ></IonIcon>
            <h3>Page Not Found</h3>
        </div>
    )
}