import React,{Component, useEffect} from "react";
import useFetch from '../Common/useFetch';
import RoadmapBox from "./RoadmapBox";
import { useState } from "react";
import "../../Modular_Css/SearchBox.css"
import CreateRoadmapModal from "../Modals/Create/CreateRoadmapModal";
import Select from 'react-select';
import Pagination from "../Pagination";

//componentDidMount() {
//    document.title = "رودمپ‌ها"; 
//}


const Roadmaps = () =>{
    const [sensetive, setSensetive] = useState(false);


    //User
    const [urlAuth, setUrlAuth] = useState(process.env.REACT_APP_API + "Authentication/InfoFromCookie")
    const {data : userInfo} = useFetch(urlAuth,sensetive);

    

    //Roadmaps
    const [urlGet, setUrlGet] = useState(process.env.REACT_APP_API + "roadmap/get");
    const [pageSize, setPageSize] = useState(9);
    const [pageNumber, setPageNumber] = useState(1);
    const [query_string_roadmaps, set_query_string_roadmaps] = useState(`${urlGet}?page_number=${pageNumber}&page_size=${pageSize}`)
    const {data} = useFetch(query_string_roadmaps,sensetive);
    const [roadmaps, setRoadmaps] = useState(null);
    const [rowCount, setRowCount] = useState(null);
    const [allPagesNumber, setAllPagesNumber] = useState(0);
    useEffect(()=>{
        //alert(data.Roadmaps)
        if(filterSelectedOptions.length != 0){
            let headers = {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

            let catsId = [];


            for(var i = 0; i < filterSelectedOptions.length; i++){
                catsId.push(filterSelectedOptions[i].value)
            }

            let body = JSON.stringify({
                CategoriesId:catsId,
                PageNumber:pageNumber,
                PageSize:pageSize
            });

            fetch(urlFilter,{
                method:"POST",
                headers:headers,
                body:body
            })
            .then(res=>res.json())
            .then((result)=>{
                if(result.IsSuccess){
                    setRoadmaps(result.Data.Roadmaps);
                    setRowCount(result.Data.RowCount)
                }
                else{
                    
                }
            })
            .catch(error => {
                
            })
        }
        else{
            setRoadmaps(data.Roadmaps);
            setRowCount(data.RowCount);
        }
    },[data])

    useEffect(()=>{
        let new_all_pages_number = Math.max(Math.ceil(rowCount/pageSize),1);
        if(new_all_pages_number){
            setAllPagesNumber(new_all_pages_number);
            handlePageNumber(Math.min(pageNumber,new_all_pages_number))
        }
        //alert(allPagesNumber)
    },[pageSize,rowCount])

    //Search Roadmap
    const [urlSearch, setUrlSearch] = useState(process.env.REACT_APP_API+'roadmap/search/');
    const handleSearch = () => {
        setFilterSelectedOptions([]);
        if(document.getElementById("search_box_info").value == ""){
            document.getElementById("search_box_info").dir = "rtl";
            setPageNumber(1);
            set_query_string_roadmaps(`${urlGet}?page_number=${1}&page_size=${pageSize}`);
        }
        else{
            document.getElementById("search_box_info").dir = "auto";
            //Query String
            
            let searched_text = document.getElementById("search_box_info").value;
            setPageNumber(1);
            const query_string_search = `${urlSearch}?searched_text=${searched_text}&page_number=${1}&page_size=${pageSize}`
            set_query_string_roadmaps(query_string_search);

        }
    }

    //Pagination Roadmap
    const handlePageNumber = (page_number) =>{
        if(document.getElementById("search_box_info").value != ""){
            setPageNumber(page_number);
            let searched_text = document.getElementById("search_box_info").value;
            set_query_string_roadmaps(`${urlSearch}?searched_text=${searched_text}&page_number=${page_number}&page_size=${pageSize}`);
        }
        else if(filterSelectedOptions.length != 0){
            setPageNumber(page_number);

            let headers = {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

            let catsId = [];


            for(var i = 0; i < filterSelectedOptions.length; i++){
                catsId.push(filterSelectedOptions[i].value)
            }

            let body = JSON.stringify({
                CategoriesId:catsId,
                PageNumber:page_number,
                PageSize:pageSize
            });

            fetch(urlFilter,{
                method:"POST",
                headers:headers,
                body:body
            })
            .then(res=>res.json())
            .then((result)=>{
                if(result.IsSuccess){
                    setRoadmaps(result.Data.Roadmaps);
                    setRowCount(result.Data.RowCount)
                }
                else{
                    
                }
            })
            .catch(error => {
                
            })
        }
        else{
            setPageNumber(page_number);
            set_query_string_roadmaps(`${urlGet}?page_number=${page_number}&page_size=${pageSize}`);
        }
    }


    //Categories
    const [urlCategories, setUrlCategories] = useState(process.env.REACT_APP_API + "category/get");
    const [pageSizeCategories, setPageSizeCategories] = useState(9999);
    const [pageNumberCategories, setPageNumberCategories] = useState(1);
    const [query_string_categories, set_query_string_categories] = useState(`${urlCategories}?page_number=${pageNumberCategories}&page_size=${pageSizeCategories}`)
    const {data : cats} = useFetch(query_string_categories,sensetive);
    const [categories, setCategories] = useState(null);
    const [rowCountCats, setRowCountCats] = useState(null);
    useEffect(()=>{
        setCategories(cats.Categories);
        setRowCountCats(cats.RowCount)
    },[cats])



    
    



    const [photoPath, setPhotoPath] = useState(process.env.REACT_APP_PHOTOPATH+"Roadmap/");

    const [selectedOptions,setSelectedOptions] = useState([]);

    const clear = () =>{
        document.getElementById("TitleRoadmap").value = null;
        document.getElementById("DescriptionRoadmap").value = null;
        document.getElementById("PhotoRoadmap").value = null;
        document.getElementById("result_message_create_roadmap").innerHTML = null;
        document.getElementById("PreviewPhotoRoadmap").src = photoPath+"1.jpg";
        setSelectedOptions([]);
    }


    const [filterSelectedOptions,setFilterSelectedOptions] = useState([]);

    const [options, setOptions] = useState([]);

    const handleChange = (selectedOptions) => {
        setFilterSelectedOptions(selectedOptions);
        handleFilter(selectedOptions);
    };

    const [urlFilter, setUrlFilter] = useState(process.env.REACT_APP_API+'roadmap/filter/');
    const handleFilter = (selectedOptions) => {
        document.getElementById("search_box_info").value = "";
        document.getElementById("search_box_info").dir = "rtl";
        if(selectedOptions.length == 0){
            setPageNumber(1);
            set_query_string_roadmaps(`${urlGet}?page_number=${1}&page_size=${pageSize}`);
            setRoadmaps(data.Roadmaps);
            setRowCount(data.RowCount);
        }
        else{
            setPageNumber(1);
            
            let headers = {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

            let catsId = [];


            for(var i = 0; i < selectedOptions.length; i++){
                catsId.push(selectedOptions[i].value)
            }

            let body = JSON.stringify({
                CategoriesId:catsId,
                PageNumber:1,
                PageSize:pageSize
            });

            fetch(urlFilter,{
                method:"POST",
                headers:headers,
                body:body
            })
            .then(res=>res.json())
            .then((result)=>{
                if(result.IsSuccess){
                    setRoadmaps(result.Data.Roadmaps);
                    setRowCount(result.Data.RowCount)
                }
                else{
                    
                }
            })
            .catch(error => {
                
            })
        }
    }

    useEffect(()=> {
        if(categories){
            const tempOptions = [];
            for(var i = 0; i < categories.length; i++){
                tempOptions.push({value: categories[i].Id, label:categories[i].Name});
            }
            setOptions(tempOptions);
        }
    },[categories,sensetive])



    const customStyleForTestsList = {

        container:(provided) => ({
            ...provided,
            minWidth:"300px",
        }),

        menuList:(provided) => ({
            ...provided,
            maxHeight:"200px",
        }),
        menu:(provided) => ({
            ...provided,
            zIndex: "9999",
        }),
        
    };
    
    return(
        <div>

            {<CreateRoadmapModal id={"createModalRoadmap"} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            <div class="nav-categories-overlay"></div>
            <div class="overlay-search-box"></div>



            <main class="main-row mb-2 mt-2">
                <div style={{marginTop:"-10px", marginBottom:"60px"}}>
                    <h1>رودمپ‌ها</h1>
                </div>

                <div class="container-main">
                    <div class="d-block">
                        <div style={{marginTop:"-23px", marginBottom:"20px"}}>


                            <div style={{float:"left" , marginTop:"0px", marginLeft:"10px", marginBottom:"10px"}}>
                                {userInfo.Role && (userInfo.Role == "Teacher" || userInfo.Role == "Admin") && <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#createModalRoadmap" variant="success" class="btn btn-success" onClick={() => {clear();}}>افزودن رودمپ‌</button>}
                            </div>

                            <div style={{width:"80%", marginRight:"20px"}} class="input-group rounded">
                                    <input style={{maxWidth:"300px"}} id="search_box_info" dir="rtl" onChange={handleSearch} type="search" class="form-control rounded" placeholder="جستجو کنید ..." aria-label="Search" aria-describedby="search-addon" />
                                    
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    {categories && (
                                        <Select 
                                            menuPlacement="bottom"
                                            placeholder="دسته‌ها را انتخاب کنید ..."
                                            isMulti={true}
                                            value={filterSelectedOptions}
                                            onChange={handleChange}
                                            options={options}
                                            styles={customStyleForTestsList}
                                        />
                                        )
                                    }

                                    
                            </div>

                            <div style={{display:"flex", width:"25%"}}>

                            </div>

                        </div>



                        <section class="content-widget">

                            

                            {roadmaps && roadmaps.length > 0 && (
                                <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-1 pr">
                                    {roadmaps.map((data, idx) => (
                                            idx%3 == 0 &&
                                            <RoadmapBox data={data} key={idx} />
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps && roadmaps.length == 0 && (
                                <div>
                                    
                                </div>)
                            }




                            {roadmaps && roadmaps.length > 0 && (
                                <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-2 pr">
                                    {roadmaps.map((data, idx) => (
                                            idx%3==1 &&
                                            <RoadmapBox data={data} key={idx} />
                                            
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps && roadmaps.length == 0 && (
                                <div>
                                    
                                </div>)
                            }


                            {roadmaps && roadmaps.length > 0 && (
                                <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-3 pr">
                                    {roadmaps.map((data, idx) => (
                                            idx%3==2 &&
                                            <RoadmapBox data={data} key={idx} />
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps && roadmaps.length == 0 && (
                                <div>
                                    
                                </div>)
                            }






                        </section>
                        <Pagination handlePageNumber={handlePageNumber} pageNumber={pageNumber} allPagesNumber={allPagesNumber}/>
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












    


























