//import "../../assets/css/timeline/style.css";


const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag">
                {data.Title}
            </span>
            <p>{data.Description}</p>
            {data.Link && (
                <a
                    href={data.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.Title}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;