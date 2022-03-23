import React, {useState} from "react";
import "./UzeneMaso.css";
import img1 from "./uzené maso/uzene_maso.jpg";
import img2 from "./uzené maso/umaso.jpg";
import img3 from "./uzené maso/cikansky_kotlet.jpg";
import img4 from "./uzené maso/zauzena_hovezi_kyta.jpg";
import img5 from "./uzené maso/zauzena_sunka.jpg";
import img6 from "./uzené maso/zauzena_sunka_nejvyssi_jakosti.jpg";
import img7 from "./uzené maso/uzene_maso_ve_stave.jpg";

function UzeneMaso() {
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
        }
    ];

    const [modal, setModal] = useState(false);
    const [tempsrc, setTempSrc] = useState('');
    const getImg = (src) => {
        setTempSrc(src);
        setModal(true);
    }

    return (
        <div className={"uzene__maso"}>
            <div className={"header__bg"}>
                <div className={"header__content"}>
                    <div className={"header__meta"}>
                        <h1 className={"header__text pz__10"}>Uzené maso</h1>
                    </div>
                </div>
            </div>
            <div className={"component__space container"}>
                <div className={modal? "modal open" : "modal"} onClick={() => setModal(false)}>
                    <img src={tempsrc} />
                    <i className={"fa fa-close"} ></i>
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

export default UzeneMaso;