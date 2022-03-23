import React, {useState} from "react";
import "./Uzeniny.css";
import img1 from "./uzeniny/lovecky_salam.jpg";
import img2 from "./uzeniny/uzeniny.jpg";
import img3 from "./uzeniny/uzeniny_1.jpg";
import img4 from "./uzeniny/chorizo_klobasa.jpg";
import img5 from "./uzeniny/cigara.jpg";
import img6 from "./uzeniny/domaci_klobasa.jpg";
import img7 from "./uzeniny/kanci_klobasa.jpg";
import img8 from "./uzeniny/klobasa_syr_zelenina.jpg";
import img9 from "./uzeniny/kozacka_klobasa.jpg";
import img10 from "./uzeniny/parky_se_syrem.jpg";
import img11 from "./uzeniny/turisticka_klobasa.jpg";

function Uzeniny() {
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
        }
        ,
        {
            id: 6,
            src: img6,
        }
        ,
        {
            id: 7,
            src: img7,
        }
        ,
        {
            id: 8,
            src: img8,
        }
        ,
        {
            id: 9,
            src: img9,
        }
        ,
        {
            id: 10,
            src: img10,
        }
        ,
        {
            id: 11,
            src: img11,
        }
    ];

    const [modal, setModal] = useState(false);
    const [tempsrc, setTempSrc] = useState('');
    const getImg = (src) => {
        setTempSrc(src);
        setModal(true);
    }

    return (
        <div className={"uzeniny"}>
            <div className={"header__bg"}>
                <div className={"header__content"}>
                    <div className={"header__meta"}>
                        <h1 className={"header__text pz__10"}>Uzeniny</h1>
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

export default Uzeniny;