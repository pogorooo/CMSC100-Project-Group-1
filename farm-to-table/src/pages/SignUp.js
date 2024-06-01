import { Link } from "react-router-dom";

import './signInUpPages.css';
import graphic from '../assets/sign-in-page-graphic-2.png';


export default function SignUp() {
    return (
      <>
        <div class ="bg">
          <br></br>
          <div class="main-box">
            <div class = "redirect">
              <p class="title">Already A Member?</p>
              <img class = "graphic" src={graphic} alt='marketplace'/>
              <button className="page-button"><Link to= {`/sign-in`}>Sign in</Link></button>
            </div>
            <div class = "sign-in-up">
              <form>
                <p class="title">Sign Up Here</p>
                <input placeholder="Email"></input> <br></br>
                <input placeholder="Password"></input> <br></br>
                <input placeholder="First Name"></input> <br></br>
                <input placeholder="Middle Name"></input> <br></br>
                <input placeholder="Last Name"></input> <br></br>
                <button className="page-button">Sign up</button>
              </form>
            </div>
          </div>
          <br></br>
        </div>
        
      </>
    )
  }