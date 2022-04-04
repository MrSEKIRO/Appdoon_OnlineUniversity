import React,{Component} from "react";
import{Button,Form} from 'react-bootstrap';

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




    render(){
        return(


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




        );
    }
}




