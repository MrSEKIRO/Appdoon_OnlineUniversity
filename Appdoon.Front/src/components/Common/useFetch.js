import { useState } from "react";
import { useEffect } from "react";


const useFetch = (url,sensetive) =>{

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal : abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch!');
                }
                return res.json();
            })
            .then(data => {
                //alert(data.Message);
                setData(data.Data);
                setError(null);
                
                
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setError(err.message);
                }
            })

        return () => abortCont.abort();

    }, [url,sensetive]);

    return {data, error};
}

export default useFetch;