import Lock from '../public/svg/padlock.svg'
import Link from 'next/link'
import React from 'react'
import AppContext from '../context/AppContext'
import { useRouter } from "next/router";
import {login} from '../auth/auth-service'

const SignIn = () => {

    const [data, setData] = React.useState({ identifier: "", password: "" });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const router = useRouter();
    const appContext = React.useContext(AppContext);

    React.useEffect(() => {
        if (appContext.isAuthenticated) {
            router.push("/"); // redirect if you're already logged in
        }
    }, []);

return (
    <div style={{ maxWidth: 600, height: "100vh", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }} className="w3-padding">
        <div className="w3-center">
            <Lock style={{ width: "10%" }} />
            <div>
                Sign In
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
        <form className="w3-container w3-border w3-padding" onSubmit={(e)=>{
            e.preventDefault()
            setLoading(true);
            login(data.identifier, data.password)
                .then((res) => {
                    setLoading(false);
                    // set authed User in global context to update header/app state
                    appContext.setUser(res.data.user);
                })
                .catch((error) => {
                    setError(error.response.data);
                    setLoading(false);
                });
        }}>
            <div className="w3-section">
                <label><b>Email Address</b></label>
                <input
                    className="w3-input w3-border w3-margin-bottom"
                    type="email"
                    name="identifier"
                    placeholder="Enter Email Address *" name="username"
                    required
                    autoComplete="true"
                    disabled={loading}
                    value={data.email}
                    onChange={(e) => {
                        setData({ ...data, identifier: e.target.value })
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
                    {loading ? "Loading.." : "Sign In"}
                </button>
                <button
                    className="w3-button w3-block w3-tertiary w3-section w3-padding w3-round"
                    onClick={() => console.log('cleared')}
                     >Clear</button>
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