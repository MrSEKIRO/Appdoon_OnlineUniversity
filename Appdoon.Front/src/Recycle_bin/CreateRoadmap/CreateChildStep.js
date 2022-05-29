import {NavLink} from 'react-router-dom';
import useFetch from '../Common/useFetch';
import { useState } from "react";
import useCreate from '../Common/useCreate';

const CreateChildStep = () => {

    const [urlStep, setUrlStep] = useState(process.env.REACT_APP_API + "step");
    const [urlRoadmap, setUrlRoadmap] = useState(process.env.REACT_APP_API + "roadmap");
    const [urlPost, setUrlPost] = useState(process.env.REACT_APP_API + "childstep");
    const [sensetive, setSensetive] = useState(false);
    const {data : step, errorStep} = useFetch(urlStep,sensetive);
    const {data : roadmaps, errorRoadmaps} = useFetch(urlRoadmap,sensetive);

    const [selectedRoadmapId, setSelectedRoadmapId] = useState(-1);

    const HandleMessage = (resmess,colormess,id = "result_message") => {
        document.getElementById(id).style.color = colormess;
        document.getElementById(id).innerHTML = resmess;
        setSensetive(!sensetive);
    }

    const HandleCreate = async(event) => {
        event.preventDefault();

        if(event.target.Roadmap.options[event.target.Roadmap.selectedIndex].value == "default"){
            HandleMessage("یک رودمپ انتخاب کنید!","red");
            throw "یک رودمپ انتخاب کنید!"; 
        }

        if(event.target.Step.options[event.target.Step.selectedIndex].value == "default"){
            HandleMessage("یک قدم انتخاب کنید!","red");
            throw "یک قدم انتخاب کنید!"; 
        }

        let header = {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }

        let body = JSON.stringify({
            Title:event.target.Title.value,
            Description:event.target.Description.value,
            Link:event.target.Link.value,
            StepId:event.target.Step.options[event.target.Step.selectedIndex].value,
            Linkers:inputFields
        })
        
        const [resmess, colormess] = await useCreate(urlPost,body,header);
        HandleMessage(resmess,colormess);

    }

    const handleChange = (event) =>{
        event.preventDefault();
        setSelectedRoadmapId(event.target.options[event.target.selectedIndex].value);
    }



    const [inputFields, setInputFields] = useState([
        { LinkTitle: '', LinkURL: '' }
    ]);

    const handleFormChange = (index, event) => {
        //alert(event.target.name)
        let linkdata = [...inputFields];
        linkdata[index][event.target.name] = event.target.value;
        setInputFields(linkdata);
    }

    const addFields = () => {
        let newfield = { LinkTitle: '', LinkURL: '' }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = () => {
        if(inputFields.length > 1){
            let linkdata = [...inputFields];
            linkdata.splice(inputFields.length-1, 1)
            setInputFields(linkdata)
        }
    }

    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-lg">
                        <section class="page-account-box">
                            <div class="col-lg-6 col-md-6 col-xs-12 mx-auto">
                                <div class="ds-userlogin">
                                    <a href="#" className="account-box-logo">Appdoon</a>
                                    <div class="account-box">
                                        <div class="account-box-headline">

                                            
                                            
                                            <NavLink to="/create_roadmap" class="login-ds">
                                                <span class="title">رودمپ</span>
                                                <span class="sub-title">قالب رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/create_category" class="register-ds">
                                                <span class="title">دسته‌</span>
                                                <span class="sub-title">دسته‌بندی رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/create_step" class="register-ds">
                                                <span class="title">قدم‌</span>
                                                <span class="sub-title">مراحل رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/create_child_step" class="register-ds active">
                                                <span class="title">محتوا‌</span>
                                                <span class="sub-title">محتوا‌ قدم‌ها</span>
                                            </NavLink>
                                            <NavLink to="/create_lesson" class="register-ds">
                                                <span class="title">مقاله</span>
                                                <span class="sub-title">مقاله درونی</span>
                                            </NavLink>



                                        </div>
                                        <div class="Login-to-account mt-4">
                                            <div class="account-box-content">
                                                <h4>ساخت محتوا</h4>
                                                <form onSubmit={HandleCreate} action="#" class="form-account text-right">





                                                    <div class="form-account-title">
                                                        <label for="Title">نام محتوا</label>
                                                        <input dir='auto' type="text" class="number-email-input" name="Title"/>
                                                    </div>

                                                    
                                                    <div class="form-account-title">
                                                        <label for="Description">توضیحات</label>
                                                        <textarea dir='auto' class="number-email-input" name="Description"/>
                                                    </div>

                                                    <div class="form-account-title">
                                                        <label for="Link">لینک اصلی محتوا</label>
                                                        <input dir='auto' type="text" class="number-email-input" name="Link"/>
                                                    </div>






                                                    <div class="form-account-title">
                                                        <label for="Roadmap">رودمپ‌</label>
                                                        {roadmaps.length > 0 && (
                                                            <select onChange={handleChange} name = "Roadmap" class="form-select" aria-label="Default select example">
                                                                <option value="default">
                                                                    انتخاب کنید
                                                                </option>
                                                                {roadmaps.map((data, idx) => (
                                                                    <option value={data.Id}>
                                                                        {data.Title}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            )
                                                        }
                                                        
                                                        {roadmaps.length == 0 &&(
                                                                <div></div>
                                                            )
                                                        }
                                                    </div>

                                                    <div class="form-account-title">
                                                        <label for="Step">قدم</label>
                                                        {step.length > 0 && (
                                                            <select id ="SelectStepId" name = "Step" class="form-select" aria-label="Default select example">
                                                                <option value="default">
                                                                    انتخاب کنید
                                                                </option>
                                                                {step.map((data, idx) => (
                                                                    selectedRoadmapId == data.RoadMapId &&
                                                                    <option value={data.Id}>
                                                                        {data.Title}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            )
                                                        }
                                                        
                                                        {step.length == 0 &&(
                                                                <div></div>
                                                            )
                                                        }
                                                    </div>

                                                    <div class="form-account-title">
                                                        <p style={{fontSize:"15px"}}>لینک‌های محتوا</p>
                                                    </div>
                                                    
                                                    <div style={{display:"flex", textAlign:"center"}}>
                                                        <div style={{flex:"50%"}} class="form-account-title">
                                                            <label for="LinkTitle">عنوان لینک</label>
                                                        </div>

                                                        <div style={{flex:"50%"}} class="form-account-title">
                                                            <label for="LinkURL">URL لینک</label>
                                                        </div>
                                                    </div>

                                                    {inputFields.map((input, index) => {
                                                    return (
                                                        <div style={{display:"flex", textAlign:"center"}}  key={index}>
                                                            <div style={{flex:"50%"}} class="form-account-title">
                                                                
                                                                <input dir='auto' style={{width:"95%"}}
                                                                class="number-email-input"
                                                                name='LinkTitle'
                                                                onChange={event => handleFormChange(index, event)}/>
                                                            </div>

                                                            <div style={{flex:"50%"}} class="form-account-title">
                                                                
                                                                <input dir='auto' style={{width:"95%"}}
                                                                class="number-email-input"
                                                                name='LinkURL'
                                                                onChange={event => handleFormChange(index, event)}/>
                                                            </div>
                                                        </div>
                                                    )
                                                    })}
                                                    <div class="form-row-account">
                                                        <div>
                                                            <a style={{width:"20%" , marginLeft:"10px" ,color:"black"}} class="btn btn-primary btn-login" onClick={addFields}>لینک بیشتر</a>
                                                            <a style={{width:"20%" ,color:"black"}} class="btn btn-primary btn-login" onClick={() => removeFields()}>حذف لینک</a>
                                                        </div>
                                                    </div>




                                                    <div style={{marginTop : "-20px", marginBottom : "-20px"}}>
                                                        <p style={{fontSize : "14px"}} id="result_message"></p>
                                                    </div>

                                                    <div class="form-row-account">
                                                        <button name='submit' variant="primary" type="submit" class="btn btn-primary btn-login">ساخت محتوا</button>
                                                    </div>






                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    );
}


export default CreateChildStep;
