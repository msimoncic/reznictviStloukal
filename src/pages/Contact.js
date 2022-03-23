import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className={"contact"}>
            <div className={"header__bg"}>
                <div className={"header__content"}>
                    <div className={"header__meta"}>
                        <h1 className={"header__text pz__10"}>Kontakt</h1>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col__3"}>
                        <div className={"contact__box"}>
                            <div className={"icon fa fa-map-marker "}>
                            </div>
                            <div className={"contact__meta"}>
                                <h2 className={"contact__text"}>Řeznictví a uzenářství</h2>
                                <p className={"contact__text p__color"}>Alois Stloukal</p>
                                <p className={"contact__text p__color"}>Mjr. Šandery 48</p>
                                <p className={"contact__text p__color"}>675 71 Náměšť nad Oslavou</p>
                                <p className={"contact__text p__color"}>IČO 18541844</p>
                                <p className={"contact__text p__color"}>DIČ CZ5703202461</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col__3"}>
                        <div className={"contact__box"}>
                            <div className={"icon fa fa-clock-o"}>

                            </div>
                            <div className={"contact__meta"}>
                                <h2 className={"contact__text"}>Otevírací doba</h2>
                                <div className={"row"}>
                                    <div className={"col__2"}>
                                        <p className={"contact__text p__color"}>Pondělí</p>
                                        <p className={"contact__text p__color"}>Úterý</p>
                                        <p className={"contact__text p__color"}>Středa</p>
                                        <p className={"contact__text p__color"}>Čtvrtek</p>
                                        <p className={"contact__text p__color"}>Pátek</p>
                                        <p className={"contact__text p__color"}>Sobota</p>
                                        <p className={"contact__text p__color"}>Neděle</p>
                                    </div>
                                    <div className={"col__2"}>
                                        <p className={"contact__text p__color"}>Zavřeno</p>
                                        <p className={"contact__text p__color"}>8:00 – 17:00</p>
                                        <p className={"contact__text p__color"}>8:00 – 17:00</p>
                                        <p className={"contact__text p__color"}>8:00 – 17:00</p>
                                        <p className={"contact__text p__color"}>8:00 – 17:00</p>
                                        <p className={"contact__text p__color"}>7:30 – 10:30</p>
                                        <p className={"contact__text p__color"}>Zavřeno</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col__3"}>
                        <div className={"contact__box"}>
                            <div className={"icon fa fa-user-circle-o"}></div>
                            <div className={"contact__meta"}>
                                <h2 className={"contact__text"}>Odpovědná vedoucí</h2>
                                <p className={"contact__text p__color"}>Oxana Stloukalová</p>
                                <h3 className={"contact__text p__color"}>Telefon</h3>
                                <a href={"tel:+420568623806"}><p className={"contact__text p__color"}>+420 568 623 806 (prodejna)</p></a>
                                <a href={"tel:+420608912771"}><p className={"contact__text p__color"}>+420 608 912 771 (vedoucí)</p></a>
                                <h3 className={"contact__text p__color"}>E-mail</h3>
                                <a href={"mailto:reznictvistloukal@seznam.cz"}><p className={"contact__text p__color"}>reznictvistloukal@seznam.cz</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;