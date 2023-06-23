import React, {  } from 'react'
import { useDeleteCoustomerMutation } from '../../../app/services/coustomer'
import { handelClick } from '../../../utils/ConfirmDelete'
function SingleCoustomer({ employeeEditModal, data, setEmployeeEditModal }) {
    const [deleteContent, { isLoading }] = useDeleteCoustomerMutation()


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
                        onClick={() => handelClick(data?._id, deleteContent)}
                        style={{ cursor: isLoading ? 'no-drop' : 'pointer' }}
                        className="btn btn-sm font-sm btn-light rounded"> <i className="material-icons md-delete_forever"
                        ></i> Delete </a>
                </div>
            </td>

        </tr>
    )
}

export default SingleCoustomer