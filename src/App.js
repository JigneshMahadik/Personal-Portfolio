// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route,Routes } from "react-router-dom";
import Certificates from './components/certificates';
import { Projects } from './components/projects';
import { About } from './components/about';
import { Experience } from './components/experience';
import { Contact } from './components/contact';

function App() {
  return (
    <div className="App">
        <Routes>        
          <Route path="/"  element={<About/>} />
          <Route path="/Certificates"  element={<Certificates/>} />
          <Route path="/Projects"  element={<Projects/>} />
          <Route path="/Experience"  element={<Experience/>} />
          <Route path="/Contact"  element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
