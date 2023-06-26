import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useAddRefundMutation } from '../../../app/services/sales';

function Refund({ refund, setRefund, id }) {
    const { type, data } = refund;
    const [quantity, setQuantity] = useState(1)

    /* porduct items refund  */
    const [RefundData, { isSuccess: refundAddSuccess, isLoading: refundAddLoading }] = useAddRefundMutation()
    const addRefundQuntity = async (quantity, data, id) => {
        const value = {
            quantity: Number(quantity),
            cost: data?.product_id?.cost,
            product_id: data?.product_id?._id,
            saleing_Price: data?.product_id?.saleing_Price,
            sales_id: id,
            purchases_id: data?.purchases_id,
            item_id: data?._id,
        }
        await RefundData(value);
        setRefund({ type: false })
        
    }
    useEffect(() => {
        if (refundAddSuccess) {
            setRefund({ type: false })
            toast.success("Refun Add!")
        }
    }, [refundAddSuccess, refundAddLoading])

    return (
        <>
            {
                type && <div className='modal_product'>
                    <section className="content-main">
                        <div className="row">
                            <div className="col-12">
                                <div className="content-header">
                                    <h2 className="content-title">Product Refund</h2>
                                    <button onClick={() => setRefund({ type: false })}>X</button>
                                </div>
                            </div>
                            <div>
                                <div className="col-lg-12">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="row gx-2">
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="product_quantity" className="form-label">Quantity</label>
                                                    <input type="number" placeholder="Product_quantity" className="form-control" id="product_quantity"
                                                        defaultValue={data?.quantity}
                                                        onChange={(e) => setQuantity(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => addRefundQuntity(quantity, data, id)}
                                style={{ cursor: data?.quantity < quantity ? 'no-drop' : refundAddLoading ? 'no-drop' : 'pointer', width: 'fit-content' }}
                                className="btn btn-md rounded font-sm hover-up">Submit</button>
                        </div>
                    </section>
                </div>
            }

        </>
    )
}

export default Refund