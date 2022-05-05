import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {Routes, Route, Link} from "react-router-dom";
import { PageFilmList } from './components/films/PageFilmList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
        <Routes>
              <Route path = "/Home" element={<Body/>}/>
              <Route path = "/Online-teatr" element={<PageFilmList/>}/>
              <Route path = "/Films" element={<PageFilmList/>}/>
              <Route path = "/Serials" element={<PageFilmList/>}/>
        </Routes> 
      <Footer/>      
    </div>
  );
}

export default App;
