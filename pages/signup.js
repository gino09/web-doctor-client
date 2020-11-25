import Lock from '../public/svg/padlock.svg'
import Link from 'next/link'

const SignUp = () => (
    <div style={{maxWidth:600,height:"100vh", margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center"}} className="w3-padding">
        <div className="w3-center">
            <Lock style={{width:"10%"}}/>
            <div>
                Sign Up
            </div>
        </div>
    <form className="w3-container w3-border w3-padding">
        <div className="w3-section">
          <label><b>Username</b></label>
          <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username *" name="usrname" required/>
            <label><b>Email Address</b></label>
            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Email Address *" name="usrname" required />
          <label><b>Password</b></label>
          <input className="w3-input w3-border" type="text" placeholder="Enter Password *" name="psw" required/>
          <button className="w3-button w3-block w3-secondary w3-section w3-padding w3-round" type="submit">Login</button>
        <input className="w3-button w3-block w3-tertiary w3-section w3-padding w3-round" type="reset" value="Clear"/>
        </div>
            <div className="w3-padding-bottom">
                <Link href="/"><div className="w3-button w3-red">Cancel</div></Link>
            </div>
      </form>

    </div>
)



export default SignUp