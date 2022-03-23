import React, {useState} from "react";
import "./Navbar.css";
import logo from "./img/navbar_icon.jpg";

function Navbar() {
    //Toggle menu
    const [show, setShow] = useState(true);

    return (
        <div className={"header"}>
            <div className="container d__flex align__items__center navbar">
                <div className="logo">
                    <a href={"/"}><img src={logo} alt={""} /></a>
                </div>
                <div className="navigation pxy__15">
                    <ul className={"navbar__item d__flex"}>
                        <a href={"/"}>
                            <li className={"nav__items mx__15"}>Domů</li>
                        </a>
                        <a href={"/o-nas"}>
                            <li className={"nav__items mx__15"}>O nás</li>
                        </a>
                        {/*<a href={"/aktuality"}>
                            <li className={"nav__items mx__15"}>Aktuality</li>
                        </a>*/}
                        <a href={"/fotogalerie"}>
                            <li className={"nav__items mx__15"}>Fotogalerie</li>
                        </a>
                        <a href={"/kontakt"}>
                            <li className={"nav__items mx__15"}>Kontakt</li>
                        </a>
                    </ul>
                </div>
                {/* toggle menu */}
                <div className={"toggle__menu"}>
                    <i onClick={() => setShow(!show)} className={"fa fa-bars"}></i>
                </div>
                {show ? (
                    <div className={"sideNavbar"}>
                        <ul className={"sidebar d__flex"}>
                            <li className={"sideNavbar"}>
                                <a href={"/"}>Domů</a>
                            </li>
                            <li className={"sideNavbar"}>
                                <a href={"/o-nas"}>O nás</a>
                            </li>
                            {/*<li className={"sideNavbar"}>
                                <a href={"/aktuality"}>Aktuality</a>
                            </li>*/}
                            <li className={"sideNavbar"}>
                                <a href={"/fotogalerie"}>Fotogalerie</a>
                            </li>
                            <li className={"sideNavbar"}>
                                <a href={"/kontakt"}>Kontakt</a>
                            </li>
                        </ul>
                    </div>
                ) : null }
            </div>
        </div>
    )
}

export default Navbar;