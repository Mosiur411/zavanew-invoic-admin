import React from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useDeleteChildSubCategoriesMutation } from '../../../app/services/childsubCategories'
export default function SingleChildSub({ data }) {
    const [deleteChildSubCategory, { isSuccess, isLoading }] = useDeleteChildSubCategoriesMutation()
    const ChildSubCategoryDelete = async (id) => {
        await deleteChildSubCategory(id)
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
            <td>{data?.sub_id.name}</td>
            <td>{data?.categorie_id?.name}</td>
            <td>{data?.development_id.name}</td>
            <td className="text-end">
                <div className="text-end">
                    <a className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                    <a style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} onClick={() => ChildSubCategoryDelete(data?._id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                </div>
            </td>
        </tr>
    )
}

