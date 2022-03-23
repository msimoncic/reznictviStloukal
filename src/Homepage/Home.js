import React from "react";
import "./Home.css";
import Reasons from "./Reasons";
import About from "./About";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="header__bg">
                {/*Home content*/}
                <div className={"header__content"}>
                    <div className={"container"}>
                        <div className={"header__meta"}>
                            <h1 className={"header__text pz__10"}>Řeznictví a uzenářství U Stloukalů</h1>
                        </div>
                        <Link to={"/kontakt"}><button className={"btn header__btn pointer"}>Otevírací doba</button></Link>
                    </div>
                </div>
            </div>
            <Reasons />
            <About />
        </div>
    )
}

export default Home;