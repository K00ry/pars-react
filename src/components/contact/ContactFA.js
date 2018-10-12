import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import logo from "../../arrow.png";


const ContactFA = () =>
    <Grid fluid>
        <Row>
        <div className="top-nav">
            <a  href="#btn" id="back-to-top">
                <img className="contact-arrow" src={logo} alt="Arrow" />
                <br />بالایه صفحه
            </a>
        </div>
        </Row>


        <Row className="contact-fa">

            <Col sm={4} className="contact-fa__line text-right">
                <h5 className="contact-fa__line--h5">تلفن همراه</h5>
                <a className="contact-fa__line--a" href="tel:+989121180175">۹۱۲-۱۱۸-۰۱۷۵</a>
                <br/>
                <a className="contact-fa__line--a" href="tel:+989123368183">۹۱۲-۳۳۶-۸۱۸۳</a>
            </Col>
            <Col sm={4} className="contact-fa__line text-right">
                <h5 className="contact-fa__line--h5">ایمل</h5>

                <a className="contact-fa__line--a" href="mailto:info@parsjadval.ir">info@parsjadval.ir</a>
            </Col>
            <Col sm={4} className="contact-fa__line text-right">
                <h5 className="contact-fa__line--h5">آدرس</h5>
                <a className="contact-fa__line--a">ورامین بعد از میدان ولیعصر جنب کوی جعفر آباد</a>
            </Col>
        </Row>

    </Grid>;













export default ContactFA;