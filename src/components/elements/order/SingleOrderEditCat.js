import React from 'react'

function SingleOrderEditCat({ _id, cartItem, setShrinkage, setRefund }) {
    const { saleing_Price, quantity } = cartItem
    const { product_name } = cartItem?.product_id;
    console.log(product_name)



    return (
        <tr>
            <td>{product_name.toUpperCase()}</td>
            <td>
                <input style={{ width: '50px' }} type='number'
                    defaultValue={saleing_Price?.toFixed(2) / quantity}
                />
            </td>
            <td>
                <input defaultValue={cartItem?.quantity} style={{ width: '50px' }} type='number'
                />
            </td>
            <td >${saleing_Price?.toFixed(2)}</td>
            <td className="text-end"
                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                    , gap: '5px'
                }}
            >
                <a className="btn btn-sm font-sm rounded btn-brand"
                > Add</a>
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
                <a className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i>  </a>
            </td>
        </tr >
    )
}

export default SingleOrderEditCat