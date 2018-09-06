import React from 'react';
import ContactEN from'./contactEN';
import ContactFA from'./ContactFA';
import {Trans} from "react-i18next";


const Contact = props =>{
    let jaber =`contact container m-x-auto ${props.t("lang-class")}`;
    let naser;
    if(jaber ==="contact container m-x-auto english" ){
         naser = <ContactEN/>

    }else{
       naser= <ContactFA/>
    }

    return(
        <div className={jaber}>
            {naser}
        </div>


    );

};

export default Contact;