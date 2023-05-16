import React from 'react'

function Spinner() {
    return (
        <div style={{ width: "100%", height: '100vh', display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner