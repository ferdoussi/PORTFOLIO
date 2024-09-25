import React, { useState } from "react";
import './header.css'
 function Header(){
    const[showmodal, setshwmodal]=useState(false)
    return(
        <header className=" flex">
             <button className="menu icon-menu flex " onClick={()=>{
                setshwmodal(true)
             }}></button>
            <div/>
           
            <nav>
                 <ul className="flex">
                    <li><a href="">About</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">Projrcts</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                 </ul>
            </nav>
            <button className="mode flex">
                 <span  className="icon-moon"></span>
            </button>
             {
                showmodal &&(
                    <div className="fixed">
              
                    <ul className="modal border">
                        <li>
                            <button className="icon-close" onClick={()=>{
                setshwmodal(false)
                                 }}> </button>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Projrcts</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
               
             </div>
                )
             }
        </header>
    )
}
;
export default Header;