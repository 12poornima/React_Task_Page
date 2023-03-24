import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./Edit.css"

function Editbtn() {
    const location = useLocation()
    console.log(location.state);

    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")


    async function btnedit(e) {
        e.preventDefault()

        let obj = { title, discription }
        let response = await axios.patch(`http://localhost:3000/api/task/Updatetask/${location.state._id}`, obj)
        console.log(response);
    }
    useEffect(() => {
        // setTitle(location.state.tittle)
        // setDiscription(location.state.discription)
    }, [])

    return (
        <div>
            <div className="main_box">
                <h1 className='head-title' >Edit Your Blog</h1>
                <div className='form1' >
                    <div className="txt_field">
                        <label htmlFor="">Title</label>
                        <span></span>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className='title' />
                    </div>
                    <div className="txt_field">
                        <label htmlFor="">Discription</label>
                        <span></span>
                        <input type="text" value={discription} onChange={(e) => { setDiscription(e.target.value) }} className='dis' />
                    </div>
                    <input type="submit" onClick={btnedit} className='sub' />
                </div>
            </div>
        </div>
    )
}

export default Editbtn