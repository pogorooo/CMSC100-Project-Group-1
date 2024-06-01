import { Link } from "react-router-dom";

import './signInUpPages.css';
import mp from '../assets/marketplace.jpg';

export default function SignUp() {

  //to get data
  const handleSubmit=(event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    const userData={
      email: data.get("email"),
      password: data.get("password")
    }
    console.log("userData, ", userData);
  }
    return (
      <>
        <div class ="bg">
          <br></br>
          <div class="main-box">
            <div class = "redirect">
              <p class="title">Already A Member?</p>
              <img class = "mp" src={mp} alt="pic for signUp"/>
              <button className="page-button"><Link to= {`/sign-in`}>Sign in</Link></button>
            </div>
            <div class = "sign-in-up">

              <form onSubmit={handleSubmit}>
                <p class="title">Sign Up Here</p>
                <input required id="email" name="email" placeholder="Email"></input> <br></br>
                <input required id="password" name="password" placeholder="Password"></input> <br></br>
                <input required id="firstName" name="firstName" placeholder="First Name"></input> <br></br>
                <input id="middleName" name="middleName" placeholder="Middle Name"></input> <br></br>
                <input id="lastName" name="lastName" required placeholder="Last Name"></input> <br></br>
                <button className="page-button" type="submit">Sign up</button>
              </form>
            </div>
          </div>
          <br></br>
        </div>
        
      </>
    )
  }