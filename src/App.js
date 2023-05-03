import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Containers/Home'
import BurnADrako from './Containers/BurnADrako'

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/burnadrako" element={<BurnADrako />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
