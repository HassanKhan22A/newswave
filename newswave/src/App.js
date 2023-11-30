import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <div>
    <BrowserRouter>
        <NavBar/>
        <Routes>
      <Route exact path="/" element={<News apiKey= {apiKey} key="General" topic="news"/>}/>
        <Route exact path="/business" element={<News apiKey= {apiKey} key="Business" topic="business"/>}/>
        <Route exact path="/entertainment" element={<News apiKey= {apiKey} key="Entertainment" topic="entertainment"/>}/> 
        <Route exact path="/tech" element={<News apiKey= {apiKey} key="Tech" topic="tech"/>}/>
        <Route exact path="/politics" element={<News apiKey= {apiKey} key="Politics" topic="politics"/>}/>
        <Route exact path="/finance" element={<News apiKey= {apiKey} key="Finance" topic="finance"/>}/>
        <Route exact path="/world" element={<News apiKey= {apiKey} key="World" topic="world"/>}/>
        <Route exact path="/sports" element={<News apiKey= {apiKey} key="Sports" topic="sports"/>}/>
        <Route exact path="/economics" element={<News apiKey= {apiKey} key="Economics" topic="economics"/>}/>
        <Route exact path="/science" element={<News apiKey= {apiKey} key="Science" topic="science"/>}></Route>
    </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;


