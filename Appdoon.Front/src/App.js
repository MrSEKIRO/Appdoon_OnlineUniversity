import React from 'react';

import {Register} from './Components/Register'; 

import {Home}  from './Components/Home';
import {Navigation} from "./Statics/Navigation";
import {Footer} from "./Statics/Footer";

import{Login} from "./Components/Login";
import Timeline from "./Components/Timeline/Timeline";



import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends React.Component {
  //constructor(props) {
  //  super(props);
  //}


  render() {
    return (
      <div>
        <BrowserRouter>
          

          <Navigation/>


          <Routes>
            <Route path="/" element={<Home/>} exact/>  
            
            <Route path="/register" element={<Register/>}/>

            <Route path="/login" element={<Login/>}/>


            <Route path="/timeline" element={<Timeline/>}/>

            

          </Routes>



          <Footer/>

        </BrowserRouter>
      </div>

    );
  }
}

export default App;