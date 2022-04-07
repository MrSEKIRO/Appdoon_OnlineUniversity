import React,{Component} from "react";

export class Home extends Component{


    componentDidMount() {
        document.title = "صفحه اصلی"; 
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>Home</div>
        );
    }
}