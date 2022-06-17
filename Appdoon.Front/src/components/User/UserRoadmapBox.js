import {NavLink} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from 'bootstrap';
import useFetch from '../Common/useFetch';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';


const UserRoadmapBox = ({ data:roadmap }) => {

    const [cookies, setCookie] = useCookies(['Appdoon_Auth']);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!cookies.Appdoon_Auth){
            navigate('/login')
        }
    },[cookies])

    let catResult = "";
    for (var i = 0; i < roadmap.Categories.length; i++) {
        catResult += roadmap.Categories[i].Name;
        if(i != roadmap.Categories.length - 1){
            catResult += " / ";
        }
    }

return(
    cookies.Appdoon_Auth &&
    /*data from back*/
    <div class="add-group-border">
        <NavLink to= {`/roadmap/${roadmap.Id}`} >
        <div class="add-group"></div>
        <img src={process.env.REACT_APP_PHOTOPATH+roadmap.ImageSrc} alt={roadmap.Description}></img>
            <h3>{roadmap.Title}</h3>
        </NavLink>
    </div>
)
}
export default UserRoadmapBox;