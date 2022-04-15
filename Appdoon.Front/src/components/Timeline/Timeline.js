import TimelineItem from "./TimelineItem";
import React,{Component} from "react";
import "../../assets/css/timeline/style.css";
import ReactDOM from 'react-dom';

const timelineData = [
    {
        text: 'اول یک زبان بکند یاد بگیر(به جز C#)',
        date: 'February 25 2019',
        category: {
			tag: 'زبان برنامه نویسی',
			color: '#FFDB14'
		},
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'اینجا پیداش کن'
        }
    },
    {
        text: 'یک برنامه بی ارزش بنویس',
        date: 'March 04 2019',
        category: {
			tag: 'برنامه',
			color: '#e17b77'
		},
        link: {
            url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
            text: 'اینجا مثالش هست'
        }
    },
    {
        text: 'Got 1.000 followers on Twitter',
        date: 'March 07 2019',
        category: {
			tag: 'twitter',
			color: '#1DA1F2'
		},
        link: {
            url: 'https://twitter.com/florinpop1705',
            text: 'See profile'
        }
    },
    {
        text:
            'I published my first article in the FreeCodeCamp Medium Publication',
        date: 'March 18 2019',
        category: {
			tag: 'medium',
			color: '#018f69'
		},
        link: {
            url:
                'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
            text: 'Check it out here'
        }
    },
    {
        text: 'Over 12.000 views in a single day on my Medium posts',
        date: 'April 05 2019',
        category: {
			tag: 'medium',
			color: '#018f69'
		},
        link: {
            url: 'https://medium.com/@popflorin1705',
            text: 'See profile'
        }
    }
]



export class Timeline extends Component{

    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    

    handleSubmit(event){
        

        event.preventDefault();
        
        fetch(process.env.REACT_APP_API+'login',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({
                Email:event.target.Email_Username.value,
                Username:event.target.Email_Username.value,
                Password:event.target.Password.value


            })
        })
        
        .then(res=>res.json())
        .then((result)=>{
            if(result.IsSuccess){
                document.getElementById("login_error").style.color = "green";
                document.getElementById("login_error").innerHTML = result.Message;
            }
            else{
                document.getElementById("login_error").style.color = "red";
                document.getElementById("login_error").innerHTML = result.Message;
            }
            
            
            
        },
        (error)=>{
            document.getElementById("login_error").style.color = "red";
            document.getElementById("login_error").innerHTML = "خطایی رخ داده است!";
        })
    }



    componentDidMount() {
        document.title = "رودمپ ..."; 
    }

    render(){
        return(
            <div>
                {timelineData.length > 0 && (
                    <div className='timelineBody'>
                        <h1>... رودمپ</h1>
                        <div className="timeline-container">
                            {timelineData.map((data, idx) => (
                                <TimelineItem data={data} key={idx} />
                            ))}
                        </div>
                    </div>
                    )
                }
    
                {timelineData.length == 0 && (
                    <div>
                        .رودمپ خالی است
                    </div>)
                }
            </div>
        );
    }
}
