import Logo from '../public/svg/logo.svg'
import Flag from '../public/svg/flag.svg'

import Person from '../public/svg/person.svg'
import Link from 'next/link'


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

const Layout = ({ auth, children }) => {
    return (
        <>
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-card w3-cell-row">
                    <div className="w3-bar-item w3-button w-cell" style={{ paddingLeft: 0 }}>
                        <div className="w3-container w3-cell-row">
                            <Link href="/">
                                <div className="w3-cell-middle">
                                    <Logo />
                                    <div></div>
                            webDoctor
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w3-bar-item w3-right">
                        {/* <a href="#projects" className="w3-bar-item w3-button">
                        <Cart />
                    </a> */}
                        {/* <a href="#about" className="w3-bar-item w3-button">
                        <Contact />
                    </a> */}
                        <div className="w3-dropdown-hover" >
                            <button className="w3-button"><Person /></button>
                            {auth ? <div className="w3-dropdown-content w3-bar-block">
                                <Link href="/user" ><div className="w3-bar-item w3-button">dashboard</div></Link>
                                <a href="#" className="w3-bar-item w3-button">signout</a>
                            </div> :
                                <div className="w3-dropdown-content w3-bar-block">
                                    <Link href="/signin" ><div className="w3-bar-item w3-button">sign in</div></Link>
                                </div>
                            }
                        </div>
                        <div className="w3-bar-item">
                            <Flag />
                        </div>
                    </div>

                </div>
            </div>
            {children}
            <footer>
              <Copyright/>  
            </footer>

        </>
    )
}

export default Layout