import StoreFront from './StoreFront'
import '../assets/css/mkfactory.css'

export default function MarketFactory({stores, mkFilter}) {
    console.log(stores)
    return (
        <div className="mt-factory">
            {stores.map((st)=><StoreFront key={st.id} store={st} />)}
        </div>
    )
}