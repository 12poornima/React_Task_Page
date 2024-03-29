import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SingleTask({ taskData }) {
    const location = useLocation()
    console.log(location.state)

    const navigate = useNavigate()
    async function editbtn() {
        navigate("/edit", { state: location.state })
    }
    return (
        <div>
            <div className="main-box">
                <h1 className='title'>{taskData.tittle}</h1>
                <p className='para'>{taskData.discription}
                </p>
                <div className="btn-grp">
                    <button className='edit_btn' onClick={editbtn} >Edit</button>
                    <button className='delete-btn' >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SingleTask