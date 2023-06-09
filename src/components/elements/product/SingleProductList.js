import React, { useEffect, useState } from 'react'
import item from '../../../assets/imgs/items/1.jpg'
import { toast } from 'react-toastify'
import { useAddToCartMutation, useDeleteProductMutation } from '../../../app/services/product'
import { handelClick } from '../../../utils/ConfirmDelete'

function SingleProductList({ data, open, setOpen, userRole }) {

    const [deleteContent, { isLoading }] = useDeleteProductMutation()
    const [AddToCart, { isLoading: addTOcartLoading, isSuccess: addTOcartSuccess }] = useAddToCartMutation()

    useEffect(() => {

        if (addTOcartSuccess) {
            toast.success('Product Cart To Add ')
        }
    }, [addTOcartSuccess])
    /* product card add  */
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        setQuantity(value);
    };
    /*  add to card  */
    const addToCarts = async (id, quantity, saleing_Price, name) => {
        const item = { product_id: id, quantity: quantity, saleing_Price: saleing_Price * quantity, product_name: name }
        await AddToCart(item)
    }
    /* open product show  */

    return (
        <tr >
            <td>{data?.product_name?.toUpperCase()}</td>
            <td>{data?.upc}</td>
            {userRole == 'admin' && <td> {`$${data?.cost}`}</td>}

            <td>{data?.quantity}</td>
            <td>{`$${data?.saleing_Price}`}</td>
            <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <h3>+</h3>
                <input style={{ width: '50px' }} type='number'
                    min="1"
                    defaultValue={quantity}
                    onChange={handleQuantityChange}
                />
                <h3>-</h3>
                <a
                    style={{ cursor: addTOcartLoading ? 'no-drop' : 'pointer' }}
                    onClick={() => addToCarts(data?._id, quantity, data?.saleing_Price, data?.product_name)}
                    hidden={quantity > data?.quantity ? true : quantity <= 0 ? true : false}
                    className="btn btn-sm font-sm rounded btn-brand">Add to Cart </a>
            </td>
            {
                userRole == 'admin' && <td className="text-end">
                    <div className="text-end">
                        <a onClick={() => setOpen({ type: !open.type, data: data, extra: false })} className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                        <a style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} onClick={() => handelClick(data?._id, deleteContent)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                    </div>
                </td>
            }

        </tr>

    )
}

export default SingleProductList