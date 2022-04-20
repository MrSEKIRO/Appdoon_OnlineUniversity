//import "../../assets/css/timeline/style.css";
import ChildStep from "./ChildStep";


const Step = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag">
                {data.Title}
            </span>
            <p>{data.Description}</p>
            <br/>

            <div>
                {
                data.ChildSteps.map((childstep, idx) => (
                    <ChildStep data={childstep} key={idx} />
                ))
                }
            </div>


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

export default Step;