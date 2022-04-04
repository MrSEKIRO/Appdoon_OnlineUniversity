import React from 'react';

import {Register} from './components/Register'; 
import  {Home}  from './components/Home';
import {Navigation} from "./Statics/Navigation";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends React.Component {
  //constructor(props) {
  //  super(props);
  //}


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h3 className='m-3 d-flex justify-content-center'> Random Bullshit </h3>
        </div>

        <Navigation/>


        <Routes>
          <Route path="/" element={<Home/>} exact/>  
          <Route path="/register" element={<Register/>}/>
        </Routes>

      </BrowserRouter>

    );
  }
}

export default App;