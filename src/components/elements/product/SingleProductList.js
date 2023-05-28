import React, { useEffect, useState } from 'react'
import item from '../../../assets/imgs/items/1.jpg'
import { toast } from 'react-toastify'
import { useDeleteProductMutation } from '../../../app/services/product'
import { useAddToCartMutation } from '../../../app/services/addToCart'

function SingleProductList({ data, open, setOpen, userRole }) {

    const [deleteProduct, { isSuccess, isLoading }] = useDeleteProductMutation()
    const [AddToCart, { isLoading: addTOcartLoading, isSuccess: addTOcartSuccess }] = useAddToCartMutation()

    const ProductDelete = async (id) => {
        await deleteProduct(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Product Delete !')
        }
        if (addTOcartSuccess) {
            toast.success('Product Cart To Add ')
        }
    }, [isSuccess, addTOcartSuccess])
    /* product card add  */
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        setQuantity(value);
    };
    /*  add to card  */
    const addToCarts = async (id, quantity, price, name) => {
        const item = { product_id: id, quantity: quantity, price: price * quantity, product_name: name }
        await AddToCart(item)
    }
    /* open product show  */


    return (
        <tr >
            <td>{data?.product_name?.toUpperCase()}</td>
            <td>{data?.upc}</td>
            {userRole == 'admin' && <td>{data?.cost}</td>}

            <td>{data?.quantity}</td>
            <td>{`$${data?.price}`}</td>
            <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <h3>+</h3>
                <input style={{ width: '50px' }} type='number'
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                />
                <h3>-</h3>
                <a
                    style={{ cursor: addTOcartLoading ? 'no-drop' : 'pointer' }}
                    onClick={() => addToCarts(data?._id, quantity, data?.price, data?.product_name)}
                    hidden={quantity > data?.quantity ? true : quantity <= 0 ? true : false}
                    className="btn btn-sm font-sm rounded btn-brand">Add to Cart </a>
            </td>
            {
                userRole == 'admin' && <td className="text-end">
                    <div className="text-end">
                        <a onClick={() => setOpen({ type: !open.type, data: data })} className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                        <a style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} onClick={() => ProductDelete(data?._id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                    </div>
                </td>
            }

        </tr>

    )
}

export default SingleProductList