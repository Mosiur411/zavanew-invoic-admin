import React, { useEffect, useMemo, useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { OrderSchema } from '../helpers/validation/OrderSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useGetCoustomerQuery } from '../app/services/coustomer';
import { number } from 'yup';
import CartItem from './CartItem';
import CoustomerItm from './CoustomerItm';
import { useAddOrderMutation, useGetToCartQuery } from '../app/services/product';
import { Navigate, useNavigate } from 'react-router-dom';
function Cart() {
    const [coustomerIdHandel, setCoustomerIdHandel] = useState(true)

    const navigate = useNavigate();
    const { data } = useGetToCartQuery()
    const [search, setSearchValue] = useState('')
    const [bank, setBank] = useState('')
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 0, pageSize: 10, });
    const pathname = `page=${pageIndex}&limit=${pageSize}&search=${search}`;
    const { data: coustomer } = useGetCoustomerQuery(pathname)
    const [PorductOder, { isLoading, isSuccess, isError }] = useAddOrderMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(OrderSchema) });

    /* coustomer id need  */
    const [coustomerId, setCoustomerId] = useState()

    /* data post  */
    const onSubmit = async (value) => {
        if (coustomerId) {
            const items = { ...value, totalPrice: data?.totalPrice, coustomerId: coustomerId }
            const result = await PorductOder(items)
            navigate(`/order/all/${result?.data._id}`);
        } else {
            toast.error('coustomer  cant not select')
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Order add  ')
        }
        if (isError) {
            toast.error('sorry  not add!')
        }
    }, [isError, isSuccess])
    const coustomerData = useMemo(() => (coustomer ? coustomer?.coustomer : []), [
        coustomer,
        search
    ]);
    const cartData = useMemo(() => (data?.items ? data?.items : []), [
        data,
    ]);
    /* cart item data  */
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Cart Details</h2>

                    </div>
                </div>
                {
                    cartData == undefined ? <h1>Not items Add</h1> : <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th width="40%">Product</th>
                                                    <th width="20%">Unit Price</th>
                                                    <th width="20%">Quantity</th>
                                                    <th width="20%">Total</th>
                                                    <th className="text-end">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartData.map(cart => <CartItem key={cart?._id} cartItem={cart} />)}

                                                <tr className="text-end">
                                                    <td colSpan="6">
                                                        <article className="float-end">
                                                            <dl className="dlist">
                                                                <dt>Total Quantity :</dt>
                                                                <dd><b className="h5">{data?.totalQuantity}</b></dd>
                                                            </dl>
                                                            <dl className="dlist">
                                                                <dt>Total Prices :</dt>
                                                                <dd><b className="h5">${data?.totalPrice?.toFixed(2)}</b></dd>
                                                            </dl>
                                                        </article>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-lg-12">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="box shadow-sm bg-light">
                                                <h6 className="mb-15">Payment info</h6>
                                                <select className="form-select" {...register("payment")}
                                                    onChange={(e) => setBank(e.target.value)}
                                                >
                                                    <option selected>Selected Payment</option>
                                                    <option value='cash'>CASH</option>{/* Payment info
 */}
                                                    <option value='check' >CHECK</option>
                                                    <option value='due'>DUE</option>
                                                    {errors?.payment && (
                                                        <span className="form__error">{errors?.payment.message}</span>
                                                    )}
                                                </select>
                                                {bank === 'check' ? <div>
                                                    <input type="text" placeholder="Check Number" className="form-control"
                                                        {...register("checkNumber")}
                                                    />
                                                    <input type="text" placeholder="Your Check Names" className="form-control"
                                                        {...register("checkProviderName")}
                                                    />
                                                </div> : ''}
                                                {bank === 'cash' ? <div>
                                                    <input type="text" placeholder="Your Cash Names" className="form-control"
                                                        {...register("checkProviderName")}
                                                    />
                                                </div> : ''}
                                                {bank === 'due' ? <div>
                                                    <input type="text" placeholder="Your Due Names" className="form-control"
                                                        {...register("checkProviderName")}
                                                    />
                                                </div> : ''}


                                            </div>
                                            <div className="h-25 pt-4">
                                                {
                                                    !cartData?.length == 0 && <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn btn-primary">Order</button>
                                                }

                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-4">
                                    <div className="box shadow-sm ">
                                        <h6 className="mb-15">Coustomer info</h6>
                                        <div className="col-lg-12 me-auto">
                                            <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search..." className="form-control" />
                                        </div>
                                        {
                                            coustomerData?.map((data) => <CoustomerItm key={data?._id} CoustomerItm={data}
                                                coustomerId={coustomerId} setCoustomerId={setCoustomerId}
                                                setCoustomerIdHandel={setCoustomerIdHandel}
                                            />
                                            )
                                        }
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                }


            </section>




        </DashboardLayout >
    )
}

export default Cart