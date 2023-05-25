import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDeleteCoustomerMutation } from '../../../app/services/coustomer'
function SingleCoustomer({ employeeEditModal, data, setEmployeeEditModal }) {
    const [deleteCoustomer, { isSuccess, isLoading }] = useDeleteCoustomerMutation()

    const DeleteUser = async (id) => {
        await deleteCoustomer(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Delete Coustomer')
        }
    }, [isSuccess])

    return (
        <tr >
            <td>{data?.name}</td>
            <td>{data?.comphonyName}</td>
            <td>{data?.email}</td>
            <td>{data?.phone}</td>
            <td className="text-end">
                <div className="text-end">
                    <a
                        onClick={() => setEmployeeEditModal({ type: !employeeEditModal.type, data: data })}
                        className="btn btn-sm font-sm rounded btn-brand"> <i className="material-icons md-edit"></i> Edit </a>
                    <a
                        onClick={() => DeleteUser(data?._id)}
                        style={{ cursor: isLoading ? 'no-drop' : 'pointer' }}
                        className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"
                        ></i> Delete </a>
                </div>
            </td>

        </tr>
    )
}

export default SingleCoustomer