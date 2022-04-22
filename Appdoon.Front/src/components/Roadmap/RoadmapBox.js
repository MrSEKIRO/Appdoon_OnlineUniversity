//import "../../assets/css/timeline/style.css";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from 'bootstrap';





const RoadmapBox = ({ data:roadmap }) => {

    let catResult = "";
    for (var i = 0; i < roadmap.Categories.length; i++) {
        catResult += roadmap.Categories[i].Name;
        if(i != roadmap.Categories.length - 1){
            catResult += " / ";
        }
    }


    return(
        <article class="blog-item">
            <figure class="figure">

                
                <div class="post-thumbnail">
                    <img src={process.env.REACT_APP_PHOTOPATH+roadmap.ImageSrc} alt={roadmap.Description}/>
                </div>



                <div class="post-title">


                    

                    <Link to= {`/roadmap/${roadmap.Id}`} className="d-block">
                        <h4>{roadmap.Title}</h4>
                    </Link>

                    


                    <span class="post-date">
                        {catResult}
                    </span>



                    
                </div>



            </figure>
        </article>
    )
}


export default RoadmapBox;