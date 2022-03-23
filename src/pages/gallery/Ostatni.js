import React, {useState} from "react";
import "./Ostatni.css";
import img1 from "./ostatní výrobky/sekana_syr.jpg";
import img2 from "./ostatní výrobky/jemne_pikantni_pecene_koleno.jpg";
import img3 from "./ostatní výrobky/drstkova_polevka.jpg";
import img4 from "./ostatní výrobky/kanci_gulas.jpg";
import img5 from "./ostatní výrobky/kabanos.jpg";
import img6 from "./ostatní výrobky/sadlo.jpg";
import img7 from "./ostatní výrobky/sekana.jpg";
import img8 from "./ostatní výrobky/spekacky.jpg";

function Ostatni() {
    let photos=[
        {
            id: 1,
            src: img1,
        },
        {
            id: 2,
            src: img2,
        },
        {
            id: 3,
            src: img3,
        },
        {
            id: 4,
            src: img4,
        },
        {
            id: 5,
            src: img5,
        },
        {
            id: 6,
            src: img6,
        },
        {
            id: 7,
            src: img7,
        },
        {
            id: 8,
            src: img8,
        }
    ];

    const [modal, setModal] = useState(false);
    const [tempsrc, setTempSrc] = useState('');
    const getImg = (src) => {
        setTempSrc(src);
        setModal(true);
    }

    return (
        <div className={"ostatni"}>
            <div className={"header__bg"}>
                <div className={"header__content"}>
                    <div className={"header__meta"}>
                        <h1 className={"header__text pz__10"}>Ostatní výrobky</h1>
                    </div>
                </div>
            </div>
            <div className={"component__space container"}>
                <div className={modal? "modal open" : "modal"}>
                    <img src={tempsrc} />
                    <i className={"fa fa-close"} onClick={() => setModal(false)}></i>
                </div>
                <div className={"gallery__photo"}>
                    {photos.map((item, index)=>{
                        return(
                            <div className={"pics"} key={index} onClick={() => getImg(item.src)}>
                                <img src={item.src} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Ostatni;