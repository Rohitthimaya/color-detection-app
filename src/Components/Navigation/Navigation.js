import React from "react";
import "./Navigation.css"
import 'tachyons';
import Logo from "../Logo/Logo";

const Navigation = () => {
    return(
        <nav>
            <Logo />
            <p className='f3 link dim pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation