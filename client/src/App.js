import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dispute from './components/pages/Dispute';
import Movies from './components/pages/Movies';
import Theatres from './components/pages/Theatres';
import NavBar  from "./components/navbar/NavBar";
import Seats from './components/pages/Seats';
import { UserAuthContextProvider } from './components/authentication/UserAuthContext';

function App() {
  return (
    <div className="App">
      <NavBar />
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/theatres" element={<Theatres />} />
            <Route path="/seats" element={<Seats />} />
          </Routes>
        </UserAuthContextProvider>
    </div>
  );
}

export default App;
