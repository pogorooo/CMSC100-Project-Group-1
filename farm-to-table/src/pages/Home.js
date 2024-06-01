import { Link } from 'react-router-dom';
import videoBg from '../assets/videoBG.mp4'
import './HomePage.css';


//landing page of the app
export default function HomePage() {
    return (
      <>
        <div className='main'>
          <video src={videoBg} autoPlay loop muted />
          <div className='content'>
            <h1 id="title">FARM-TO-TABLE</h1>
            <p id="description">Welcome to Farm-to-Table, where every purchase connects you directly to our country's farmers, bringing the freshest product straight to your doorstep.</p>
            <Link to = {`/sign-in`}> <button id="getStarted">Shop Now</button></Link> 
          </div>
        </div>
      </>
    )

  }