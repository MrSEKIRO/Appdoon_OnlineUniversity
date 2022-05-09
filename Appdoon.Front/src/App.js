import React from 'react';

import Register from './Components/Register'; 

import Home  from './Components/Home';
import Navigation from "./Statics/Navigation";
import Footer from "./Statics/Footer";

import Login from "./Components/Login";

import Roadmaps from "./Components/Roadmap/Roadmaps";

import Roadmap from './Components/Roadmap/Roadmap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import CreateRoadmap from './Components/BuildRoadmap/CreateRoadmap';
import CreateCategory from './Components/BuildRoadmap/CreateCategory';
import CreateStep from './Components/BuildRoadmap/CreateStep';
import CreateChildStep from './Components/BuildRoadmap/CreateChildStep';

import EditRoadmap from './Components/Edit_Roadmap/EditRoadmap';
import EditCategory from './Components/Edit_Roadmap/EditCategory';
import EditStep from './Components/Edit_Roadmap/EditStep';
import EditChildStep from './Components/Edit_Roadmap/EditChildStep';


import Profile from './Components/User/Profile';
import UserRoadmaps from './Components/User/UserRoadmaps';
import UserFavoriteRoadmaps from './Components/User/UserFavoriteRoadmaps';
import EditProfile from './Components/User/EditProfile';
import Lesson from './Components/Roadmap/Lesson';

function App() {

  return (

      <BrowserRouter>
        

        <Navigation/>
        


        <Routes>
          <Route exact path="/" element={<Home/>}/>
          
          <Route exact path="/register" element={<Register/>}/>

          <Route exact path="/login" element={<Login/>}/>


          {/*<Route path="/timeline" element={<Timeline/>} exact/>*/}

          <Route exact path="/roadmaps" element={<Roadmaps/>}/>

          

          
          {/*<Route exact path="/timeline" element={<Timeline/>}/>*/}

          <Route path={`/roadmap/:id`} element={<Roadmap/>}/>

          <Route path={`/create_roadmap`} element={<CreateRoadmap/>}/>
          <Route path={`/create_step`} element={<CreateStep/>}/>
          <Route path={`/create_category`} element={<CreateCategory/>}/>
          <Route path={`/create_child_step`} element={<CreateChildStep/>}/>

          <Route path={`/edit_roadmap`} element={<EditRoadmap/>}/>
          <Route path={`/edit_step`} element={<EditStep/>}/>
          <Route path={`/edit_category`} element={<EditCategory/>}/>
          <Route path={`/edit_child_step`} element={<EditChildStep/>}/>
          
          
          <Route path={`/Profile`} element={<Profile/>}/>
          <Route path={`/UserRoadmaps`} element={<UserRoadmaps/>}/>
          <Route path={`/UserFavoriteRoadmaps`} element={<UserFavoriteRoadmaps/>}/>
          <Route path={`/EditProfile`} element={<EditProfile/>}/>

          <Route path={`/Lesson`} element={<Lesson/>}/>


          <Route path="*" element={<Home/>}/>


        </Routes>



        <Footer/>

      </BrowserRouter>


  );


}

export default App;