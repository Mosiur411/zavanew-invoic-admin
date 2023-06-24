import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAddToCartMutation } from '../../../app/services/product'
import { useAddItemsOrderMutation } from '../../../app/services/order'

function HeaderCartProductModal({ productData, action, order_id }) {
    const [AddToCart] = useAddToCartMutation()
    const [AddToOrderItem] = useAddItemsOrderMutation()
    const addToCarts = async (id, price, name) => {
        const item = { product_id: id, quantity: 1, saleing_Price: price, product_name: name }
        if (action) {
            const data = { item, order_id: order_id }
            await AddToOrderItem(data)
        } else {
            await AddToCart(item)
        }
    }
    return (
        <div>
            {
                productData?.map((data) =>
                    <div key={data?._id} className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                            <div>
                                <h6>{data?.product_name}</h6>
                                <p className="text-muted font-xs">{data?.quantity}</p>
                            </div>
                        </div>
                        <a onClick={() => addToCarts(data?._id, data?.saleing_Price, data?.product_name)} className="btn btn-xs"><i className="material-icons md-add"></i> Add</a>
                    </div>
                )
            }

        </div>
    )
}

export default HeaderCartProductModal