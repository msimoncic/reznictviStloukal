import React from "react";
import "./Gallery.css";
import uzeniny from "./gallery/uzeniny_.jpg";
import misy from "./gallery/oblozene_misy.jpg";
import umaso from "./gallery/uzene_maso.jpg";
import ostatni from "./gallery/ostatni_vyrobky.jpg";
import {Link} from "react-router-dom";

function Gallery() {

    return (
        <div className={"gallery"}>
            <div className={"header__bg"}>
                <div className={"header__content"}>
                    <div className={"header__meta"}>
                        <h1 className={"header__text pz__10"}>Fotogalerie</h1>
                    </div>
                </div>
            </div>
            <div className={"component__space container"}>
                <div className={"gallery__meta"}>
                    <p className={"gallery__text p__color"}>Prezentace našich výrobků, ukázka naší prodejny a zákulisí výroby uzenin.</p>
                </div>
                <div className={"row"}>
                    <div className={"col__4"}>
                        <h2 className={"gallery__text"}>Uzeniny</h2>
                        <Link to={"/uzeniny"}><img src={uzeniny}/></Link>
                    </div>
                    <div className={"col__4"}>
                        <h2 className={"gallery__text"}>Obložené mísy</h2>
                        <Link to={"/oblozene-misy"}><img src={misy}/></Link>
                    </div>
                    <div className={"col__4"}>
                        <h2 className={"gallery__text"}>Uzené maso</h2>
                        <Link to={"/uzene-maso"}><img src={umaso}/></Link>
                    </div>
                    <div className={"col__4"}>
                        <h2 className={"gallery__text"}>Ostatní výrobky</h2>
                        <Link to={"/ostatni-vyrobky"}><img src={ostatni}/></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Gallery;