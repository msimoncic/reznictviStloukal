import React, {useState} from "react";
import "./OblezeneMisy.css";
import img1 from "./obložené mísy/misa.jpg";
import img2 from "./obložené mísy/misa_uzene_maso.jpg";
import img3 from "./obložené mísy/misa_uzene_maso_1.jpg";
import img4 from "./obložené mísy/oblozena_misa.jpg";
import img5 from "./obložené mísy/talir.jpg";
import img6 from "./obložené mísy/talire.jpg";

function Misy() {
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
        }
    ];

    const [modal, setModal] = useState(false);
    const [tempsrc, setTempSrc] = useState('');
    const getImg = (src) => {
        setTempSrc(src);
        setModal(true);
    }

    return (
        <div className={"misy"}>
            <div className={"header__bg"}>
                <div className={"header__content"}>
                    <div className={"header__meta"}>
                        <h1 className={"header__text pz__10"}>Obložené mísy</h1>
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

export default Misy;