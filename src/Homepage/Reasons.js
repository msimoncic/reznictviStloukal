import React from "react";
import "./Reasons.css";

function Reasons() {
    // Up to top btn
    window.addEventListener("scroll", function (){
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    });

    return (
      <div className={"reasons component__space"}>
          <div className={"heading"}>
              <h1 className={"heading"}>Proč pro maso právě k nám?</h1>
          </div>
          <div className={"container"}>
              <div className={"row"}>
                  <div className={"col__3"}>
                      <div className={"reasons__box"}>
                          <div className={"icon fa fa-american-sign-language-interpreting"}>
                          </div>
                          <div className={"reasons__meta"}>
                              <h2 className={"reasons__text"}>Čerstvost</h2>
                              <p className={"reasons__text p__color"}>Porážku provádíme v místě prodejny, proto se maso dostává k zákazníkům vždy čerstvé.
                                  Mleté maso meleme na prodejně přímo před zákazníkem, který tak má jistotu, že si odnáší pouze čerstvé maso bez přídatných látek.</p>
                          </div>
                      </div>
                  </div>
                  <div className={"col__3"}>
                      <div className={"reasons__box"}>
                          <div className={"icon fa fa-check"}>

                          </div>
                          <div className={"reasons__meta"}>
                              <h2 className={"reasons__text"}>Kvalita</h2>
                              <p className={"reasons__text p__color"}>Naše masné výrobky obsahují minimálně 90% masa a připravujeme je podle vlastních receptur.
                                  Nenajdete v nich žádné náhražky, drůbeží separát, aromata nebo barviva.</p>
                          </div>
                      </div>
                  </div>
                  <div className={"col__3"}>
                      <div className={"reasons__box"}>
                          <div className={"icon fa fa-child"}>

                          </div>
                          <div className={"reasons__meta"}>
                              <h2 className={"reasons__text"}>Podpora malochovatelů</h2>
                              <p className={"reasons__text p__color"}>Veškerá produkce masa je z naší porážky a jateční kusy pochází od malochovatelů z okolí Náměště nad Oslavou.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Up to top btn */}
          <div className={"up__to__top__btn"}>
            <a href={"#"} className={"bottom__to__top"}>
                <i className={"fa fa-arrow-up"}></i>
            </a>
          </div>
      </div>
    );
}

export default Reasons;