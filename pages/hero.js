import Mobile from '../public/svg/mobiledesign.svg'
import SEO from '../public/svg/seoperf.svg'
const HeroSection = () => (
    <>
        <p style style={{ paddingLeft: 40, top: "15%", width: "70%", position: "absolute",zIndex:200 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias necessitatibus facilis nemo ut voluptatem corrupti quia doloribus soluta ex!</p>
        <div style={{ display: "flex" }}>
            <div style={{ width: "50%", height: "50vh", backgroundColor: "#F7F2E7" }}></div>
            <div style={{ width: "50%", height: "50vh", backgroundColor: "#D9E4DD" }}></div>
        </div>
        <div style={{ display: "flex" }}>
            <div style={{ width: "50%", height: "50vh", backgroundColor: "#D9E4DD" }}>
                <Mobile style={{paddingLeft:40}}/>
            </div>
            <div style={{ width: "50%", height: "50vh", backgroundColor: "#F7F2E7" }}>
                <SEO/>
            </div>
        </div>
    </>
)

export default HeroSection