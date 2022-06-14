import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import "../../Modular_Css/Questions.css";
import Roadmap from '../Roadmap/Roadmap';
import Question from './Question';
import Answer from './Answer';
import React, {Component} from 'react';


export default class All_Questions extends Component {
     state = {
        quiestions: {
            1: 'بزرگترین قاره جهان چه نام دارد؟',
            2: 'برای یک موجودیت که تنها شامل مقدار است از کدام گزینه استفاده میکنید؟',
            3: 'کدام نوع پیماش زمان کمتری میبرد؟'
        },
        answers: {
            1: {
                1: 'اروپا',
                2: 'آمریکا',
                3: 'آسیا'
            },
            2: {
                1: 'کلاس',
                2: 'استراکت',
                3: 'پراپرتی'
            },
            3: {
                1: 'BFS',
                2: 'DFS',
                3: 'DIJEKSTRA'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
        nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
    let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;

    return(
        <div>
            <div class="post-item-cart d-block order-2">
                 <div class="content-page">
                     <div class="cart-form">


                        <div className="Content">
                            {step <= Object.keys(quiestions).length ? 
                                (<>
                                    <Question
                                        question={quiestions[step]}
                                    />
                                    <Answer
                                        answer={answers[step]}
                                        step={step}
                                        checkAnswer={this.checkAnswer}
                                        correctAnswer={correctAnswer}
                                        clickedAnswer={clickedAnswer}
                                    />
                                    <button
                                    className="NextStep"
                                    disabled={
                                        clickedAnswer && Object.keys(quiestions).length >= step
                                        ? false : true
                                    }
                                    onClick={() => this.nextStep(step)}>Next</button>
                                </>) : (
                                    <div className="finalPage">
                                        <h1>You have completed the quiz!</h1>
                                        <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                                        <p>Thank you!</p>
                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
}
