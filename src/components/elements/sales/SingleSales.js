import moment from 'moment';
import React from 'react'
import { useState } from 'react';
import { useSalesSatatusMutation } from '../../../app/services/sales';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SingleSales({ data }) {
    const navigate = useNavigate();
    const updatedDate = data?.updatedAt;
    const updatedMoment = moment(updatedDate);
    const formattedDate = updatedMoment.format("DD MMMM, YYYY");
    const [action, setAction] = useState(false)
    /* sales fetch action  */
    const [SallesSatatu, { isSuccess }] = useSalesSatatusMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success("Successfully")
        }
    }, [isSuccess])
    return (
        <tr>
            <td onClick={() => navigate(`/sale/all/${data?._id}`)}
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >{data?.orderId ? data?.orderId : data?._id}</td>
            <td>{formattedDate}</td>
            <td>{data?.coustomerId?.comphonyName}</td>
            <td>{data?.totalQuantity} </td>
            <td>{data?.totalPrice?.toFixed(2)}</td>
            <td><span style={{ color: data?.payment == 'due' ? 'red' : 'green', fontWeight: 'bold' }}>{data?.payment}</span></td>
            <td style={{ color: '#B72506', fontWeight: 'bold' }}>{data?.status} </td>
            <td>{data?.distractions} </td>
            <td className="text-end">
                <td className='dropdown nav-item' >
                    <a onClick={() => setAction(!action)}>:</a>
                    <div className={`dropdown-menu dropdown-menu-end ${action ? 'show' : ''} `} aria-labelledby="dropdownAccount">
                        <a onClick={() => navigate(`/sale/update/${data?._id}`)} className="dropdown-item" >Edit</a>
                        <a className="dropdown-item" onClick={() => SallesSatatu({ status: 'approved', id: data?._id })}>Approved</a>
                        <a className="dropdown-item" onClick={() => SallesSatatu({ status: 'shipped', id: data?._id })}>Shipped</a>
                        <a className="dropdown-item" onClick={() => SallesSatatu({ status: 'delivered', id: data?._id })}>Delivered</a>
                    </div>
                </td>
            </td>
        </tr>
    )
}

export default SingleSales