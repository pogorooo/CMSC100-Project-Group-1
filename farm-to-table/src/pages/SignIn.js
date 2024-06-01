import { Link, useOutletContext } from "react-router-dom";

import './signInUpPages.css';
import graphic from '../assets/sign-in-page-graphic.png';

export default function SignIn() {
  const { setIsCustomerView } = useOutletContext();
  const{setIsAdminView} = useOutletContext();
  function handleCustomerView  () {
    setIsAdminView(false);
    setIsCustomerView(true);
  };

  function handleAdminView(){
    setIsAdminView(true);
    setIsCustomerView(false);
  }

    return (
      <>

        <div class = "bg">
          <br></br>
          <div class = "main-box">
            <div class = "sign-in-up">
              <form>
                <p class="title">Login here</p>
                <input placeholder="Email"></input> <br></br>
                <input placeholder="Password"></input> <br></br>
                <button className="page-button">Sign in</button>
              </form>
            </div>
            <div class = "redirect">
              <p class="title">New Here?</p>
              <img class = "graphic" src={graphic}/>
              <button className="page-button"><Link to= {`/sign-up`}>Sign up</Link></button>
            </div>
          </div>
          <p>Sign in Page</p>
          <button><Link to= {`/shop`} onClick={handleCustomerView}> Customer View</Link>  </button>
          <button><Link to= {`/product-listing`} onClick= {handleAdminView}> Admin View</Link>  </button>
        </div>
      </>

      
    )
  }