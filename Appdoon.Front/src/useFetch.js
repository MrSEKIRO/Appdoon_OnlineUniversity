import { useState } from "react";
import { useEffect } from "react";


const useFetch = (url) =>{

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        //console.log("usedEffect Used");
        
        const abortCont = new AbortController();

        fetch(url, {signal : abortCont.signal })
            .then(res => {
                
                //console.log(res);
                if(!res.ok){
                    throw Error('could not fetch!');
                }
                
                return res.json();
            })
            .then(data => {
                //alert(data.Data.length);
                setData(data.Data);
                setIsLogin(false);
                setError(null);
                
                
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

        return () => abortCont.abort();

    }, [url]);

    return {data, isLogin, error};
}

export default useFetch;