import Swal from "sweetalert2"
export const handelAddButton = async (id, deleteContent) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Add!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            const result = await deleteContent(id)
            if (result) {
                Swal.fire(
                    'Add!',
                    `Your file has been Add`,
                    'success'
                )
            } else {
                Swal.fire(
                    'Deleted!',
                    `Your file has been not Add`,
                    'error'
                )
            }

        }
    })

}