import React,{Component} from "react";
//import{Button,Form} from 'react-bootstrap';

export class Register extends Component{
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'register',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Email:event.target.Email.value,
                Username:event.target.Username.value,
                Password:event.target.Password.value


            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert("Failed!");
        })
    }


    componentDidMount() {
        document.title = "ثبت نام"; 
    }



    render(){
        return(


            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <section className="page-account-box">
                                <div className="col-lg-6 col-md-6 col-xs-12 mx-auto">
                                    <div className="ds-userlogin">
                                        <a href="#" className="account-box-logo">digismart</a>
                                        <div className="account-box">
                                            <div className="account-box-headline">
                                                <a href="login.html" className="login-ds">
                                                    <span className="title">ورود</span>
                                                    <span className="sub-title">به دیجی اسمارت</span>
                                                </a>
                                                <a href="register.html" className="register-ds active">
                                                    <span className="title">ثبت نام</span>
                                                    <span className="sub-title">در دیجی اسمارت</span>
                                                </a>
                                            </div>
                                            <div className="Login-to-account mt-4">
                                                <div className="account-box-content">
                                                    <h4>ثبت نام در دیجی اسمارت</h4>
                                                    <form action="#" className="form-account text-right">
                                                        <div className="form-account-title">
                                                            <label for="email-phone">ایمیل / شماره موبایل</label>
                                                            <input type="text" className="number-email-input" id="email-phone" name="email-account"/>
                                                        </div>
                                                        <div className="form-account-title">
                                                            <label for="password">رمز عبور</label>
                                                            <input type="password" className="password-input" name="password-account"/>
                                                        </div>
                                                        <div className="form-auth-row">
                                                            <label for="#" className="ui-checkbox mt-1">
                                                                <input type="checkbox" value="1" name="login" id="remember"/>
                                                                <span className="ui-checkbox-check"></span>
                                                            </label>
                                                            <label for="remember" className="remember-me mr-0"><a href="#">حریم خصوصی</a> و <a href="#">شرایط قوانین </a>استفاده از سرویس های سایت دیجی‌اسمارت را مطالعه نموده و با کلیه موارد آن موافقم.</label>
                                                        </div>
                                                        <div className="form-row-account">
                                                            <button className="btn btn-primary btn-register">ثبت نام در دیجی اسمارت</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="progress-wrap">
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                    </svg>
                </div>
            </div>




        );
    }
}

/*
        <Form onSubmit={this.handleSubmit}>


            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="Email" required placeholder="Email"/>
            </Form.Group>

            <Form.Group controlId="Username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="Username" required placeholder="Username"/>
            </Form.Group>

            <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="Password" required placeholder="Password"/>
            </Form.Group>



            <Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form.Group>

        </Form>
*/


