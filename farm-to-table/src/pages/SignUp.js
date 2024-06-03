import { Link } from "react-router-dom";

import './signInUpPages.css';
import graphic from '../assets/sign-in-page-graphic-2.png';
import {useDispatch, useSelector} from "react-redux";
import { getUser, register } from "./State/Auth/Action";
import { useEffect } from "react";
import { store } from "./State/store";


export default function SignUp() {

  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])

  //to get data
  const handleSubmit=(event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    const userData={
      firstName: data.get("firstName"),
      middleName: data.get("middleName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    }
    dispatch(register(userData))
    console.log("userData, ", userData);
  }
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