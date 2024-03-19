import { useState , useEffect } from 'react'
import axios from 'axios'
import '../styles/User.css'
export const User = () => {
  const [name  , setName] = useState('') 
  const [st  , setSt] = useState('') 
  const [end  , setEnd] = useState('') 
  const [reason  , setReason] = useState('') 
  let handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3005/users',{
      name : name ,
      start_date : st,
      end_date : end,
      reason : reason

    }).then(()=>{alert("Your Task Added Successfully");
    setName('')
    setReason('')
    setSt('')
    setEnd('')})
  }
  return (
    <div>
      <div className="container">
    <h1>MANGE YOUR TASK</h1>
    <form className='leave-container' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} name="name" required />

        <label htmlFor="start_date">Start Date:</label>
        <input type="date" id="start_date" value={st} onChange={(e)=>setSt(e.target.value)} name="start_date" required />

        <label htmlFor="end_date">End Date:</label>
        <input type="date" id="end_date" value={end} onChange={(e)=>setEnd(e.target.value)} name="end_date" required />

        <label htmlFor="reason">Task List:</label>
        <textarea id="reason" value={reason} onChange={(e)=>setReason(e.target.value)} name="reason" rows="4" required ></textarea>

        <input type="submit" value="Submit" />
    </form>
  </div>
</div>
  )
}