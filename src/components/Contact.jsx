import React from 'react'
import '../styles/Contact.css'
export const Contact = () => {
  return (
    <div className="head1">
      <div className="touch"><h1>Contact</h1>
    </div>
       <div className="fill" ><br></br><label htmlFor="">Name :&nbsp;&nbsp;&nbsp;</label>
        <input type="text"/>  <br></br><br />
        <label htmlFor="">Address :</label>
        <input type="text"/><br></br><br />
        <label htmlFor="">Email.ID :</label>
        <input type="text"/><br></br><br></br>
        <label htmlFor="">Contact :&nbsp;&nbsp;&nbsp;</label>
        <input type="text"/><br></br><br></br>
        <label htmlFor="">Feedback :</label>
        <input type="text"/><br></br><br></br>
        <button>submit</button>
        </div>

    </div>
  )
}

