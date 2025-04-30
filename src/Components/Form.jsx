import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='form'>
       <form>
        <label>Your name</label>
        <input type="text"/>
        <label>Your email</label>
        <input type="email"/>
        <label>Subject</label>
        <input type="text"/>
        <label>Message</label>
        <textarea rows="6" placeholder='type your message here' type="text"/>
        <button className="btn">Submit</button>
       </form>
    </div>
  )
}

export default Form
