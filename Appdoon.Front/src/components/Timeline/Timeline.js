import TimelineItem from "./TimelineItem";
import React,{Component} from "react";
import "../../assets/css/timeline/style.css";
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";



import { useState } from "react";

/*const timelineData = [
    {
        text: 'اول یک زبان بکند یاد بگیر(به جز C#)',
        date: 'February 25 2019',
        category: {
			tag: 'زبان برنامه نویسی',
			color: '#b8b6ba7a'
		},
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'اینجا پیداش کن'
        },
        alignn : 'right'
    },
    {
        text: 'یک برنامه بی ارزش بنویس',
        date: 'March 04 2019',
        category: {
			tag: 'برنامه',
			color: '#b8b6ba7a'
		},
        link: {
            url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
            text: 'اینجا مثالش هست'
        },
        alignn : 'right'
    },
    {
        text: 'Got 1.000 followers on Twitter',
        date: 'March 07 2019',
        category: {
			tag: 'twitter',
			color: '#b8b6ba7a'
		},
        link: {
            url: 'https://twitter.com/florinpop1705',
            text: 'See profile'
        },
        alignn : 'left'
    },
    {
        text:
            'I published my first article in the FreeCodeCamp Medium Publication',
        date: 'March 18 2019',
        category: {
			tag: 'medium',
			color: '#b8b6ba7a'
		},
        link: {
            url:
                'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
            text: 'Check it out here'
        },
        alignn : 'left'
    },
    {
        text: 'Over 12.000 views in a single day on my Medium posts',
        date: 'April 05 2019',
        category: {
			tag: 'medium',
			color: '#b8b6ba7a'
		},
        link: {
            url: 'https://medium.com/@popflorin1705',
            text: 'See profile'
        },
        alignn : 'left'
    }
]
*/













const Timeline = () => {
    

    //e.preventDefault();

    //setIsPending(true);


    const {id} = useParams();

    const [isPending, setIsPending] = useState(false)

    const history = useNavigate()
    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLogin, setIsLogin] = useState(true)
    const url = process.env.REACT_APP_API + 'RoadMaps/IndividualRoadMap';

    useEffect(() => {

    
    

        fetch(url,{
            
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body:JSON.stringify({
                RoadMapId:id
            })
            
        }).then(res => {
            
            //console.log(res);
            
            if(!res.ok){
                
                throw Error('could not fetch!');
            }
            
            return res.json();
        })
        .then(data => {
            
            //alert(data.Data.length);
            console.log(data);
            //alert(data.Data.Id);
            setData(data.Data);
            setIsLogin(false);
            setError(null);
            //alert("sfd");
            
        }).then(() =>{
            
            //setIsPending(false);
            //console.log("New Blog added");
            //history.push(`/timeline/${id}`);
            
        })
        .catch(err => {
            
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsLogin(false);
            }
        })
    }, [url]);


    return(
        <div>
            {data && data.Id > 0 && (
                <div className='timelineBody'>
                    <h1>{data.Title} رودمپ</h1>
                    <div className="timeline-container">
                        
                        {data.Steps.map((step, idx) => (
                            <TimelineItem data={step} key={idx} />
                        ))}
                    </div>
                </div>
                )
            }

            {data && data.Id == 0 && (
                <div>
                    .رودمپ خالی است
                </div>)
            }
        </div>
    )
}


export default Timeline;



