import React from 'react'

function SingleProductCaregorie() {
  return (
    <tr>
      <td className="text-center">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue="" />
        </div>
      </td>
      <td>21</td>
      <td><b>Cake & Milk</b></td>
      <td>Cake & Milk</td>
      <td>/cake</td>
      <td>1</td>
      <td className="text-end">
        <div className="dropdown">
          <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">View detail</a>
            <a className="dropdown-item" href="#">Edit info</a>
            <a className="dropdown-item text-danger" href="#">Delete</a>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default SingleProductCaregorie