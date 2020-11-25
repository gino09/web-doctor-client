import Lock from '../public/svg/padlock.svg'
import Link from 'next/link'
import React from 'react'
import {postLogin} from '../services/rest-service.ts'

const SignIn = () => {

    const [inputs, setInputs] = React.useState({
        identifier: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        postLogin(inputs)
    };
    const handleInputChange = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div style={{ maxWidth: 600, height: "100vh", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }} className="w3-padding">
            <div className="w3-center">
                <Lock style={{ width: "10%" }} />
                <div>
                    Sign In
            </div>
            </div>
            <form className="w3-container w3-border w3-padding" onSubmit={handleSubmit}>
                <div className="w3-section">
                    <label><b>Email Address</b></label>
                    <input
                        className="w3-input w3-border w3-margin-bottom" type="email"
                        placeholder="Enter Email Address *"
                        name="identifier"
                        id="email"
                        onChange={handleInputChange}
                        value={inputs.identifier}
                        required />
                    <label><b>Password</b></label>
                    <input
                        className="w3-input w3-border"
                        type="password"
                        id="password"
                        placeholder="Enter Password *"
                        name="password"
                        onChange={handleInputChange}
                        value={inputs.password}
                        required />
                    <button className="w3-button w3-block w3-secondary w3-section w3-padding w3-round" type="submit">Sign In</button>
                    <input className="w3-button w3-block w3-tertiary w3-section w3-padding w3-round" type="reset" value="Clear"/>
                    <div>
                        <input
                            className="w3-check w3-margin-top"
                            type="checkbox"
                        />
            Remember me
          <span className="w3-right w3-margin-top w3-padding">Not registered? <Link href="/signup"><span className="w3-button w3-secondary ">Sign Up</span></Link></span>

                    </div>

                </div>
                <div className="w3-padding-bottom">
                    <Link href="/"><div className="w3-button w3-red">Cancel</div></Link>
                    <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
                </div>

            </form>
        </div>
    )
}



export default SignIn