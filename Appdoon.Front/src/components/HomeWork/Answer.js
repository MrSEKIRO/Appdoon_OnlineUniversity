import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import "../../Modular_Css/Questions.css";
import Roadmap from '../Roadmap/Roadmap';


const Answer = (props) => {
    
    let answers = Object.keys(props.answer)
    .map((qAnswer, i) => (
        <li
        className=
        {
            props.correctAnswer === qAnswer ?
            'correct' : 
            props.clickedAnswer === qAnswer ? 
            'incorrect' : ''
        }
        onClick={() => props.checkAnswer(qAnswer)}
        key={qAnswer}>
            {props.answer[qAnswer]}
        </li>
    ));

    return (
        <>
            <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                {answers}
            </ul>
            <div>
                {
                    props.correctAnswer ?
                    'Correct Answer!' : 
                    props.clickedAnswer ? 'Incorrect Answer!' : ''
                }
            </div>
        </>
    );

}
export default Answer;