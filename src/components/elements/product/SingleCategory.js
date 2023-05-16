import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDeleteCategoriesMutation } from '../../../app/services/categories'
function SingleCategory({ data }) {
    const [deleteCategory, { isSuccess, isLoading }] = useDeleteCategoriesMutation()
    const CategoryDelete = async (id) => {
        await deleteCategory(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Category Delete !')
        }
    }, [isSuccess])
    return (
        <tr >
            <td>{data?._id}</td>
            <td>{data?.name}</td>
            <td>{data?.development_id.name}</td>
            <td className="text-end">
                <div className="text-end">
                    <a className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                    <a style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} onClick={() => CategoryDelete(data?._id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                </div>
            </td>
        </tr>

    )
}

export default SingleCategory