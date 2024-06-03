import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Make sure to install axios: npm install axios

import './signInUpPages.css';
import graphic from '../assets/sign-in-page-graphic.png';

export default function SignIn() {
  const { setIsCustomerView } = useOutletContext();
  const { setIsAdminView } = useOutletContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // New state to hold the list of users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Function to fetch users
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5454/api/users", {
          headers: { Authorization: token ? `Bearer ${token}` : "" }
        });
        setUsers(response.data);
        console.log("Users fetched successfully: ", response.data);
      } catch (error) {
        console.error("Failed to fetch users: ", error.response ? error.response.data : error.message);
        setError("Failed to fetch users. You might need admin privileges.");
      }
    };

    fetchUsers();
  }, []);

  function handleCustomerView() {
    setIsAdminView(false);
    setIsCustomerView(true);
  }

  function handleAdminView() {
    setIsAdminView(true);
    setIsCustomerView(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password")
    };

    try {
      const response = await axios.post("http://localhost:5454/auth/signin", userData);
      console.log("Login successful: ", response.data);

      //jwt token
      localStorage.setItem("token", response.data.jwt);

      //get current user
      const userResponse = await axios.get("http://localhost:5454/api/users/profile", {
        headers: { Authorization: `Bearer ${response.data.jwt}` }
      });

      const user = userResponse.data;
      console.log("User details: ", user);

      if (user.role === "admin") {
        handleAdminView();
        navigate("/product-listing");
      } else {
        handleCustomerView();
        navigate("/shop");
      }
    } catch (error) {
      console.error("Login failed: ", error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return (
    <>
      <div className="bg">
        <br></br>
        <div className="main-box">
          <div className="sign-in-up">
            <form onSubmit={handleSubmit}>
              <p className="title">Login here</p>
              <input required id="email" name="email" placeholder="Email"></input> <br></br>
              <input required id="password" name="password" type="password" placeholder="Password"></input> <br></br>
              {error && <p className="error-message">{error}</p>}
              <button className="page-button" type="submit">Sign in</button>
            </form>
          </div>
          <div className="redirect">
            <p className="title">New Here?</p>
            <img className="graphic" src={graphic} alt="Graphic" />
            <button className="page-button"><Link to="/sign-up">Sign up</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}