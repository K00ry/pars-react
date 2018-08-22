import React from 'react';


const Contact = () =>{

    return(
        <div className="contact container m-x-auto">
            <div className="top-nav">
                <a  id="back-to-top">
                    <svg className="arrow-icon">
                        <use xlinkHref="#arrow-up" />
                    </svg>
                    <br />بالایه صفحه
                </a>
            </div>
            <div className="contact-info">
                <h4><a href="tel:+989121180175">۹۱۲-۱۱۸-۰۱۷۵</a> <span>: تلفن همراه</span></h4>
                <h4><a href="tel:+989123368183">۹۱۲-۳۳۶-۸۱۸۳</a> <span>: تلفن همراه</span></h4>
                <h4><span>آدرس:</span>ورامین بعد از میدان ولیعصر جنب کوی جعفر آباد</h4>
                <h4><a href="mailto:info@parsjadval.ir">info@parsjadval.ir</a><span>:ایمل</span></h4>
            </div>
        </div>


    );

};

export default Contact;