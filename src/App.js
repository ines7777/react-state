import './App.css';
import Address from'./Component/Profile/Adress';
import Name from'./Component/Profile/FullName';
import Profile from './Component/Profile/ProfilePhoto';
import Navbar from './Component/Profile/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="container"> 
      <Profile/>
      <Name/>
      <Address/>
      </div>
     
    </div>
  );
}

export default App;
