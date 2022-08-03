import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

function SignUp() {

        return (

            <div className="sign1" >
            <form className='sign2' >
                <h3>Register</h3>

                <div className="form-group sign3">
                    <label>First name</label>
                    <input type="text" className="form-control sign6" placeholder="First name" />
                </div>

                <div className="form-group sign4">
                    <label>Last name</label>
                    <input type="text" className="form-control sign6" placeholder="Last name" />
                </div>

                <div className="form-group sign5">
                    <label>Email</label>
                    <input type="email" className="form-control sign6" placeholder="Enter email" />
                </div>

                <div className=" sign9">
                    <label>Password</label>
                    <input type="password" className="form-control sign6" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block sign7">Register</button>
                <p className="forgot-password text-right sign8">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </form>
            </div>
        );
    
}
export default SignUp










































































