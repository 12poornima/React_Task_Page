import React from 'react'
import "./Edit.css"

function Editbtn() {
    return (
        <div>

            <div className="main_box">
                <h1 className='head-title' >Edit Your Blog</h1>
                <div className='form1' >
                    <div className="txt_field">
                        <label htmlFor="">Title</label>
                        <span></span>
                        <input type="text" className='title' />
                    </div>
                    <div className="txt_field">
                        <label htmlFor="">Discription</label>
                        <span></span>
                        <input type="text" className='dis' />
                    </div>
                    <input type="submit" className='sub' />

                </div>
            </div>
        </div>
    )
}

export default Editbtn