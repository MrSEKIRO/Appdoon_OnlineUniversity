import TimelineItem from "./TimelineItem";
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


const Timeline = () =>
    timelineData.length > 0 && (
        <div className='timelineBody'>
            <h1>... رودمپ</h1>
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    )
    
    timelineData.length == 0 && (
        <div>
            .رودمپ خالی است
        </div>
    )
    
    ;

export default Timeline;