import './App.css';
import Navbar from './Components/Navbar';
import token_logo from './token_logo_2.png'
import Signupform from './Components/Signupform';

function App() {
  return (
    <div>
      <Navbar/>
      {/* Sir here when iam removing the comment and adding the image in the page then the form component is rendering below the image. i think image specifications might be wrong so it is not able to overlap the image.*/}
      <img className='d-flex justify-content-evenly my-6' src={token_logo} alt="logo" style={{marginTop: '200px', marginLeft: '150px'}} />
      <Signupform/>
    </div>
  )
}

export default App;
