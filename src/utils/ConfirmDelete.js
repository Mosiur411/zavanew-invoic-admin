import Swal from "sweetalert2"
export const handelClick = async (id, deleteContent) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
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
                    'Deleted!',
                    `Your file has been deleted`,
                    'success'
                )
            } else {
                Swal.fire(
                    'Deleted!',
                    `Your file has been not deleted`,
                    'error'
                )
            }

        }
    })

}