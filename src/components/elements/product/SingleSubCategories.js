import React from 'react'
import { toast } from 'react-toastify'
import { useDeleteSubCategoriesMutation } from '../../../app/services/subCategories'
import { useEffect } from 'react'
export default function SingleSubCategories({ data }) {
    const [deleteSubCategory, { isSuccess, isLoading }] = useDeleteSubCategoriesMutation()
    const SubCategoryDelete = async (id) => {
        await deleteSubCategory(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('SubCategory Delete !')
        }
    }, [isSuccess])
    return (
        <tr >
            <td>{data?._id}</td>
            <td>{data?.name}</td>
            <td>{data?.categorie_id?.name}</td>
            <td>{data?.development_id.name}</td>
            <td className="text-end">
                <div className="text-end">
                    <a className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                    <a style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} onClick={() => SubCategoryDelete(data?._id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                </div>
            </td>
        </tr>
    )
}
