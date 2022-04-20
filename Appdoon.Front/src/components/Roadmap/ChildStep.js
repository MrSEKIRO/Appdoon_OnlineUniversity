const ChildStep = ({ data }) => (
    <div>
        <p style={{marginBottom:"-40px"}}>{data.Title}</p>

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

    </div>
);

export default ChildStep;