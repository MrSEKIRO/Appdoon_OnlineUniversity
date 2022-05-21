//import "../../assets/css/timeline/style.css";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from 'bootstrap';

import "../../Modular_Css/RoadmapBox.css"





const RoadmapBox = ({ data:roadmap }) => {
    const [photoPath, setPhotoPath] = useState(process.env.REACT_APP_PHOTOPATH+"Roadmap/");

    let catResult = "";
    for (var i = 0; i < roadmap.Categories.length; i++) {
        catResult += roadmap.Categories[i].Name;
        if(i != roadmap.Categories.length - 1){
            catResult += " / ";
        }
    }


    function stars(){
        let A = "";
        for(var i = 0; i < 5-roadmap.Stars; i++){
            A += '<span class="fa fa-star"></span>';
        }
        for(var i = 0; i < roadmap.Stars; i++){
            A += '<span class="fa fa-star checked"></span>';
        }
        return A;
    }

    useEffect( ()=>{
        document.getElementById(roadmap.Id).innerHTML = stars();
    }, [roadmap]);

    


    return(
        <article class="blog-item">
            <figure class="figure">

                <Link to= {`/roadmap/${roadmap.Id}`} >

                    <div class="post-thumbnail" >
                        <img src={photoPath+roadmap.ImageSrc} alt={roadmap.Description}/>
                    </div>

                    

                    <div class="post-title">

                        <Link to= {`/roadmap/${roadmap.Id}`} className="d-block">
                                <h4>{roadmap.Title}</h4>
                        </Link>

                        <span class="post-date">
                            {catResult}
                        </span>

                        <span className="star" id = {roadmap.Id}>
                        </span>


                    </div>
                
                </Link>



            


            </figure>
        </article>
    );
}


export default RoadmapBox;