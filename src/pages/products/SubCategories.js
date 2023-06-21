import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAddSubCategoriesMutation, useGetSubCategoriesQuery } from '../../app/services/subCategories'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useQueryCategoriesMutation } from '../../app/services/categories'
import { SubCategoriesSchema } from '../../helpers/validation/SubCategoriesSchema'
import { useGetDepartmentQuery } from '../../app/services/department'
import SingleSubCategories from '../../components/elements/product/SingleSubCategories'
import { useState } from 'react'
import GetSpinner from '../../helpers/shared/GetSpinner'

export default function SubCategories() {
    const [Loading, setLoading] = useState(false)
    const { data: SubCategories, isLoading: LoadingSubCategories } = useGetSubCategoriesQuery()
    const { data } = useGetDepartmentQuery()
    const [QueryCategories, { data: categorieData }] = useQueryCategoriesMutation()
    const [AddSubCategories, { isError, isLoading, isSuccess }] = useAddSubCategoriesMutation()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(SubCategoriesSchema) });
    const onSubmit = async (data) => {
        await AddSubCategories(data)
    }
    const selectDepartment = async (id) => {
        console.log(id)
        await QueryCategories(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Sub Categories Add !')
        }
        if (isError) {
            toast.error('sorry Sub Categories not add!')
        }
        if (LoadingSubCategories) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [isError, isLoading, isSuccess, LoadingSubCategories])


    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Sub Categorie</h2>
                        <p>Add, edit or delete a Sub Categorie</p>
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
                                        <select className="form-select"  {...register("development_id")} onChange={(e) => selectDepartment(e.target.value)}>
                                            <option selected>Select Department</option>
                                            {data?.development?.map(data => <option defaultValue={data?._id} key={data?._id}>{data?.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Category</label>
                                        <select className="form-select" {...register("categorie_id")}>
                                        <option selected>Select Category</option>
                                            {categorieData?.categorie?.map(data => <option defaultValue={data?._id} key={data?._id}>{data?.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Sub Categorie </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_name"
                                            {...register("name")}
                                        />
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
                                                <th>Sub</th>
                                                <th>Categorie</th>
                                                <th>Department</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Loading && <GetSpinner />}
                                            {SubCategories?.subCategorie?.map(data => <SingleSubCategories key={data?._id} data={data} />)}
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
