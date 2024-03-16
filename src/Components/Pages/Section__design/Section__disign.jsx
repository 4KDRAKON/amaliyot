import React from "react";
import "./Section__design.scss"
import img from "../../Lib/img/design__section.png"
import Chrome from "../../Lib/img/chrome.svg"
import Firefox from "../../Lib/img/firefox.svg"
import Aos from "aos";
import "aos/dist/aos.css"
function Section__design(){
    React.useEffect(()=>{
        Aos.init();
},[]) 
    return(
   
        <>
        
            <section className="Section__design" >
                <div className="container">
                    <div className="Section__design__div" data-aos="fade-down">
                        <h2 className="design__title">Remote-first. Secure by design.</h2>

                        <img className="dev__img" src={img} alt="rasm" width={1119}  />


                            <p className="design__text">You no longer need an over-powered laptop
                             to code, Gitpod works just as smoothly on a Chromebook or iPad. All you 
                             need is a browser. Gitpod centralizes all source code and never stores it 
                             on insecure machines and networks.</p>

                                <div className="design__extension">
                                    <a className="hgghghgh" href="#link">
                                        <img className="nima"  src={Chrome} alt="Link chrome" />
                                        <img className="jnnjnjnj" src={Firefox} alt="Link Firefox" />
                                    </a>
                                </div>
                    </div>
                </div>
            </section>

        </>

    )
}
export {Section__design}