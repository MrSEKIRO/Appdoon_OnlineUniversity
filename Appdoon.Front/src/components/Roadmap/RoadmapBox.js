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
                    <img src={process.env.REACT_APP_PHOTOPATH+roadmap.ImageSrc} alt={roadmap.Description}/>
                </div>



                <div class="post-title">


                    

                    <Link to= {`/timeline/${roadmap.Id}`} className="d-block">
                        <h4>{roadmap.Title}</h4>
                    </Link>


                    <span class="post-date">
                        {roadmap.Categories.map((data, idx) => (
                            
                            data.Name
                            + " / "
                        ))}
                    </span>



                    
                </div>



            </figure>
        </article>
    )
}


export default RoadmapBox;