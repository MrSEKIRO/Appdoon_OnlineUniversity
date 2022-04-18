import React from 'react';

import {Register} from './Components/Register'; 

import {Home}  from './Components/Home';
import {Navigation} from "./Statics/Navigation";
import {Footer} from "./Statics/Footer";

import{Login} from "./Components/Login";

import Roadmaps from "./Components/Roadmap/Roadmaps";

import Timeline from './Components/Timeline/Timeline';

import { useLocation } from 'react-router-dom'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import CreateRoadmap from './Components/CreateRoadmap';



function App() {

  return (
    <div>
      <BrowserRouter>
        

        <Navigation/>
        


        <Routes>
          <Route exact path="/" element={<Home/>}/>
          
          <Route exact path="/register" element={<Register/>}/>

          <Route exact path="/login" element={<Login/>}/>


          {/*<Route path="/timeline" element={<Timeline/>} exact/>*/}

          <Route exact path="/roadmaps" element={<Roadmaps/>}/>

          

          
          {/*<Route exact path="/timeline" element={<Timeline/>}/>*/}

          <Route path={`/timeline/:id`} element={<Timeline/>}/>

          <Route path={`/create_roadmap`} element={<CreateRoadmap/>}/>

          <Route path="*" element={<Home/>}/>


        </Routes>



        <Footer/>

      </BrowserRouter>
    </div>

  );


}

export default App;