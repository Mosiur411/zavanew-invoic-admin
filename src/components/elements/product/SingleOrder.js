import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment';
import { handelClick } from '../../../utils/ConfirmDelete';
import { useDeleteOrderMutation } from '../../../app/services/order';
function SingleOrder({ data }) {
    const [deleteContent] = useDeleteOrderMutation()
    const navigate = useNavigate();
    const updatedDate = data?.updatedAt;
    const updatedMoment = moment(updatedDate);
    const formattedDate = updatedMoment.format("DD MMMM, YYYY");
    /* ============ hove effect ============  */
    const [action, setAction] = useState(false)
    return (
        <tr>
            <td onClick={() => navigate(`/order/all/${data?._id}`)}
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >{data?.orderId ? data?.orderId : data?._id}</td>
            <td>{formattedDate}</td>
            <td>{data?.coustomerId?.comphonyName}</td>
            <td>{data?.totalQuantity} </td>
            <td>{data?.totalPrice?.toFixed(2)}</td>
            <td><span style={{ color: data?.payment == 'due' ? 'red' : 'green', fontWeight: 'bold' }}>{data?.payment}</span></td>{/* badge rounded-pill alert-warning */}
            <td style={{ color: '#B72506', fontWeight: 'bold' }}>{data?.status} </td>
            <td>{data?.distractions} </td>
            <td className="text-end">
                <td className='dropdown nav-item' >
                    <a onClick={() => setAction(!action)}>:</a>
                    <div className={`dropdown-menu dropdown-menu-end ${action ? 'show' : ''} `} aria-labelledby="dropdownAccount">
                        <a onClick={() => navigate(`/order/update/${data?._id}`)} className="dropdown-item" >Edit</a>
                        <a className="dropdown-item" >Approved</a>
                        <a className="dropdown-item" >Shipped</a>
                        <a className="dropdown-item" >Delivered</a>
                        <a className="dropdown-item" onClick={() => handelClick(data?._id, deleteContent)}>Delete</a>
                    </div>
                </td>
            </td>
        </tr>
    )
}

export default SingleOrder;

