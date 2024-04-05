import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact ' id='section2'>
            <div className='c-left'><h1> Contact Us </h1>
                <h3>Let’s get this conversation started. Tell us a bit about yourself,  and we will get in touch as soon as we can. </h3>

            </div>
            <div className='c-right'>

                <form action="mailto:admin@goodguy.live method="post" ">

                    <div className='name'>
                        <div className='fname'>
                            <label>First Name:</label>
                            <input type='text'></input>
                        </div>
                        <div className='fname'>
                            <label>Last Name:</label>
                            <input type='text'></input>
                        </div>
                    </div>

                    <div className='fmail'>
                        <label>Work Email</label>
                        <input></input>
                        <label>Message:</label>
                        <textarea></textarea>
                    </div>
                    <button className='f-button'><a href=''>Continue</a></button>

                </form>

            </div>



        </div>
    )
}

export default Contact
