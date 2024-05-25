import { Outlet, Link } from 'react-router-dom';
import './Root.css'
export default function Root() {
    return (
      <>
        <nav>
          <ul>
            <li><Link to={`/`} >Farm-to-table</Link></li>   
            <div className='rightSide'>  
            <li> <Link to ={`/about`}> About</Link></li>
            <li> <button className='signInButton'>
            <Link to = {`/sign-in`}> Sign In</Link>
            </button></li>
            </div>
            <link></link>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  }