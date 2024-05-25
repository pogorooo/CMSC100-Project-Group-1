import { Link } from "react-router-dom";

import './signInUpPages.css';
import veg from '../assets/vegetable04.png';

export default function SignUp() {
    return (
      <>
        <div class ="bg">
          <br></br>
          <div class="main-box">
            <div class = "redirect">
              <p class="title">Already A Member?</p>
              <img src={veg}/>
              <button className="page-button"><Link to= {`/sign-in`}>Sign in</Link></button>
            </div>
            <div class = "sign-in-up">
              <form>
                <p class="title">Sign Up Here</p>
                <input placeholder="Email"></input> <br></br>
                <input placeholder="Password"></input> <br></br>
                <button className="page-button">Sign up</button>
              </form>
            </div>
          </div>
        </div>
        
      </>
    )
  }