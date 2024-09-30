import React from "react";
import './contact.css'
import { useForm , ValidationError} from "@formspree/react";
function Contact() {
    const [state, handleSubmit] = useForm("xdknqpey");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
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
                        <input type="email" name="email" id="email" required />
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
                    <button className="submit" type="submit" disabled={state.submitting}>Submit</button>
                </form>
                <div className="animation border" >

                </div>
            </div>
        </section>
    )
}
export default Contact;