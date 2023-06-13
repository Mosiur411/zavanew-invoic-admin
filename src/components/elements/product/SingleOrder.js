import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SingleOrder({ data }) {
    const navigate = useNavigate();
    return (
        <tr>
            <td onClick={() => navigate(data?._id)}>{data?._id}</td>
            <td>{data?.coustomerId?.comphonyName}</td>
            <td>{data?.totalPrice.toFixed(2)}</td>
            <td><span className="badge rounded-pill alert-warning">{data?.payment}</span></td>
            <td>{data?.totalQuantity} </td>
            <td className="text-end">
                <a onClick={() => navigate(`/order/update/${data?._id}`)} className="btn btn-md rounded font-sm m-2">Edit</a>
                <a onClick={() => navigate(data?._id)} className="btn btn-md rounded font-sm">Detail</a>

            </td>
        </tr>
    )
}

export default SingleOrder