import logo from '../assets/LUSH.png';

const Welcome = () => {
  return (
    <div>
        <img src={logo} className="app-logo" alt="logo" />
        <div>
          <button className='add-plant-btn'>Add Your Plant!</button>
        </div>
    </div>
  )
        
        
}

export default Welcome