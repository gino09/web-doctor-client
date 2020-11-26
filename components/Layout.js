import React from 'react'
import Logo from '../public/svg/logo.svg'
import Flag from '../public/svg/flag.svg'

import Person from '../public/svg/person.svg'
import Link from 'next/link'
import {logout} from '../auth/auth-service'
import AppContext from '../context/AppContext'
import Head from "next/head";

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

const Layout = ({children }) => {
    const title = "Welcome to Nextjs";
    const { user, setUser } = React.useContext(AppContext);
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-card w3-cell-row">
                    <div className="w3-bar-item w3-button w-cell" style={{ paddingLeft: 0 }}>
                        <div className="w3-container w3-cell-row">
                            <Link href="/">
                                <div className="w3-cell-middle w3-button">
                                    <Logo />
                                    <div className="w3-hide-xs">webDoctor</div>
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
                            {user ? <div className="w3-dropdown-content w3-bar-block">
                                <div className="w3-bar-item w3-button">{user && user.username.slice(0, 10)}</div>
                                <Link href="/user">
                                <div className="w3-bar-item w3-button" >dashboard</div>
                                </Link>
                                <Link href="/" ><div className="w3-bar-item w3-button" onClick={()=>{
                                    logout()
                                    setUser(null)
                                }}>signout</div></Link>
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

        </div>
    )
}

export default Layout