import React, { useEffect } from 'react'
import { useDeleteDepartmentMutation } from '../../../app/services/department'
import { toast } from 'react-toastify'
function SingleDepartment({ data }) {
    const [deleteDepartment, { isSuccess, isLoading }] = useDeleteDepartmentMutation()
    const DeparmentDelete = async (id) => {
        await deleteDepartment(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Department Delete !')
        }
    }, [isSuccess])
    return (
        <tr >
            <td>{data?._id}</td>
            <td>{data?.name}</td>
            <td>{data?.user?.email}</td>
            <td className="text-end">
                <div className="text-end">
                    <a className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                    <a style={{ cursor: isLoading ? 'no-drop' : 'pointer' }} onClick={() => DeparmentDelete(data?._id)} className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"></i> Delete </a>
                </div>
            </td>
        </tr>

    )
}

export default SingleDepartment