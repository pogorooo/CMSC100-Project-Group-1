import { Link, useOutletContext } from "react-router-dom";

export default function SignIn() {
  const { setIsCustomerView } = useOutletContext();

  function handleCustomerView  () {
    setIsCustomerView(true);
  };
    return (
      <>
        <p>Sign in Page</p>
        <button><Link to= {`/shop`} onClick={handleCustomerView}> Customer View</Link>  </button>
        <button><Link to= {``}> Admin View</Link>  </button>
      </>
    )
  }