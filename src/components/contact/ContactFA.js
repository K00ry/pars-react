import React, {Fragment} from 'react';
import logo from "../../arrow.png";


const ContactFA = () =>

    <Fragment>
        <div className="top-nav">
            <a  href="#btn" id="back-to-top">
                <img className="contact-arrow" src={logo} alt="Arrow" />
                <br />بالایه صفحه
            </a>
        </div>
    <div className="contact-fa">
        <div className="contact-fa__line"><a className="contact-en__line--mod" href="tel:+989121180175">۹۱۲-۱۱۸-۰۱۷۵</a> <span> : تلفن همراه</span></div>
        <div className="contact-fa__line"><a className="contact-en__line--mod" href="tel:+989123368183">۹۱۲-۳۳۶-۸۱۸۳</a> <span> : تلفن همراه</span></div>
        <div className="contact-fa__line"><a className="contact-en__line--mod" href="mailto:info@parsjadval.ir">info@parsjadval.ir</a><span> : ایمل</span></div>
        <div className="contact-fa__line address"><span>آدرس:</span><a className="contact-en__line--mod">ورامین بعد از میدان ولیعصر جنب کوی جعفر آباد</a></div>
    </div>
    </Fragment>;







export default ContactFA;