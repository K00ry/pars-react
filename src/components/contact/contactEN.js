import React from 'react';


const ContactEN = props =>
    <div>
    <div className="top-nav">
        <a  id="back-to-top">
            <svg className="arrow-icon">
                <use xlinkHref="#arrow-up" />
            </svg>
            <br />Top
        </a>
    </div>


    <div className="contact-en">
        <h4 className="contact-en__line"><span>phone :</span><a href="tel:+989121180175"> +98 (912)-118-0175</a></h4>
        <h4 className="contact-en__line"><span>phone :</span><a href="tel:+989123368183"> +98 (912)-336-8183</a></h4>
        <h4 className="contact-en__line"><span>E-mail :</span><a href="mailto:info@parsjadval.ir"> info@parsjadval.ir</a></h4>
        <h4 className="contact-en__line address"><span>Address :</span> Varamin,past the Valiasr Square,close to Jafar Abad Alley</h4>

    </div>
    </div>;







export default ContactEN;