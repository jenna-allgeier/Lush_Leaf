import logo from '../assets/LUSH.png';
import AddPlant from './AddPlant'

const Welcome = () => {
  return (
    <div>
        <img src={logo} className="app-logo" alt="logo" />
        <div>
          <button className="add-plant-btn" type="submit" onClick={() => console.log("I got clicked!") }>Add Your Plant!</button>
        </div>
    </div>
  )
        
        
}

export default Welcome