import './App.css';
import { Footer } from './Component/Footer';
import HomePage from './Component/HomePage';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
