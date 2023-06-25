import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment';
import { handelClick } from '../../../utils/ConfirmDelete';
import { useDeleteOrderMutation, useRemoveOrderAddSalesMutation } from '../../../app/services/order';
import { toast } from 'react-toastify';
function SingleOrder({ data }) {
    const [addSalles,{isSuccess,isLoading}] = useRemoveOrderAddSalesMutation()
    const [deleteContent] = useDeleteOrderMutation()
    const navigate = useNavigate();
    const updatedDate = data?.updatedAt;
    const updatedMoment = moment(updatedDate);
    const formattedDate = updatedMoment.format("DD MMMM, YYYY");
    /* ============ hove effect ============  */
    const [action, setAction] = useState(false)

    useEffect(() => {
        if(isSuccess){
            toast.success('success')
        }
    }, [isSuccess])
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
                    <div  className={`dropdown-menu dropdown-menu-end ${action ? 'show' : ''} `} aria-labelledby="dropdownAccount">
                        <a onClick={() => navigate(`/order/update/${data?._id}`)} className="dropdown-item" >Edit</a>
                        <a style={{ cursor: isLoading ? 'no-drop' : 'pointer'}} className="dropdown-item" onClick={() => addSalles({ status: 'approved', order_id: data?._id })}>Approved</a>
                        <a style={{ cursor: isLoading ? 'no-drop' : 'pointer'}} className="dropdown-item" onClick={() => addSalles({ status: 'shipped', order_id: data?._id })}>Shipped</a>
                        <a style={{ cursor: isLoading ? 'no-drop' : 'pointer'}} className="dropdown-item" onClick={() => addSalles({ status: 'delivered', order_id: data?._id })}>Delivered</a>
                        <a className="dropdown-item" onClick={() => handelClick(data?._id, deleteContent)}>Delete</a>
                    </div>
                </td>
            </td>
        </tr>
    )
}

export default SingleOrder;

