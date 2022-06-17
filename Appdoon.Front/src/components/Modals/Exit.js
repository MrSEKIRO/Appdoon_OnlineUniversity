import React from "react";
import { useState } from "react";
import useFetch from "../Common/useFetch";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../../Modular_Css/EditRoadmapModal.css";


function DeleteChildStepModal({id}) {

    const [sensetive, setSensetive] = useState(false);
    const [url, setUrl] = useState(process.env.REACT_APP_API + 'authentication/usersignout');
    let navigate = useNavigate();

    const HandleExit = (event) =>{
        event.preventDefault();

        fetch(url, {credentials:"include"})
            .then(res => {
                if(!res.ok){
                    alert("sd")
                    throw Error('could not fetch!');
                }
                return res.json();

            })
            .then(data => {
                
                setTimeout(() => {
                    window.location.href="/login";
                }, 100);
                

            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    console.log(err.message);
                }
            })
        
    }


    return (
        <div style={{top: "1%"}} dir="rtl" class="modal fade" id={id} role="dialog">
            <div style={{marginBottom:"50px", maxWidth: "550px"}} class="modal-dialog">
            
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">خروج</h4>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={HandleExit} action="/login" id="exit">
                            <p>جدا میخواهید خارج شوید؟</p>
                        </form>
                        
                        
                    </div>
                    <div class="modal-footer">
                        <div style={{width:"100%"}}>
                            <p style={{fontSize : "14px", float:"right", marginTop:"8px", marginBottom:"-8px"}} id="result_message_exit"></p>
                            <button style={{float:"left"}} type="submit" form="exit" class="btn btn-danger">خروج</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default DeleteChildStepModal;