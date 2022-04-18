//import "../../assets/css/timeline/style.css";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from 'bootstrap';





const RoadmapBox = ({ data:roadmap }) => {




    return(
        <article class="blog-item">
            <figure class="figure">

                
                <div class="post-thumbnail">
                    <img src={roadmap.ImageSrc} alt={roadmap.Description}/>
                </div>



                <div class="post-title">


                    

                    <Link to= {`/timeline/${roadmap.Id}`} className="d-block">
                        <h4>{roadmap.Description}</h4>
                    </Link>


                    <span class="post-date">
                        <i class="fa fa-calendar"></i>
                        {roadmap.Title}
                    </span>



                    
                </div>



            </figure>
        </article>
    )
}


export default RoadmapBox;