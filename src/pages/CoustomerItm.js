import React, { useState } from 'react'

function CoustomerItm({ CoustomerItm, coustomerId, setCoustomerId }) {
    const [coustomerSelect, setCoustomerSelect] = useState(CoustomerItm?._id)

    return (
        <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-center">
                <div>
                    <h6>{CoustomerItm?.comphonyName}</h6>
                    <p className="text-muted font-xs">{CoustomerItm?.name}</p>
                </div>
            </div>
            {
                coustomerSelect == coustomerId ? <button
                    className="btn btn-xs"
                    style={{ cursor: 'no-drop' }}
                >Selected</button> : <button onClick={() => setCoustomerId(CoustomerItm?._id)}
                    className="btn btn-xs">Add</button>
            }
        </div>
    )
}

export default CoustomerItm