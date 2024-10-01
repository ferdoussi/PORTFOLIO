import React from "react";
import './contact.css';
import Lottie from "lottie-react";
import message from '../../../src/animation/message.json'
import done from '../../../src/animation/done.json'
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
    const [state, handleSubmit] = useForm("xdknqpey");


    return (
        <section className="contac-us">
            <h1 className="title">
                <span className="icon-mail"></span>
                Contact Us
            </h1>
            <p className="sub-title">Contact me for inquiries, collaborations, or any questions.</p>
            <div style={{ justifyContent: "space-between" }} className="flex">
                <form className="" onSubmit={handleSubmit} >
                    <div className="flex">
                        <label htmlFor="email" >Email Address :</label>
                        <input autoComplete="off" type="email" name="email" id="email" required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your Message :</label>
                        <textarea name="message" id="message" required></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className="submit" type="submit" disabled={state.submitting}>{state.submitting ? "Submitting ..." : "Submit"}</button>
                    {state.succeeded && (<p className="flex" style={{ fontSize: "18px", margin: "1.7rem" }}>
                        <Lottie loop={false} style={{height:55}} animationData={done} />
                        Your message has been sent successfully!</p>)}
                </form>
                <div className="animation " >
                <Lottie className="contactanimation" style={{height:355}} animationData={message}/>
                </div>
            </div>
        </section>
    )
}
export default Contact;