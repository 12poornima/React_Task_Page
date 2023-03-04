import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AllTask.css"
import SingleTask from './SingleTask'

function AllTask() {
    const [allTask, setAllTask] = useState()

    const getAll = async () => {
        let response = await axios.get("http://localhost:3000/api/task/alltask")
        console.log(response);
        if (response.data.alltask) {
            setAllTask(response.data.alltask)
        }
    }

    const navigate = useNavigate()

    async function taskAddedPage() {
        navigate("/taskadd")
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div>
            <div className="main">
                {
                    allTask && allTask.map((a) => {
                        return <SingleTask taskData={a} />
                    })
                }
                <div>
                    <button className='btn' onClick={taskAddedPage} >ADD YOUR'S TASK</button>
                </div>
            </div>
        </div>
    )
}

export default AllTask