import React from 'react';


const ContactFA = props =>

    <div>
        <div className="top-nav">
            <a  id="back-to-top">
                <svg className="arrow-icon">
                    <use xlinkHref="#arrow-up" />
                </svg>
                <br />بالایه صفحه
            </a>
        </div>
    <div className="contact-fa">
        <h4 className="contact-fa__line"><a href="tel:+989121180175">۹۱۲-۱۱۸-۰۱۷۵</a> <span> : تلفن همراه</span></h4>
        <h4 className="contact-fa__line"><a href="tel:+989123368183">۹۱۲-۳۳۶-۸۱۸۳</a> <span> : تلفن همراه</span></h4>
        <h4 className="contact-fa__line"><a href="mailto:info@parsjadval.ir">info@parsjadval.ir</a><span> : ایمل</span></h4>
        <h4 className="contact-fa__line address"><span>آدرس: </span>ورامین بعد از میدان ولیعصر جنب کوی جعفر آباد</h4>
    </div>
    </div>;







export default ContactFA;