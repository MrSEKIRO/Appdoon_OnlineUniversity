import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import "../../Modular_Css/Questions.css";
import Roadmap from '../Roadmap/Roadmap';


const Question = (props) => {

    return(
        <div className="questionBox">
            <p className="pp">{props.question}</p>
        </div>
    );

}
export default Question;