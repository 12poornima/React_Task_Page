import React from 'react'

function SingleTask({ taskData }) {
    return (
        <div>
            <div className="main-box">
                <h1 className='title'>Title</h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis voluptatibus. Atque, officiis! At eos, magni minus velit rerum, vel repudiandae eum praesentium exercitationem, ex nobis cum pariatur odit sit.
                </p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default SingleTask