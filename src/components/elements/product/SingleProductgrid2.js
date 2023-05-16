import React from 'react'
import item from '../../../assets/imgs/items/1.jpg'

function SingleProductgrid2() {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="card card-product-grid">
        <a href="#" className="img-wrap"> <img src={item} alt="Product" /> </a>
        <div className="info-wrap">
          <div className="dropdown float-end">
            <a href="#" className="btn btn-sm btn-brand rounded"> <i className="material-icons md-edit mr-5"></i>Edit </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">Edit info</a>
              <a className="dropdown-item text-danger" href="#">Delete</a>
            </div>
          </div>
          <a href="#" className="title">Haagen-Dazs Caramel Cone Ice</a>
          <div className="price mt-1">$179.00</div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductgrid2