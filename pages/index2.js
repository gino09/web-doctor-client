import Logo from '../public/svg/logo.svg'
import Cart from '../public/svg/cart.svg'
import Contact from '../public/svg/contact.svg'
import Person from '../public/svg/person.svg'
import JamStack from '../public/svg/jamstack.svg'
import Responsive from '../public/svg/responsive.svg'
import SearchEngine from '../public/svg/searchengine.svg'
import Gears from '../public/svg/gears.svg'
import Link from 'next/link'
import appText from '../components/appText'

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

const Index = () => (
    <>
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-content w3-card w3-cell-row">
                <a href="#home" className="w3-bar-item w3-button w-cell w3-padding">
                    <div className="w3-container w3-cell-row">
                        <div className="w3-cell-middle">
                            <Logo />
                        </div>
                        <div className="w3-cell-middle">
                            webDoctor
                            </div>
                    </div>
                </a>
                <div className="w3-bar-item w3-right w3-hide-small w3-padding">
                    <a href="#projects" className="w3-bar-item w3-button">
                        <Cart />
                    </a>
                    <a href="#about" className="w3-bar-item w3-button">
                        <Contact />
                    </a>
                    <a href="#contact" className="w3-bar-item w3-button">
                        <Person />
                    </a>
                </div>
            </div>
        </div>
        <main className="w3-display-container w3-content" style={{ marginTop: 80 }}>
            <div className="w3-cell-row">
                <div className="w3-container w3-tertiary w3-cell" style={{ height: 400 }}>
                </div>
                <div class="w3-container w3-secondary w3-cell" style={{ height: 400 }}>
                </div>
            </div>
            <div style={{ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 48, left: 0, top: 0, bottom: 0, color: "#4A4E4B" }}>
                <div className="w3-xxlarge" style={{ width: "70%" }}>
                    Build discoverable and fast web application optimized for User Experience.
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button className="w3-button w3-round-large w3-xxlarge w3-primary-button ">Get Request</button>
                    <JamStack style={{ width: "44%" }} />
                </div>
            </div>
        </main>
        <section>
            <div className="w3-display-container w3-content">
                <div className="w3-cell-row">
                    <div className="w3-container w3-secondary w3-cell" style={{ height: 320 }}>
                    </div>
                    <div className="w3-container w3-tertiary w3-cell" style={{ height: 320 }}>
                    </div>
                </div>
                <div style={{
                    position: "absolute", display: "flex",
                    flexDirection: "column", justifyContent: "space-between", padding: 48, left: 0, top: 0, bottom: 0, color: "#4A4E4B"
                }}>
                    <div className="w3-xlarge" style={{ width: "80%" }}>
                        Mobile First Responsive Screen Size
                    </div>
                    <div>
                        <Responsive style={{ width: "80%" }} />
                    </div>
                </div>
                <div style={{
                    position: "absolute", display: "flex",
                    flexDirection: "column", justifyContent: "space-between", padding: 48, left: "50%", top: 0, bottom: 0, color: "#4A4E4B"
                }}>
                    <div className="w3-xlarge" style={{ width: "80%" }}>
                        Search Engine Optimization
                    </div>
                    <div className="w3-xlarge" style={{ width: "80%" }}>
                        High Compute Performance
                    </div>
                </div>
                <div style={{
                    position: "absolute", display: "flex",
                    flexDirection: "column", justifyContent: "space-between", padding: 48, left: "75%", top: 0, bottom: 0, color: "#4A4E4B"
                }}>
                    <SearchEngine style={{ width: "70%" }} />
                    <Gears style={{ width: "70%" }} />
                </div>
            </div>
        </section>
        <section>
            <div className="w3-content">
                {appText.en.tiers.map((tier, id) => (
                    <div className="w3-col s12 m6 l4 w3-margin-bottom w3-margin-top">
                        <div key={id} style={{ margin: 4 }}>
                            <ul className="w3-ul w3-border w3-center w3-hover-shadow w3-round-large">
                                <li className="w3-tertiary w3-xlarge w3-padding-16 border-radius-top">{tier.title}</li>
                                <div className="w3-container">
                                    <span className="w3-xlarge">${tier.price}</span>
                                    <span className=" w3-opacity" style={{marginLeft:2}}>per month</span>
                                </div>
                                {tier.description.map((tier,id) => (
                                    <p key={id} className="w3-container"><b>
                                        &#xb7;{tier}</b> Storage</p>
                                ))}
                                <li className="w3-padding-16 border-radius-bottom">
                                    <button className="w3-button w3-secondary w3-padding-medium w3-block w3-round-large">Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                ))}
            </div>
            <div className="w3-container w3-content w3-xlarge">
                Contact
            </div>
            <form className="w3-content w3-margin-top">

                <label className=""><b>First Name</b></label>
                <input className="w3-input w3-border w3-round-large" type="text" />

                <label className=""><b>Last Name</b></label>
                <input className="w3-input w3-border w3-round-large" type="text" />
                <label className=""><b>Subject</b></label>
                <input className="w3-input w3-border w3-round-large" type="text" />
                <label className=""><b>Message</b></label>
                <textarea className="w3-input w3-border w3-round-large" type="text" />
                <button className="w3-tertiary w3-block w3-xlarge w3-margin-top">Clear</button>
                <button className="w3-secondary w3-block w3-xlarge w3-margin-top">Register</button>

            </form>
        </section>
        <footer className="w3-content">
            <Copyright />
        </footer>
    </>
)

export default Index