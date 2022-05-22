import React,{Component} from "react";
import useFetch from '../Common/useFetch';
import RoadmapBox from "./RoadmapBox";
import { useState } from "react";
import "../../Modular_Css/SearchBox.css"

//componentDidMount() {
//    document.title = "رودمپ‌ها"; 
//}


const Roadmaps = () =>{
    const {data : roadmaps, isLogin, error} = useFetch(process.env.REACT_APP_API+'roadmap');
    
    //alert(roadmaps.Data.length);
    return(
        <div>
            <div class="nav-categories-overlay"></div>
            <div class="overlay-search-box"></div>



            <main class="main-row mb-2 mt-2">
                <div class="container-main">
                    <div class="d-block">
                        <div style={{float:"left" , marginTop:"-5px", marginLeft:"10px", marginBottom:"10px"}}>
                            <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#editModalLesson" variant="success" class="btn btn-success" onClick={() => {}}>افزودن رودمپ‌</button>
                        </div>
                        <section class="content-widget">
                            <div style={{width:"25%", margin:"-10px 20px 20px 0px"}}>
                                <form class="example" action="action_page.php">
                                    <input type="text" placeholder="جستجو ..." name="search"/>
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                            

                            {roadmaps.length > 0 && (
                                <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-1 pr">
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
                                <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-3 pr">
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






                        </section>

                    </div>
                </div>
            </main>

            <div class="pagination-product pr-3 pl-3 pr">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link active" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">...</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">8</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


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












    


























