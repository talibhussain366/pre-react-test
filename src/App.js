import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Containers/Home'
import BurnDrako from './Containers/BurnDrako'
import ViewEggAuction from "./Containers/ViewEggAuction"
import EggAuction from "./Containers/EggAuction"

import "./assets/fonts/font.scss"

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/burn-a-drako" element={<BurnDrako />} />
            <Route path="/raffle-tickets" element={<ViewEggAuction />} />
            <Route path="/egg-auction" element={<EggAuction />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
