import React, { useEffect } from 'react'
import { useDeleteEmployeeMutation } from '../../../app/services/employee'
import { toast } from 'react-toastify'
function SingleEmployee({ employeeEditModal, data, setEmployeeEditModal }) {
    const [deleteEmployee, { isSuccess, isLoading }] = useDeleteEmployeeMutation()

    const DeleteUser = async (id) => {
        await deleteEmployee(id)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Delete Employee')
        }
    }, [isSuccess])

    return (
        <tr >
            <td>{data?.name}</td>
            <td>{data?.email}</td>
            <td>{data?.phone}</td>
            <td>{data?.nid}</td>
            <td>{data?.country}</td>
            <td>{data?.password}</td>
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

export default SingleEmployee