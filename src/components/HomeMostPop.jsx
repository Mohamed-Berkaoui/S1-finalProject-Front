import ProductBox from "./ProductBox"
import '../styles/homeselection.css'

function HomeMostPop() {

  return (
    <div className="home-selection">
        <h2>MOST POPULAR PRODUCTS</h2>
        <div>
            {[0,0,0,0].map((element,i)=><ProductBox key={i} product={element}/>)}
        </div>
        
    </div>
  )
}

export default HomeMostPop