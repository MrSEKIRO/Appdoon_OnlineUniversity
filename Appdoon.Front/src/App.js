import React from 'react';

import {Register} from './Components/Register'; 
import  {Home}  from './Components/Home';
import {Navigation} from "./Statics/Navigation";
import {Footer} from "./Statics/Footer";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends React.Component {
  //constructor(props) {
  //  super(props);
  //}


  render() {
    return (
      <BrowserRouter>
        

        <Navigation/>


        <Routes>
          <Route path="/" element={<Home/>} exact/>  
          <Route path="/register" element={<Register/>}/>
        </Routes>



        <Footer/>

      </BrowserRouter>

    );
  }
}

export default App;