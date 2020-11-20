import Logo from '../public/svg/logo.svg'
import Cart from '../public/svg/cart.svg'
import Contact from '../public/svg/contact.svg'
import Person from '../public/svg/person.svg'
import JamStack from '../public/svg/jamstack.svg'
import Responsive from '../public/svg/responsive.svg'
import SearchEngine from '../public/svg/searchengine.svg'
import Gears from '../public/svg/gears.svg'
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
                        <Responsive style={{width:"80%"}}/>
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
                    <Gears style={{ width: "70%" }}/>
                </div>
            </div>

        </section>
    </>
)

export default Index