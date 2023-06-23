import React, {  } from 'react'
import { useDeleteEmployeeMutation } from '../../../app/services/employee'
import { handelClick } from '../../../utils/ConfirmDelete'
function SingleEmployee({ employeeEditModal, data, setEmployeeEditModal }) {
    const [deleteContent, { isSuccess, isLoading }] = useDeleteEmployeeMutation()


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
                        onClick={() => handelClick(data?._id,deleteContent)}
                        
                        style={{ cursor: isLoading ? 'no-drop' : 'pointer' }}
                        className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"
                        ></i> Delete </a>
                </div>
            </td>

        </tr>
    )
}

export default SingleEmployee