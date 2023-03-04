import React from 'react'
import { useNavigate } from 'react-router-dom'

function SingleTask({ taskData }) {
    const navigate = useNavigate()
    async function editbtn() {
        navigate("/edit")
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