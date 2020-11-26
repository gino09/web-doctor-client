import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle, faTrashAlt, faEdit, faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import React from 'react'
import AppContext from "../context/AppContext";

const User = () => {
    const { user, setUser } = React.useContext(AppContext);
    return (
        <div className="w3-content w3-padding" style={{ marginTop: 80, height:"100vh"}}>
            <div className="w3-container w3-card w3-padding w3-margin-bottom">
                <div >
                    Profile
       </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesomeIcon size="2x" icon={faUserCircle} ></FontAwesomeIcon>
                        <div className="w3-margin-left">
                            <div>
                                {user && user.username}
                        </div>
                            <div>
                                {user && user.email}
                        </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }} className="w3-hide-small">
                        <div className="w3-button w3-border">
                            Upload File
                       <FontAwesomeIcon size="lg" icon={faFileUpload} style={{ marginLeft: 8 }}></FontAwesomeIcon>
                        </div>
                        <div className="w3-button">
                            <FontAwesomeIcon size="lg" icon={faEdit} ></FontAwesomeIcon>
                        </div>

                        <div className="w3-button">
                            <FontAwesomeIcon size="lg" icon={faTrashAlt} ></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: 600, display: "flex", alignItems: "center" }} className="w3-hide-medium w3-hide-large w3-margin-top">
                    <div className="w3-button w3-border">
                        Upload File
                       <FontAwesomeIcon size="lg" icon={faFileUpload} style={{ marginLeft: 8 }}></FontAwesomeIcon>
                    </div>
                    <div className="w3-button">
                        <FontAwesomeIcon size="lg" icon={faEdit} ></FontAwesomeIcon>
                    </div>

                    <div className="w3-button">
                        <FontAwesomeIcon size="lg" icon={faTrashAlt} ></FontAwesomeIcon>
                    </div>
                </div>
                <hr />
                <div className="">
                    Joined: {new Date(user && user.created_at).toLocaleDateString('en', { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                </div>
            </div>
        </div>
    )
}



export default User