import React from "react";

function Navbar() {
    return(
        <nav>
            <span className="nav-home-link material-icons-outlined">
                home
            </span>
            <span className="nav-notif-link material-icons-outlined">
                notifications
            </span>
            <span className="nav-create-link material-icons-outlined">
                add
            </span>
            <span className="nav-messages-link material-icons-outlined">
                sms
            </span>
            <span className="nav-person-link material-icons-outlined">
                person
            </span>
        </nav>
    );
};

export default Navbar;