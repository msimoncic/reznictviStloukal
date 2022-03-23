import React from "react";
import "./AboutUs.css";
import aboutUs from "../img/kdo_jsme.jpg";
import coDelame from "../img/co_delame.jpg";
import jakToDelame from "../img/jak_to_delame.jpg";

function AboutUs() {
    return(
        <div className={"about__page"}>
            <div className={"header__bg"}>
                <div className={"header__content"}>
                    <div className={"header__meta"}>
                        <h1 id="here" className={"header__text pz__10"}>O nás</h1>
                    </div>
                </div>
            </div>
            <div className={"component__space"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col__2 img"}>
                            <div className={"about__img"}>
                                <img src={aboutUs} alt={""} />
                            </div>
                        </div>
                        <div className={"col__2"}>
                            <div className={"about__box"}>
                                <h1 className={"about__text"}>Kdo jsme?</h1>
                                <p className={"about__text p__color"}>Jsme malá rodinná firma s dlouholetou tradicí.
                                    Zabýváme se maloobchodním prodejem masa a vlastních uzenářských výrobků.
                                    V místě dnešní prodejny provozovala naše rodina řeznické řemeslo již v dobách Rakouska-Uherska.
                                    Za minulého režimu byl náš řeznický krámek přeměněn na nucený výsek.
                                    V 90. letech minulého století jsme obnovili živnost a navázali na práci našich předků.</p>
                            </div>
                        </div>
                        <div className={"col__2"}>
                            <div className={"about__box"}>
                                <h1 className={"about__text"}>Co děláme?</h1>
                                <p className={"about__text p__color"}>Veškerá produkce masa je z naší porážky a jateční kusy pochází od malochovatelů z okolí Náměště nad Oslavou.
                                    Porážku provádíme v místě prodejny, proto se maso dostává k zákazníkům vždy čerstvé. Na rozdíl od velkokapacitních zpracovatelů masa máme více času na jeho čištění a zpracování.
                                    Mleté maso meleme na prodejně přímo před zákazníkem, který tak má jistotu, že si odnáší pouze čerstvé maso bez přídatných látek.</p>
                            </div>
                        </div>
                        <div className={"col__2 img"}>
                            <div className={"about__img"}>
                                <img src={coDelame} alt={""} />
                            </div>
                        </div>
                        <div className={"col__2 img"}>
                            <div className={"about__img"}>
                                <img src={jakToDelame} alt={""} />
                            </div>
                        </div>
                        <div className={"col__2"}>
                            <div className={"about__box"}>
                                <h1 className={"about__text"}>Jak to děláme?</h1>
                                <p className={"about__text p__color"}>Naše masné výrobky obsahují minimálně 90 % masa a připravujeme je podle vlastních receptur.
                                    Nenajdete v nich žádné náhražky, drůbeží separát, aromata nebo barviva.
                                    Koření si mícháme sami a používáme přírodní střeva, udíme klasickým způsobem na dřevě.
                                    To vše přispívá k tradiční chuti, kterou většina průmyslově vyráběných uzenin postrádá.
                                    Naše uzeniny jsou vhodné i pro nemocné celiakií, neboť neobsahují lepek.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;