import React,{Component} from "react";

/*
import '../assets/css/vendor/font-awesome.min.css';
import '../assets/css/vendor/materialdesignicons.css';
import '../assets/css/vendor/bootstrap.css';
import '../assets/css/vendor/owl.carousel.min.css';
import '../assets/css/vendor/noUISlider.min.css';
import '../assets/css/vendor/nice-select.css';



import '../assets/css/main.css';
import '../assets/css/responsive.css';


import '../assets/css/vendor/jquery.jqZoom.css';
import '../assets/css/vendor/sweetalert2.min.css';
*/





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