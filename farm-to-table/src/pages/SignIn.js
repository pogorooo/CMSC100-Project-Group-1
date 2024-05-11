import { Link } from "react-router-dom";

export default function SignIn() {
    return (
      <>
        <p>Sign in Page</p>
        <button><Link to= {`/shop`}> Customer View</Link>  </button>
        <button><Link to= {``}> Admin View</Link>  </button>
      </>
    )
  }