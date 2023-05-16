import React from 'react'
import item from '../../../assets/imgs/items/1.jpg'

function SingleProductGrid() {
  return (
    <div className="col">
      <div className="card card-product-grid">
        <a href="#" className="img-wrap"> <img src={item} alt="Product" /> </a>
        <div className="info-wrap">
          <a href="#" className="title text-truncate">Haagen-Dazs Caramel Cone Ice</a>
          <div className="price mb-2">$179.00</div>
          <a href="#" className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
          <a href="#" className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
        </div>
      </div>
    </div>
  )
}

export default SingleProductGrid