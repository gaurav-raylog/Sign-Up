import React, { useState } from 'react'
import '../App.css'

export default function () {
    // const [login, setLogIn] = useState(false)
    return (
        <div className='form' /*style={{backgroundColor: 'white', height: '400px', width: '500px', margin: '0px 700px', marginBottom: '500px', borderRadius: '10px', position: 'absolute'}}*/>
            <div className="container">
                <h1 className='text-center my-4'>Create an account</h1>
                <p className='text-center'>Already have an ACCOUNT? <a href='#'>Sign In</a></p>
                <label htmlFor="first_name">Hospital Name</label>
                <input type="text" id="first_name" name="first_name" />
                <label htmlFor="phone_no">Phone</label>
                <input type="text" id="phone_no" name="phone_no" />
                <label htmlFor="email_id">Email</label>
                <input type="text" id="email_id" name="email_id" />

                <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker my-3" inline="true">
                    <input placeholder="Select date" type="date" id="example" className="form-control" />
                </div>

                <button className='create_btn' style={{ borderRadius: '5px', width: '150px', float: 'right', height:'40px', color:'white', backgroundColor:'#28303D' }}>Create</button>
            </div>
        </div>
    )
}
