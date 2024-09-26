import React from "react";
import './contact.css'
function Contact() {
    return (
        <section className="contac-us">
            <h1 className="title">
                <span className="icon-mail"></span>
                Contact Us
            </h1>
            <p className="sub-title">Contact me for inquiries, collaborations, or any questions.</p>
            <div style={{justifyContent:"space-between"}} className="flex">
                <form className="" >
                    <div className="flex">
                        <label htmlFor="email" >Email Address :</label>
                        <input type="email" name="" id="email" required />
                    </div>
                    <div className="flex" style={{marginTop:"24px"}}>
                        <label htmlFor="message">Your Message :</label>
                        <textarea name="" id="message" required></textarea>
                    </div>
                    <button className="submit">Submit</button>
                </form>
                <div className="animation border"></div>
            </div>
        </section>
    )
}
export default Contact;