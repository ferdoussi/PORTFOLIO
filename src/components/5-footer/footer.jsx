import React from "react";
import './footer.css'
function Footer(){
    return(
        <footer className="flex">
                <ul className="flex">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Experience</a></li>
                 </ul>
                 <p>© 2024 Anas ferdoussi. All rights reserved.</p>
        </footer>
    )
}
export default Footer;