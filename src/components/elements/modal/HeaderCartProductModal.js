import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAddToCartMutation } from '../../../app/services/product'

function HeaderCartProductModal({ productData }) {
    const [AddToCart] = useAddToCartMutation()
    const addToCarts = async (id, price, name) => {
        const item = { product_id: id, quantity: 1, price: price, product_name: name }
         await AddToCart(item)
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
                        <a onClick={() => addToCarts(data?._id, data?.price, data?.product_name)} className="btn btn-xs"><i className="material-icons md-add"></i> Add</a>
                    </div>
                )
            }

        </div>
    )
}

export default HeaderCartProductModal