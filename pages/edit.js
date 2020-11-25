import Lock from '../public/svg/padlock.svg'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle, faTrashAlt, faEdit, faFileUpload } from "@fortawesome/free-solid-svg-icons";

function Copyright() {
    return (
        <p style={{display:"flex",justifyContent:"center"}}>
            {'Copyright © '}
            <Link href="https://ginogarcia.dev">
                
                    WebDoctor
       
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </p>
    );
}
const SignUp = () => (
    <div style={{maxWidth:600,height:"100vh", margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center"}} className="w3-padding">
        <div className="w3-center">
            <div>
                Edit User
            </div>
            <div className="w3-margin-top">
              <FontAwesomeIcon size="3x" icon={faUserCircle} ></FontAwesomeIcon>   
            </div>
            <div className="w3-button w3-border w3-margin-top">
                Upload Photo
                       <FontAwesomeIcon size="lg" icon={faFileUpload} style={{ marginLeft: 8 }}></FontAwesomeIcon>
            </div>
        </div>
    <form className="w3-container w3-border w3-margin-top" action="/action_page.php">
        <div className="w3-section">
          <label><b>Username</b></label>
          <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username *" name="usrname" required/>
            <label><b>Email Address</b></label>
            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Email Address *" name="usrname" required />
          <label><b>Password</b></label>
          <input className="w3-input w3-border" type="text" placeholder="Enter Password *" name="psw" required/>
          <button className="w3-button w3-block w3-secondary w3-section w3-padding w3-round" type="submit">Submit</button>
        </div>
      </form>

        <footer className="w3-display-bottommiddle">
            <Copyright />
        </footer>
    </div>
)



export default SignUp