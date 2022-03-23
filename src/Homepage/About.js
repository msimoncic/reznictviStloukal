import React from "react";
import "./About.css";
import aboutUs from "../img/reznictvi.jpg";
import offer from "../img/kram.jpg";
import {Link} from "react-router-dom";

function About() {
    return (
        <div className={"about component__space"}>
            <div className={"about__meta container"}>
                <div className={"row"}>
                    <div className={"col__2"}>
                        <div className={"about__box"}>
                            <h1 className={"about__text"}>O nás</h1>
                            <p className={"about__text p__color"}>Jsme malá rodinná firma s dlouholetou tradicí. Zabýváme se maloobchodním prodejem masa a vlastních uzenářských výrobků. V místě dnešní prodejny provozovala naše rodina řeznické řemeslo již v dobách Rakouska-Uherska. Za minulého režimu byl náš řeznický krámek přeměněn na nucený výsek. V 90. letech minulého století jsme...</p>
                            <Link to={"/o-nas"}><button className={"btn about__btn pointer"}>Více o nás</button></Link>
                        </div>
                    </div>
                    <div className={"col__2 img"}>
                        <div className={"about__img"}>
                            <img src={aboutUs} alt={""} />
                        </div>
                    </div>
                    <div className={"col__2 img"}>
                        <div className={"about__img"}>
                            <img src={offer} alt={""} />
                        </div>
                    </div>
                    <div className={"col__2"}>
                        <div className={"about__box"}>
                            <h1 className={"about__text"}>Co nabízíme</h1>
                            <p className={"about__text p__color"}>Naše masné výrobky obsahují minimálně 90 % masa a připravujeme je podle vlastních receptur. Nenajdete v nich žádné náhražky, drůbeží separát, aromata nebo barviva. Koření si mícháme sami a používáme přírodní střeva, udíme klasickým způsobem na dřevě. To vše přispívá k tradiční chuti, kterou většina průmyslově vyráběných uzenin postrádá.</p>
                            <Link to={"/fotogalerie"}><button className={"btn about__btn pointer"}>Podívat se</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;