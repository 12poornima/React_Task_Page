import React from 'react'
import { useNavigate } from 'react-router-dom'
import SingleTaskPage from './SingleTaskPage'
import "./View.css"

function ViewAllTaskPage() {

    const navigate = useNavigate()

    function taskaddedbtn() {
        navigate("./taskAddedPage")

    }
    return (
        <div>
            <div className="task-container">
                <SingleTaskPage />
                <SingleTaskPage />

                <div>
                    <button className='btn' onClick={taskaddedbtn} >ADD YOUR'S TASK</button>
                </div>
            </div>
        </div>
    )
}

export default ViewAllTaskPage