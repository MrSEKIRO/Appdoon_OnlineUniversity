import {Link} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from 'bootstrap';
import useFetch from '../Common/useFetch';


const UserRoadmapBox = ({ data:roadmap }) => {

    let catResult = "";
    for (var i = 0; i < roadmap.Categories.length; i++) {
        catResult += roadmap.Categories[i].Name;
        if(i != roadmap.Categories.length - 1){
            catResult += " / ";
        }
    }

return(
  
    /*data from back*/
    <div class="add-group-border">
        <Link to= {`/roadmap/${roadmap.Id}`} >
        <div class="add-group"></div>
        <img src={process.env.REACT_APP_PHOTOPATH+roadmap.ImageSrc} alt={roadmap.Description}></img>
            <h3>{roadmap.Title}</h3>
        </Link>
    </div>
)
}
export default UserRoadmapBox;