import React from 'react'

function GetSpinner() {
    return (
        <div style={{ width: "100%",  display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default GetSpinner