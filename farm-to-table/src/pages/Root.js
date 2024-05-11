import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
      <>
        <nav>
          <ul>
            <li><Link to={`/`} >Farm-to-table</Link></li>       
            <li> <Link to ={`/about`}> About Us</Link></li>
            <li><Link to = {`/sign-in`}> Sign In</Link></li>
            <link></link>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  }