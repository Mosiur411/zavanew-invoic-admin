import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDeleteToCartMutation, useUpdateToCartMutation } from '../app/services/product';

function CartItem({ cartItem }) {
    const [CartDelete, { isLoading: deleteIsLoading, isSuccess: deleteIsSuccess, isErrorDelete }] = useDeleteToCartMutation()
    const [CartUpdate, { isLoading: updateIsLoading, isSuccess: updateIsSuccess, isErrorUpdate }] = useUpdateToCartMutation()
    const { _id, product_id, saleing_Price } = cartItem;
    const [quantity, setQuantity] = useState(cartItem?.quantity);
    const [productPrices, setProductPrices] = useState(product_id?.saleing_Price);
    const setCartQantity = (value) => {
        setQuantity(value);
    };
    const setcartprices = (value) => {
        setProductPrices(value);
    };
    /* Update Product  */
    const CartUpdates = async (quantity, _id, productPrices) => {
        const data = { quantity, _id, productPrices }
        await CartUpdate(data)
    }
    /* card product delete  */
    const CartDeletes = async (id) => {
        await CartDelete(id)
    }

    useEffect(() => {
        if (updateIsSuccess) {
            toast.success('Product Update')
        }
        if (isErrorDelete || isErrorUpdate) {
            toast.error('sorry  not add!')
        }
        if (deleteIsSuccess) {
            toast.success('Card Product Update ')
        }
    }, [deleteIsSuccess, updateIsSuccess])

    return (
        <tr>
            <td>{product_id?.product_name.toUpperCase()}</td>
            <td>
                <input style={{ width: '50px' }} type='number'
                    onChange={(e) => setcartprices(e.target.value)}
                    setcartprices={product_id?.saleing_Price?.toFixed(2)}
                    selected
                    defaultValue={saleing_Price?.toFixed(2) / cartItem?.quantity}
                />
            </td>
            <td>
                <input style={{ width: '50px' }} type='number'
                    onChange={(e) => setCartQantity(e.target.value)}
                    defaultValue={cartItem?.quantity}
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
                    style={{ cursor: updateIsLoading ? 'no-drop' : 'pointer' }}
                    onClick={() => CartUpdates(quantity, _id, productPrices)}
                    hidden={quantity > product_id?.quantity ? true : quantity <= 0 ? true : false}
                > Add</a>
                <a
                    style={{ cursor: deleteIsLoading ? 'no-drop' : 'pointer' }}
                    onClick={() => CartDeletes(_id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i>  </a>
            </td>
        </tr>
    )
}

export default CartItem