import { IonIcon } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'
import '../assets/css/faculties.css'

export default function JobPost({ newJobState, toggleJobPost }) {
    const toggleExpiry = async (event) => {
        const dateElt = document.createElement('input')
        dateElt.setAttribute('class', 'job-form-input')
        dateElt.id = 'job-form-expiry'
        event.target.replaceWith(dateElt)
        dateElt.click()
        dateElt.addEventListener('change', (e)=>{
            console.log(e.target.value)
            alert(e.target.value)
        })
    }
    return (
        <div className="job-post">
            <div className="back-fill" onClick={()=>toggleJobPost()}></div>
            <div className="job-hold">
                <div className="block-top">
                    <h1 className="block-top-h1">Post Job</h1>
                    <div className="block-top-btn">Post</div>
                </div>
                <div className="form-wrap">
                    <div className="job-form-block">
                        <input type="text" id="job-form-title" className="job-form-input" placeholder="Job Title" />
                    </div>
                    <div className="form-grp">
                        <div className="job-form-block form-grp-block">
                            <input type="number" id="job-form-budget" className="job-form-input" placeholder="Budget" />
                        </div>
                        <div className="job-form-block form-grp-block">
                            <input type="date" id="job-form-expiry" className="job-form-input" placeholder="Expiry"  />
                        </div>
                    </div>
                    <div className="job-form-block">
                        <input type="search" className="job-form-input" placeholder="Required skillset/knowledge" />
                        <div id="job-form-skill-array"></div>
                    </div>
                    <div className="job-form-block">
                        <textarea id="job-form-desc" className="job-form-input" placeholder="Job description in detail" ></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}