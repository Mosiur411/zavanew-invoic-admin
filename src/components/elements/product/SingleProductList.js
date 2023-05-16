import React, { useEffect } from 'react'
import item from '../../../assets/imgs/items/1.jpg'
import { toast } from 'react-toastify'
import { useDeleteProductMutation } from '../../../app/services/product'

function SingleProductList({ data }) {

    const [deleteProduct, { isSuccess, isLoading }] = useDeleteProductMutation()
    const ProductDelete = async (id) => {
        await deleteProduct(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Product Delete !')
        }
    }, [isSuccess])







    return (
        <article className="itemlist">
            <div className="row align-items-center">
                <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                    <a className="itemside" href="#">
                        <div className="left">
                            <img src={item} className="img-sm img-thumbnail" alt="Item" />
                        </div>
                        <div className="info">
                            <h6 className="mb-0">{data?.name}</h6>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-sm-2 col-4 col-price"><span>${data?.price[0]?.price}</span></div>
                <div className="col-lg-2 col-sm-2 col-4 col-status">
                    <span className="badge rounded-pill alert-success">Active</span>
                </div>
                <div className="col-lg-1 col-sm-2 col-4 col-date">
                    <span>02.11.2021</span>
                </div>
                <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                    <a className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                    <a style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} onClick={() => ProductDelete(data?._id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                </div>
            </div>
        </article>
    )
}

export default SingleProductList