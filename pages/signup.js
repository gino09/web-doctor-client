import React from 'react'
import Lock from '../public/svg/padlock.svg'
import Link from 'next/link'
import { registerUser } from '../auth/auth-service'
import AppContext from '../context/AppContext'

const SignUp = () => {
    const [data, setData] = React.useState({ email: "", username: "", password: "" });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState({});
    const appContext = React.useContext(AppContext);

    return (
        <div style={{ maxWidth: 600, height: "100vh", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }} className="w3-padding">
            <div className="w3-center">
                <Lock style={{ width: "10%" }} />
                <div>
                    Sign Up
            </div>
            </div>
            {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                    return (
                        <div
                            key={error.messages[0].id}
                            style={{ marginBottom: 10 }}
                        >
                            <small style={{ color: "red" }}>
                                {error.messages[0].message}
                            </small>
                        </div>
                    );
                })}
            <form className="
            w3-container w3-border w3-padding"
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(`${data.username},${data.email},${data.password},`)
                    setLoading(true);
                    registerUser(data.username, data.email, data.password)
                        .then((res) => {
                            // set authed user in global context object
                            appContext.setUser(res.data.user);
                            setLoading(false);
                        })
                        .catch((error) => {
                            setError(error.response.data);
                            setLoading(false);
                        });
                }}
            >

                <label><b>Username</b></label>
                <input
                    className="w3-input w3-border w3-margin-bottom"
                    type="text"
                    placeholder="Enter Username *"
                    name="username"
                    required
                    autoComplete="true"
                    disabled={loading}
                    value={data.username}
                    onChange={(e) => {
                        setData({ ...data, username: e.target.value })
                    }}
                />
                <label><b>Email Address</b></label>
                <input
                    className="w3-input w3-border w3-margin-bottom"
                    type="email"
                    placeholder="Enter Email Address *" name="username"
                    required
                    autoComplete="true"
                    disabled={loading}
                    value={data.email}
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value })
                    }}
                />
                <label><b>Password</b></label>
                <input
                    className="w3-input w3-border"
                    type="password"
                    placeholder="Enter Password *"
                    name="password"
                    required
                    disabled={loading}
                    value={data.password}
                    autoComplete="true"
                    onChange={(e) => {
                        setData({ ...data, password: e.target.value })
                    }}
                />
                <button
                    className="w3-button w3-block w3-secondary w3-section w3-padding w3-round"
                    type="submit"
                >
                    {loading ? "Loading.." : "Sign Up"}
                </button>


                <button
                    className="w3-button w3-block w3-tertiary w3-section w3-padding w3-round"
                    onClick={() => {
                        setData(
                        {
                            email: "",
                            username: "",
                            password: ""
                        })
                        setError({})
                    }}
                    >Clear</button>

                <div className="w3-padding-bottom">
                    <Link href="/">
                        <div className="w3-button w3-red">
                            Cancel
                        </div>
                    </Link>
                </div>
            </form>

        </div>
    )
}



export default SignUp