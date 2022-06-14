import React from 'react';

import Register from './Components/Register'; 

import Home  from './Components/Home';
import Navigation from "./Components/Statics/Navigation";
import Footer from "./Components/Statics/Footer";

import Login from "./Components/Login";

import Roadmaps from "./Components/Roadmap/Roadmaps";

import Roadmap from './Components/Roadmap/Roadmap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Profile from './Components/User/Profile';
import UserRoadmaps from './Components/User/UserRoadmaps';
import UserFavoriteRoadmaps from './Components/User/UserFavoriteRoadmaps';
import EditProfile from './Components/User/EditProfile';
import Lesson from './Components/Roadmap/Lesson';

import Lessons from './Components/Roadmap/Lessons';

import ListCategory from './Components/List_Roadmap/ListCategory';

import TeacherProfile from './Components/Teacher/TeacherProfile';
import TeacherProfileEdit from './Components/Teacher/TeacherProfileEdit';
import TeacherEditRoadmap from './Components/Teacher/TeacherEditRoadmap';
import TeacherRoadmaps from './Components/Teacher/TeacherRadmaps';

import NotFound from './NotFound';

import All_Questions from './Components/HomeWork/All_Questions';


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

          <Route path={`/categories`} element={<ListCategory/>}/>

          
          
          <Route path={`/Profile`} element={<Profile/>}/>
          <Route path={`/UserRoadmaps`} element={<UserRoadmaps/>}/>
          <Route path={`/UserFavoriteRoadmaps`} element={<UserFavoriteRoadmaps/>}/>
          <Route path={`/EditProfile`} element={<EditProfile/>}/>

          <Route path={`/lessons`} element={<Lessons/>}/>
          <Route path={`/lesson/:id`} element={<Lesson/>}/>

          <Route path={`/TeacherProfile`} element={<TeacherProfile/>}/>
          <Route path={`/TeacherProfileEdit`} element={<TeacherProfileEdit/>}/>
          <Route path={`/TeacherRoadmaps`} element={<TeacherRoadmaps/>}/>
          <Route path={`/TeacherEditRoadmap`} element={<TeacherEditRoadmap/>}/>


          <Route path="*" element={<NotFound/>}/>
          
          <Route path={`/All_Questions`} element={<All_Questions/>}/>


        </Routes>



        <Footer/>

      </BrowserRouter>


  );


}

export default App;