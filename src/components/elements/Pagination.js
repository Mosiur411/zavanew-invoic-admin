import React from 'react'

function Pagination() {
    return (
        <div><div className="pagination-area mt-30 mb-50">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                    <li className="page-item active"><a className="page-link" href="#">01</a></li>
                    <li className="page-item"><a className="page-link" href="#">02</a></li>
                    <li className="page-item"><a className="page-link" href="#">03</a></li>
                    <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">16</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#"><i className="material-icons md-chevron_right"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Pagination