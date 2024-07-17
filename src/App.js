import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componend/NavBar';
import Home from './componend/Home';

function App() {
  
  return (
    <BrowserRouter>
    
       <NavBar/>
       {/* <Home catagory="general" /> */}
  
    <Routes>
       <Route exact path="/"  element={<Home catagory="general" />}/>
       <Route exact path="/:name"  element={<Home />}/>
       <Route exact path="/General/:cnty"  element={<Home catagory="general" />}/>
      {/* <Route exact path="/sports"  element={<Home catagory="sports"/>}/>
       <Route exact path="/business"  element={<Home catagory="business"/>}/>
       <Route exact path="/entertainment"  element={<Home catagory="entertainment"/>}/>
       <Route exact path="/health"  element={<Home catagory="health"/>}/>
       <Route exact path="/science"  element={<Home catagory="science"/>}/>
       <Route exact path="/technology"  element={<Home catagory="technology"/>}/> */}
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;