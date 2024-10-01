import React, { useEffect, useState } from "react";
import './header.css'
 function Header(){
 const[theme,setTheme]=useState(localStorage.getItem('currentMode'));
 const[showmodal, setshwmodal]=useState(false);
 useEffect(()=>{
    if(theme === 'light'){
      document.body.classList.remove('dark');
      document.body.classList.add('light')
    }else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
 },[theme]);
    return(
        <header className=" flex">
             <button className="menu icon-menu flex " onClick={()=>{
                setshwmodal(true)
             }}></button>
            <div/>
           
            <nav>
                 <ul className="flex">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Contact</a></li>
                    
                 </ul>
            </nav>
            <button onClick={()=>{
               localStorage.setItem('currentMode', theme ==='dark' ? 'light' : 'dark');
               setTheme(localStorage.getItem('currentMode'))
            }} className="mode flex">
                 <span  className="icon-moon"></span>
            </button>
             {
                showmodal &&(
                    <div className="fixed">
              
                    <ul className="modal">
                        <li>
                            <button className="icon-close" onClick={()=>{
                setshwmodal(false)
                                 }}> </button>
                        </li>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Experience</a></li>
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