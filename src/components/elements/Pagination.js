import React from 'react'

function Pagination({ totalPages, setPagination, pageIndex, pageSize }) {

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${pageIndex == i ? 'active' : ''}`} onClick={() => setPagination({ pageIndex: i, pageSize: 10 })}><a className="page-link"> {i}</a></li>
            );
        }
        return pageNumbers;
    };


    return (
        <div><div className="pagination-area mt-30 mb-50">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                    {renderPageNumbers()}
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Pagination