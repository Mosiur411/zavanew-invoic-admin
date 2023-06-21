import React, { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { useGetDepartmentQuery } from '../../app/services/department'
import { CategoriesSchema } from '../../helpers/validation/CategoriesSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAddCategoriesMutation, useGetCategoriesQuery } from '../../app/services/categories'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import SingleCategory from '../../components/elements/product/SingleCategory'
import GetSpinner from '../../helpers/shared/GetSpinner'
function Categories() {
    const [Loading, setLoading] = useState(false)
    const { data } = useGetDepartmentQuery()
    const { data: CategoriesData, isLoading: CategoriesLoging } = useGetCategoriesQuery()
    const [AddCategories, { isError, isLoading, isSuccess }] = useAddCategoriesMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(CategoriesSchema) });
    const onSubmit = async (data) => {
        await AddCategories(data)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Categories Add !')
        }
        if (isError) {
            toast.error('sorry Categories not add!')
        }
        if (CategoriesLoging) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [isError, isLoading, isSuccess, CategoriesLoging])

    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Categories</h2>
                        <p>Add, edit or delete a category</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search Categories" className="form-control bg-white" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-4">
                                        <label className="form-label">Department</label>
                                        <select className="form-select"  {...register("development_id")}>
                                            <option selected>Select Department</option>
                                            {data?.development?.map(data => <option defaultValue={data?._id} key={data?._id}>{data?.name}</option>)}
                                        </select>
                                        {errors?.development_id && (
                                            <span className="form__error">{errors?.development_id.message}</span>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Category Name</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_name"
                                            {...register("name")}
                                        />
                                        {errors?.name && (
                                            <span className="form__error">{errors?.name.message}</span>
                                        )}
                                    </div>
                                    <div className="d-grid">
                                        <button style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} className="btn-primary w-100 text-center">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-9">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Category</th>
                                                <th>Development</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Loading && <GetSpinner />}
                                            {CategoriesData?.categorie?.map(data => <SingleCategory key={data?._id} data={data} />)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </DashboardLayout>
    )
}

export default Categories