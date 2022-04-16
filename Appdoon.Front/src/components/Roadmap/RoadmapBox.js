//import "../../assets/css/timeline/style.css";


const RoadmapBox = ({ data : roadmap }) => (

        <article class="blog-item">
            <figure class="figure">


                
                <div class="post-thumbnail">
                    <img src={roadmap.ImageSrc}
                        alt={roadmap.Description}/>
                </div>



                <div class="post-title">


                    <a href="#" class="d-block">
                        <h4>{roadmap.Description}</h4>
                    </a>


                    <span class="post-date">
                        <i class="fa fa-calendar"></i>
                        {roadmap.Title}
                    </span>
                </div>



            </figure>
        </article>



);

export default RoadmapBox;