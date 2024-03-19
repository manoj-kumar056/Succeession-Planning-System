import React from 'react'
import '../styles/Home.css'
import main from '../assets/images.png'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="padding">
    <ul className = "navbar1">
              <div className = "it">
                  <li className="list item1"><NavLink className="items" to="/About">About us</NavLink></li>
                  <li className="list item2"><NavLink className="items" to="/Contact" >Contact us</NavLink></li>
              <li className="list item3"><NavLink className = "items" to="/Mangetask" >Manage task</NavLink></li>               
              </div>
          </ul>
          
    <div className="head">
  <div className="topname"><h1>Succession Planning System </h1></div>
   { <div className="content" style={{display : 'flex' ,textAlign:"justify"}} >
   <h3>Effective Resource Utilization<br></br>
   <br></br>Leadership Development<br></br>
   <br></br>Empowerment and Engagement<br></br>
   <br></br>Organizational Agility</h3></div> }
    <div style={{display : 'flex'}}>
    <img className= "mainimg" alt= "logo" src={main}/>
    </div>
    </div>
    <div className="content1">
    {/* <h1>Why Is It Important to Delegate?</h1>
    Delegating tasks ensures efficient utilization of resources within the succession pipeline, allowing individuals to contribute their skills and expertise effectively.
    <h1>Why Managers Fail to Delegate</h1>
    While the benefits of delegating are obvious and plentiful, many managers still fail to delegate effectively. The reality is that there are several myths and misconceptions about delegating that can make some leaders wary of handing off work to others.
    <h1>How to Determine When Delegating is Appropriate</h1>
    Another common barrier to delegation is that leaders aren’t sure which tasks they should and shouldn’t be delegating. In every manager’s workload—particularly new managers—there are likely tasks that you should do and tasks that you should delegate.

Career and business strategist Jenny Blake recommends conducting an audit of your tasks using the rules below to find out which of your tasks should be delegated:
    <h1>How to Delegate Tasks Effectively</h1>
    Here are a few tips to help you delegate effectively so that your team shares the workload and makes progress that benefits everyone.
    <h3>1. Choose the right person for the job</h3>
    Part of being a good leader is understanding your employees’ strengths, weaknesses, and preferences. If you need to delegate a task that is going to require a lot of collaboration to complete, don’t delegate it to someone who very strongly prefers working alone. Delegate it to someone who prefers collaborating.

If you conducted the audit recommended in the section above, you may have a list of tasks you’re looking to delegate. You may want to consider sitting down with your team, going through the list, and letting people self-select the tasks they’re most interested in taking over.

Letting people choose the tasks they’re delegated is another way to build trust with and inspire engagement among your team.
    <h3>2. Explain why you’re delegating</h3>
    If you’re delegating a task to someone out of the blue, it really helps when you provide context for why you’re giving them that responsibility.

“When you select people to delegate to, tell them why you chose them specifically and how you hope to see this help them grow,” says Alex Cavoulacos, founder of The Muse. “Help them see each delegated task as an opportunity to take on more responsibilities or grow new skills.”
    <h3>3. Provide the right instructions</h3>
    Every good delegator provides basic and important information without micromanaging. Stephen Covey, author of The 7 Habits of Highly Effective People, suggests that you delegate results rather than methods:

“For example, say, ‘Here’s what we are doing. Here’s what we’re after. I want you to get the sale,’ instead of ‘Follow up on those leads,” Covey says.

Tell employees your goals or the milestones you hope to hit and let them tackle the problem in their own way. Don’t look for perfection or micromanage; someone else might complete a task differently than you would. As long as you get the result you’re looking for, that’s okay.
    <h3>4. Provide resources and training</h3>
    You have to make sure the person tasked with a job or project has the tools and resources they need to be successful.

“A good training rule of thumb is ‘I do, we do, you do’ (i.e. watch me do this, then let’s do it together, now you try),” says Cavoulacos.

Make sure that when you delegate a task, the person has the tools and skills they need to complete the task—or provide a way for them to work on those skills.

For example, if you ask someone to use a specific tool they’ve never used before to complete a task, make sure there’s a plan for them to become familiar with the tool first. */}
    </div>
    </div>
    
  )
}
