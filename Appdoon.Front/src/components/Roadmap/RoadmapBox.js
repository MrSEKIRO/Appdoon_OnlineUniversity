//import "../../assets/css/timeline/style.css";
import {Link} from 'react-router-dom';

function individualRoadmap(id){
    const {data : roadmap, isLogin, error} = useFetch(process.env.REACT_APP_API+'RoadMaps/IndividualRoadMap');
    

}

const RoadmapBox = ({ data : roadmap }) => (

        <article class="blog-item">
            <figure class="figure">


                
                <div class="post-thumbnail">
                    <img src={roadmap.ImageSrc}
                        alt={roadmap.Description}/>
                </div>



                <div class="post-title">


                    <Link onClick={individualRoadmap(data.id)} to={"/"} className="d-block">
                        <h4>{roadmap.Description}</h4>
                    </Link>


                    <span class="post-date">
                        <i class="fa fa-calendar"></i>
                        {roadmap.Title}
                    </span>
                </div>



            </figure>
        </article>



);

export default RoadmapBox;