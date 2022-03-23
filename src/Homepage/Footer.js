import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className={"footer"}>
            <div className={"container"}>
                <div className={"row footer__row"}>
                    <div className={"col__2 col__text"}>
                        <p className={"footer__text"}> &copy; 2019 - 2022 Řeznictví a uzenářství u Stloukalů | <i>Designed and coded by</i> <a href={"mailto:michal.simoncic15@gmail.com"}> Michal Šimončič</a> </p>
                    </div>
                    <div className={"col__2"}>
                        <a href={"https://www.facebook.com/ReznictviUStloukalu"} className={"footer__text"} target={"_blank"}>Sledujte nás na našem <i className={"fa fa-facebook"}></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;