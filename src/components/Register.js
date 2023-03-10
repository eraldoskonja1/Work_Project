import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Register = (props) => {

    let history = useNavigate();
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
    })

    const handleChange =(e)=> {
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data);
    }

    const submitForm =(e)=> {
        e.preventDefault();
        const sendData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
        }
        // console.log(sendData);

        axios.post('http://localhost/loginsystem/backend/insert.php',sendData).then((result)=>{
        if (result.data.Status == 'invalid') {
            alert('Invalid User');
        }
        else {
            history(`/home`);
        }
       })
    } 

//    function click(){
//         axios.post('http://localhost/loginsystem/backend/insert.php').then(response=>{
//             console.log(response)
//         });
       
    return(
        <div className="main-box">
            <form onSubmit={submitForm}>
            <div className="row">
               <div className="col-md-12 text-center"><h1>Register</h1></div>
            </div>
        
              <div className="row">
                 <div className="col-md-6">First Name</div>
                 <div className="col-md-6">
                    <input type="text" name="first_name" className="form-control" 
                    onChange={handleChange} value={data.first_name}
                    />
                 </div>
              </div>

              <div className="row">
                 <div className="col-md-6">Last Name</div>
                 <div className="col-md-6">
                    <input type="text" name="last_name" className="form-control" 
                    onChange={handleChange} value={data.last_name}
                    />
                 </div>
              </div>

              <div className="row">
                 <div className="col-md-6">Email</div>
                 <div className="col-md-6">
                    <input type="text" name="email" className="form-control" 
                    onChange={handleChange} value={data.email}
                    />
                 </div>
              </div>

              <div className="row">
                 <div className="col-md-6">Password</div>
                 <div className="col-md-6">
                    <input type="password" name="password" className="form-control" 
                    onChange={handleChange} value={data.password}
                    />
                 </div>
              </div>

              <div className="row">
                 <div className="col-md-12">
                    <input type="submit" name="submit" value="Register" className="btn btn-success" />
                 </div>
              </div>
            </form>
        </div>
    )
}

export default Register;