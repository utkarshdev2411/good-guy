import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vk8mvho', 'template_4mhcryr', form.current, {
        publicKey: '89mY-CKrGBOfKj-9W',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("message sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div className='contact ' id='section2'>
            <div className='c-left'><h1> Contact Us </h1>
                <h3>Let’s get this conversation started. Tell us a bit about yourself,  and we will get in touch as soon as we can. </h3>

            </div>
            <div className='c-right'>

                <form ref={form} onSubmit={sendEmail}>

                    <div className='name'>
                        <div className='fname' >
                            <label>First Name:</label>
                            <input type='text' name="fname"></input>
                        </div>
                        <div className='fname' >
                            <label>Last Name:</label>
                            <input type='text' name="lname"></input>
                        </div>
                    </div>

                    <div className='fmail'>
                        <label>Work Email</label>
                        <input name="user_email"></input>
                        <label>Message:</label>
                        <textarea name="message" ></textarea>
                    </div>
                    <input className='f-button' type="submit" value="Send" ></input>

                </form>
              

            </div>



        </div>
    )
}

export default Contact
