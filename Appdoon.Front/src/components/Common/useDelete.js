const useDelete = async(url) => {

    let message = "";
    let color = "";

    await fetch(url,{
        credentials:"include",
        method:"Delete"
    })
    .then(res=>res.json())
    .then((result)=>{
        if(result.IsSuccess){
            
            message = result.Message;
            color = "green";
            
        }
        else{
            
            message = result.Message;
            color = "red";
            
        }
    })
    .catch(error => {
        
        message = "خطایی رخ داده است!";
        color = "red";
    })


    return [message,color];    
    
}

export default useDelete