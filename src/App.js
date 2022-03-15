import React, { useState } from "react";

 const App =()=> {

   //states
      const [toggler,setToggler] = useState(true);
      const [user,setUser] = useState([]);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [RepeatPassword, setRepeatPassword] = useState("");

   //methods
   const signIn = (e) => {
            e.preventDefault();
            setUser([
            ...user,  
            {
            email:email,
            password:password,
            RepeatPassword:RepeatPassword,
            },
            ]);
};
const toggleHandler = ()=> {
setToggler(!toggler)
};   
return (
  // top signIn,signUp buttonns********************
<div className="main_container">
    <><button className="signIn" onClick={toggleHandler}>Login</button>
      <button className="signUp" onClick={toggleHandler} >Sign Up</button><br />
   </>
   {/* form1 front message *******************/}
   <br />
   <div className="front_message"><p >Enter your email and password <b>to sign in<b /></b></p></div>
   <div className="bottom_line"></div>
  
  {/* form1 signIn details  ****************/}
   <div className="toggle">
      {toggler? <>
      <form className="signIn_details">
         <label>Email*</label><br />
         <input type="email" placeholder="EMail"></input><br />
         <div className="email_bottom_line"></div><br />
         <label>password*</label><br />
         <input type="password" placeholder="Password"></input><br />
         <div className="password_bottom_line"></div><br />
         <div className="form_bottom"> <a href="#">Forgot your password?<br />
            <><br/><center>Click here</center></></a>
            <button className="login">Sign In</button>
         </div>
      </form>
      </> :
      (
        /* form2 signUp details *******************/
      <form className="signUp_details">
         <label>Email*</label><br />
         <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         placeholder="Email"/><br />
         <div className="email_bottom_line"></div><br />
         <label>Password*</label><br />
         <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         type="password" placeholder="Password"/>
         <div className="password_bottom_line"></div>
         <div className="repeat_password">
         <label>Repeat Password*</label><br/>
         <input 
            value={RepeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
         type="password" placeholder="Repeat password"/>
         </div>
         <div className="signUp_form_bottom">
           <p>By creating an account you agree to <br /><center><br />our<span style={{color:"red"}}> Terms & Privacy</span></center></p>
            <button className="create_account">Create Account</button>
         </div>
      </form>
      )
      }
      <div className="user_details">
         <table>
            {
            user.length>0?(
            <tr className="table_heading">
               <th>email</th>
               <th>password</th>
            </tr>
            ):null
            }
            {user.map((item,index)=>(
            <tr className="table_data">
               <th>{item.email}</th>
               <th>{item.password}</th>
               <th>{item.RepeatPassword}</th>
            </tr>
            ))
            }
         </table>
      </div>
   </div>
</div>
)
}
export default App;