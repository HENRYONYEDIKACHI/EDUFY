import '../assets/css/userchannel.css'
import { useOutletContext } from 'react-router-dom'

import ChanItem from '../components/ChanItem'

export default function UserChannel() {
    const {pageCtx, authCtx} = useOutletContext()
    return (
        <div className="us-ch-hold">
            <ChanItem theme={pageCtx.theme} />
            <ChanItem theme={pageCtx.theme} />
            <ChanItem theme={pageCtx.theme} />
        </div>
    )
}