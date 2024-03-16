import React, { useEffect } from "react";
import "./hero.scss"
import Logo from "../../Lib/img/gitlab.svg"
import Logo2 from "../../Lib/img/github.svg"
import Logo3 from "../../Lib/img/nimadir.svg"
import Img from "../../Lib/img/hero__img_removebg.png"
import Aos from "aos";
import "aos/dist/aos.css"
function Hero() {

    React.useEffect(()=>{
            Aos.init();
    },[]) 
    return (
        <>

            <section className="hero">
                <div className="container">
                    <div className="hero__div">
                        <div className="hero__div2"  data-aos="fade-right">
                            <h1 className="hero__title">Always<br /> Ready to Code.</h1>
                            <p className="hero__text">Spin up fresh, automated dev environments
                                for each task, in the cloud, in seconds.
                            </p>
                            <div className="hero__div3">
                                <button className="hero__div3_btn">Try Now</button>

                                <p className="hero__div3__text">Open a workspace.
                                    Start from any Git context.</p>


                                <div className="logos">
                                    <a className="logos" href="#link">
                                        <img src={Logo} alt="" />
                                        <img src={Logo2} alt="" />
                                        <img src={Logo3} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <img className="heroimg" src={Img} alt="rasm"  data-aos="fade-left" />
                    </div>



                    <div className="hero__text__div" data-aos="fade-left">
                        <h2 className="hero__text__div__title">Select project,</h2>
                        <p className="hero__text__div__text">check dependencies, checkout branch, view readme.txt,
                         install tools, run build, run test,</p>
                        <h2 className="hero__text__div__title2">start coding.</h2>
                    </div>
                </div>
            </section>

        </>
    )
}
export { Hero }