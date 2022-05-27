import React from 'react';

import Register from './Components/Register'; 

import Home  from './Components/Home';
import Navigation from "./Components/Statics/Navigation";
import Footer from "./Components/Statics/Footer";

import Login from "./Components/Login";

import Roadmaps from "./Components/Roadmap/Roadmaps";

import Roadmap from './Components/Roadmap/Roadmap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import CreateRoadmap from './Components/CreateRoadmap/CreateRoadmap';
import CreateCategory from './Components/CreateRoadmap/CreateCategory';
import CreateStep from './Components/CreateRoadmap/CreateStep';
import CreateChildStep from './Components/CreateRoadmap/CreateChildStep';
import CreateLesson from './Components/CreateRoadmap/CreateLesson';


import Profile from './Components/User/Profile';
import UserRoadmaps from './Components/User/UserRoadmaps';
import UserFavoriteRoadmaps from './Components/User/UserFavoriteRoadmaps';
import EditProfile from './Components/User/EditProfile';
import Lesson from './Components/Roadmap/Lesson';

import Lessons from './Components/Roadmap/Lessons';

import ListCategory from './Components/List_Roadmap/ListCategory';
import ListRoadmap from './Components/List_Roadmap/ListRoadmap';
import ListChildStep from './Components/List_Roadmap/ListChildStep';
import ListStep from './Components/List_Roadmap/ListStep';
import ListLesson from './Components/List_Roadmap/ListLesson';
import ListLink from './Components/List_Roadmap/ListLink';

import TeacherProfile from './Components/Teacher/TeacherProfile';
import TeacherProfileEdit from './Components/Teacher/TeacherProfileEdit';
import TeacherEditRoadmap from './Components/Teacher/TeacherEditRoadmap';
import TeacherRoadmaps from './Components/Teacher/TeacherRadmaps';

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
          <Route path={`/create_lesson`} element={<CreateLesson/>}/>

          <Route path={`/edit_roadmap`} element={<ListRoadmap/>}/>
          <Route path={`/edit_step`} element={<ListStep/>}/>
          <Route path={`/edit_category`} element={<ListCategory/>}/>
          <Route path={`/edit_child_step`} element={<ListChildStep/>}/>
          <Route path={`/edit_lesson`} element={<ListLesson/>}/>
          <Route path={`/edit_link`} element={<ListLink/>}/>

          
          
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


          <Route path="*" element={<Home/>}/>



        </Routes>



        <Footer/>

      </BrowserRouter>


  );


}

export default App;