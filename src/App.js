
import './App.css';
import { Footer } from './Component/Footer';
import HomePage from './Component/HomePage';
import Navbar from './Component/Navbar';
import { MainRoutes } from './Routes/MainRoutes';




function App() {
  return (
    <div className="App">

     <Navbar />
     <MainRoutes/>
      <br/>
     <Footer />
  
    </div>
  );
}

export default App;
