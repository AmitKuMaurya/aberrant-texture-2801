
import './App.css';
import { Car } from './component/Car/Car';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Routes/Navbar';



function App() {
  return (
    <div className="App">
       
       <Navbar/>
       <AllRoutes/>

    </div>
  );
}

export default App;
