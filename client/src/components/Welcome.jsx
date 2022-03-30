import logo from '../assets/LUSH.png';
import { Link } from 'react-router-dom'


const Welcome = () => {
  return(
  <div className='home'>
        <img src={logo} className="app-logo" alt="LUSH" />
        <Link to="/add-plant">
        <button className="add-plant-btn" type="submit">Add Your Plant!</button>
        </Link>
</div>
)
}

export default Welcome