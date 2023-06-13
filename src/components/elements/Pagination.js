import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ totalPages, setPagination }) {
    const handlePageClick = (event) => {
        setPagination({ pageIndex: event.selected, pageSize: 10 })
    };
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-link'
                activeLinkClassName='active'

            />
        </>
    );
}

export default Pagination