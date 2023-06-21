import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import SingleProductCaregorie from '../../components/elements/product/SingleProductCaregorie'
import { useGetDepartmentQuery } from '../../app/services/department'
import { useQueryCategoriesMutation } from '../../app/services/categories'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ChildSubCategorySchema } from '../../helpers/validation/ChildSubCategorySchema'
import { useQuerySubCategoriesMutation } from '../../app/services/subCategories'
import { useAddChildSubCategoriesMutation, useGetChildSubCategoriesQuery } from '../../app/services/childsubCategories'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import SingleChildSub from '../../components/elements/product/SingleChildSub'

function ChildSubCategory() {
    const { data } = useGetDepartmentQuery()
    const { data: child } = useGetChildSubCategoriesQuery()
    const [QueryCategories, { data: categorieData }] = useQueryCategoriesMutation()
    const [AddChildSubCategories, { isError, isLoading, isSuccess }] = useAddChildSubCategoriesMutation()
    const [QuerySubCategories, { data: subCategorieData }] = useQuerySubCategoriesMutation()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(ChildSubCategorySchema) });
    const onSubmit = async (data) => {
        await AddChildSubCategories(data)
    }
    /*  select Department Query categoties  */
    const selectDepartment = async (id) => {
        await QueryCategories(id)
    }
    const selectCategory = async (id) => {
        await QuerySubCategories(id)
    }





    useEffect(() => {
        if (isSuccess) {
            toast.success('Child Sub Categories Add !')
        }
        if (isError) {
            toast.error('sorry Child Sub Categories not add!')
        }
    }, [isError, isLoading, isSuccess])





    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Child Sub Categorie</h2>
                        <p>Add, edit or delete a Child Sub Categorie</p>
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
                                            {data?.development?.map(data => <option defaultValue={data?._id} key={data?._id}>{data?.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Category</label>
                                        <select className="form-select" {...register("categorie_id")} onChange={(e) => selectCategory(e.target.value)}>
                                            {categorieData?.categorie?.map(data => <option defaultValue={data?._id} key={data?._id}>{data?.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Sub Categorie</label>
                                        <select className="form-select" {...register("sub_id")}>
                                            {subCategorieData?.subCategorie?.map(data => <option defaultValue={data?._id} key={data?._id}>{data?.name}</option>)}
                                        </select>
                                       
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_name" className="form-label">Child Sub Categorie</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_name" {...register("name")} />
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn-primary w-100 text-center" style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} >Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-9">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Child Sub </th>
                                                <th>Sub Categorie</th>
                                                <th>Categorie</th>
                                                <th>Department</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {child?.childSub?.map(data =><SingleChildSub data={data} key={data?._id}/>)}
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

export default ChildSubCategory