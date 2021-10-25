import React from 'react'

const Contact = () => {
    return (
        <div className="MainContact-css">
            <div className="Contact-css">
            <div className="MainContact">
            <h1 className="Contact-title">Contact</h1>
            <p className="Contact-description">GET IN TOUCH</p>
            <div>
                <form className="form-css">
               <div className="Name-css">
                  <label>Name</label>
                  <input type="text" name="name" className="inp-css"/>
                   </div>
                   <div className="Email-css">
                       <label>Email</label>
                  <input type="email" name="email" className="inp-css"/>
                   </div>
                 <div className="Message-css">
                      <label>Message</label>
                     <input type="text" name="message" className="inp-css"/>
                 <button type="submit" className="submit">Send</button>
                 </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Contact
