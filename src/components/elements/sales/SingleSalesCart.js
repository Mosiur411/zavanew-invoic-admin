import React, { useState } from 'react'
import { useDeleteItemsOrderMutation} from '../../../app/services/order';
import { handelClick } from '../../../utils/ConfirmDelete';

function SingleSalesCart({ _id, cartItem, setShrinkage, setRefund }) {
    const { saleing_Price, quantity } = cartItem
    const [addQuantity, setAddQuantity] = useState(cartItem?.quantity)
    const [addPrices, setAddPrices] = useState(saleing_Price?.toFixed(2) / quantity)
    const [deleteContent] = useDeleteItemsOrderMutation()
    const { product_name } = cartItem?.product_id;
    const id = { order_id: _id, item_id: cartItem?._id}

    return (
        <tr>
            <td>{product_name.toUpperCase()}</td>
            <td>
                <input style={{ width: '50px' }} type='number'
                    onChange={(e) => setAddPrices(e.target.value)}
                    defaultValue={saleing_Price?.toFixed(2) / quantity}
                />
            </td>
            <td>
                <input onChange={(e) => setAddQuantity(e.target.value)} defaultValue={cartItem?.quantity} style={{ width: '50px' }} type='number'
                />
            </td>
            <td >${saleing_Price?.toFixed(2)}</td>
            <td className="text-end"
                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                    , gap: '5px'
                }}
            >
                <a onClick={() => setRefund({
                    type: true,
                    data: { ...cartItem, id: _id }
                })} className="btn btn-sm font-sm rounded btn-brand"
                > Refund </a>
                <a className="btn btn-sm font-sm rounded btn-brand"
                    onClick={() => setShrinkage({
                        type: true,
                        data: { ...cartItem, id: _id }
                    })}
                > Shrinkage</a>
                <a className="btn btn-sm font-sm btn-light rounded"
                    onClick={() => handelClick(id, deleteContent)}
                > <i className="material-icons md-delete_forever"></i>  </a>
            </td>
        </tr >
    )
}

export default SingleSalesCart