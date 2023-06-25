import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAddShrinkageMutation } from '../../../app/services/sales';

function Shrinkage({ shrinkage, setShrinkage, id }) {
  const { type, data } = shrinkage;
  const [quantity, setQuantity] = useState(1)
  const [ShrinkageData, { isLoading: shrinkageAddLoading, isSuccess: shrinkagedAddSuccess }] = useAddShrinkageMutation()
  const addShrinkageQuntity = async (quantity, data, id) => {
    const value = {
      quantity: Number(quantity),
      cost: data?.product_id?.cost,
      product_id: data?.product_id?._id,
      saleing_Price: data?.product_id?.saleing_Price,
      sales_id: id,
      item_id: data?._id,
      purchases_id: data?.purchases_id,
    }
    await ShrinkageData(value);
  }
  useEffect(() => {
    if (shrinkagedAddSuccess) {
      shrinkage({ type: false })
      toast.success("Refun Add!")
    }
  }, [shrinkagedAddSuccess])

  return (
    <>
      {
        type && <div className='modal_product'>
          <section className="content-main">
            <div className="row">
              <div className="col-12">
                <div className="content-header">
                  <h2 className="content-title">Product Shrinkage</h2>
                  <button onClick={() => setShrinkage({ type: false })}>X</button>
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
                            min='1'
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
                onClick={() => addShrinkageQuntity(quantity, data, id)}
                style={{ cursor: data?.quantity < quantity ? 'no-drop' : shrinkageAddLoading ? 'no-drop' : 'pointer', width: 'fit-content' }}
                className="btn btn-md rounded font-sm hover-up">Submit</button>
            </div>
          </section>
        </div>
      }

    </>
  )
}

export default Shrinkage