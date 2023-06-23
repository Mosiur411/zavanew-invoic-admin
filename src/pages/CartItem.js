import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDeleteToCartMutation, useUpdateToCartMutation } from '../app/services/product';
import { handelClick } from '../utils/ConfirmDelete';
function CartItem({ cartItem }) {
    const [deleteContent] = useDeleteToCartMutation()
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

    useEffect(() => {
        if (updateIsSuccess) {
            toast.success('Product Update')
        }
        if (isErrorUpdate) {
            toast.error('sorry  not add!')
        }
   
    }, [updateIsSuccess])

    console.log(quantity, product_id?.quantity)


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
                    hidden={quantity > product_id?.quantity + cartItem?.quantity ? true : quantity <= 0 ? true : false}
                > Add</a>
                <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => handelClick(_id, deleteContent)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i>  </a>
            </td>
        </tr>
    )
}

export default CartItem