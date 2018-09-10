import React, {Fragment} from 'react';
import logo from "../../arrow.png";


const ContactEN = () =>
    <Fragment>
    <div className="top-nav">
        <a href="#btn" id="back-to-top">
            <img className="contact-arrow" src={logo} alt="Arrow" />
            <br />Top
        </a>
    </div>


    <div className="contact-en">
        <div className="contact-en__line"><span>phone :</span><a className="contact-en__line--mod" href="tel:+989121180175" > +98 (912)-118-0175</a></div>
        <div className="contact-en__line"><span>phone :</span><a className="contact-en__line--mod" href="tel:+989123368183"> +98 (912)-336-8183</a></div>
        <div className="contact-en__line"><span>E-mail :</span><a className="contact-en__line--mod" href="mailto:info@parsjadval.ir"> info@parsjadval.ir</a></div>
        <div className="contact-en__line address"><span>Address :</span><a className="contact-en__line--mod">Varamin, past the Valiasr Square, close to Jafar Abad Alley</a></div>

    </div>
    </Fragment>;







export default ContactEN;