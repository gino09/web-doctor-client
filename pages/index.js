import JamStack from '../public/svg/jamstack.svg'
import Responsive from '../public/svg/responsive.svg'
import SearchEngine from '../public/svg/searchengine.svg'
import Gears from '../public/svg/gears.svg'
import Link from 'next/link'
import appText from '../components/appText'
import Image from 'next/image'

const Index = () => {
    return(
    <>
        <main className="w3-display-container w3-content w3-content w3-hide-medium w3-hide-large" style={{ marginTop: 80 }}>
            <div className="w3-cell-row">
                <div className="w3-container w3-tertiary w3-cell" style={{ height: 320 }}>
                </div>
            </div>
            <div className="w3-cell-row">
                <div className="w3-container w3-secondary w3-cell" style={{ height: 380 }}>
                </div>
            </div>
            <div style={{ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 24, left: 0, top: 0, bottom: 0, color: "#4A4E4B" }}>
                <div className="w3-xlarge">
                    Build discoverable and fast web application optimized for User Experience.
                </div>
                <div>
                    <div className="w3-large">Mobile First Responsive Design</div>
                    <Responsive/>
                </div>
                <div className="w3-large">
Seach Engine Optimization 
& High Performance
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div>
                        <SearchEngine style={{width:"50%"}}/>
                    </div>
                    <div>
                        <Gears style={{ width: "50%" }}/>
                    </div>
                </div>
                <a href="#contact"><button className="w3-button w3-round-large w3-xxlarge w3-primary-button ">Get Request</button></a>
                {/* <JamStack/> */}
               
            </div>
        </main>
        <main className="w3-display-container w3-content w3-hide-small" style={{ marginTop: 80 }}>
            <div className="w3-cell-row">
                <div className="w3-container w3-tertiary w3-cell" style={{ height: 400 }}>
                </div>
                <div className="w3-container w3-secondary w3-cell" style={{ height: 400 }}>
                </div>
            </div>
            <div style={{ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 48, left: 0, top: 0, bottom: 0, color: "#4A4E4B" }}>
                <div className="w3-xxlarge" style={{ width: "70%" }}>
                    Build discoverable and fast web application optimized for User Experience.
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <a href="#contact"><button className="w3-button w3-round-large w3-xxlarge w3-primary-button ">Get Request</button></a>
                    <JamStack style={{ width: "44%" }} />
                </div>
            </div>
        </main>
        <section>
            <div className="w3-display-container w3-content w3-hide-small">
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
                    <div key={id} className="w3-col s12 m6 l4 w3-margin-bottom w3-margin-top">
                        <div  style={{ margin: 4 }}>
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
                Contact Agent: {appText.en.contact.agent} 

            </div>
            <div className="w3-container w3-content w3-margin-top">
                <Image
                        src="/unicornbike.jpg"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        style={{objectFit:"contain"}}
                />
            </div>
            <form id="contact" className="w3-container w3-content w3-margin-top">

                <label className=""><b>Email</b></label>
                <input className="w3-input w3-border w3-round-large" type="email" />
                <label className=""><b>Subject</b></label>
                <input className="w3-input w3-border w3-round-large" type="text" />
                <label className=""><b>Message</b></label>
                <textarea className="w3-input w3-border w3-round-large" type="text" />
                <button className="w3-button w3-tertiary w3-padding-medium w3-block w3-round-large w3-margin-top">Clear</button>
                <button className="w3-button w3-secondary w3-padding-medium w3-block w3-round-large w3-margin-top">Register</button>

            </form>
        </section>
    </>
)}

export default Index