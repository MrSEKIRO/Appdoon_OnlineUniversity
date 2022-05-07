import React,{Component} from "react";
import useFetch from "../../useFetch";
import RoadmapBox from "./RoadmapBox";

//componentDidMount() {
//    document.title = "رودمپ‌ها"; 
//}


const Roadmaps = () =>{
    const {data : roadmaps, isLogin, error} = useFetch(process.env.REACT_APP_API+'RoadMaps/Index');
    //alert(roadmaps.Data.length);
    return(
        <div>

            
            <div class="nav-categories-overlay"></div>
            <div class="overlay-search-box"></div>



            <main class="main-row mb-2 mt-2">
                <div class="container-main">
                    <div class="d-block">
                        <section class="content-widget">




                            

                            {roadmaps.length > 0 && (
                                <div class="col-12 col-md-4 col-lg-4 col-xl-5 items-1 pr">
                                    {roadmaps.map((data, idx) => (
                                            idx%3 == 0 &&
                                            <RoadmapBox data={data} key={idx} />
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps.length == 0 && (
                                <div>
                                    
                                </div>)
                            }




                            {roadmaps.length > 0 && (
                                <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-2 pr">
                                    {roadmaps.map((data, idx) => (
                                            idx%3==1 &&
                                            <RoadmapBox data={data} key={idx} />
                                            
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps.length == 0 && (
                                <div>
                                    
                                </div>)
                            }


                            {roadmaps.length > 0 && (
                                <div class="col-12 col-md-4 col-lg-4 col-xl-3 items-3 pr">
                                    {roadmaps.map((data, idx) => (
                                            idx%3==2 &&
                                            <RoadmapBox data={data} key={idx} />
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps.length == 0 && (
                                <div>
                                    
                                </div>)
                            }















                                {/*

                                {roadmaps.length > 0 && (
                                    <div>
                                        {roadmaps.map((data, idx) => (
                                            <div>
                                                


                                                <div class="col-12 col-md-4 col-lg-4 col-xl-5 items-1 pr">


                                                    <RoadmapBox data={data} key={idx} />
                                                
                                                    
                                                </div>
                
                
                
                
                                                <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-2 pr">
                                                    <RoadmapBox data={data} key={idx} />
                                                </div>
                
                
                
                
                
                
                                                <div class="col-12 col-md-4 col-lg-4 col-xl-3 items-3 pr">
                                                    <RoadmapBox data={data} key={idx} />
                                                </div>
                                            
                                            </div>


                                        ))}
                                    </div>
                                    )
                                }
                    
                                {roadmaps.length == 0 && (
                                    <div>
                                        .رودمپی وحود ندارد
                                    </div>)
                                }

                                */}






                        </section>

                    </div>
                </div>
            </main>




            <div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>



            
            {/*<div class="P-loader">
                <div class="P-loader-content">
                    <div class="logo-loader">
                        <img src="assets/images/logo.png" alt="logo"/>
                    </div>
                    <div class="pic-loader text-center">
                        <img src="assets/images/three-dots.svg" width="50" alt=""/>
                    </div>
                </div>
            </div>
            */}


        </div>
        );
}
export default Roadmaps;












    

























