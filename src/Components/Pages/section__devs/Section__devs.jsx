import React from "react";
import "./section__devs.scss"
import img from "../../Lib/img/brat.svg"
import img2 from "../../Lib/img/brat2.svg"
import img3 from "../../Lib/img/brat3.svg"
import logo from "../../Lib/img/gitlabb.svg"
import logo2 from "../../Lib/img/nimadirkampaniya.svg"
import logo3 from "../../Lib/img/dvave.svg"
import logo4 from "../../Lib/img/gogle.svg"
import logo5 from "../../Lib/img/amazon.svg"
import logo6 from "../../Lib/img/facebook.svg"
import logo7 from "../../Lib/img/uber.svg"
import logo8 from "../../Lib/img/intel.svg"
import logo9 from "../../Lib/img/thei.svg"
import logo10 from "../../Lib/img/code.svg"
import logo11 from "../../Lib/img/4g.svg"
import Aos from "aos";
import "aos/dist/aos.css"
function Section__devs() {
    React.useEffect(()=>{
        Aos.init();
},[])
    return (
        <>
            <section className="Section__devs">
                <div className="container">
                    <div className="Section__devs__div" data-aos="fade-right">
                        <h2 className="devs__title">Used by 400,000+ developers.</h2>

                        <ul className="devs__list">
                            <li className="devs__item">
                                <h3 className="devs__title2">GitPod is incredibly cool.</h3>
                                <p className="devs__text">In my opinion, this is a big step in4
                                    open source software contribution. I'm excited to see where we go from here.</p>

                                <div className="item__dev">
                                    <img className="Devc__item__img" src={img} alt="Brat" />

                                    <div>
                                        <h3 className="item__title">Ben Halpern</h3>
                                        <p className="item__text">
                                            Creator and Co-founder <span className="span__item">@forem</span>
                                            and <span className="span__item"> @ThePracticalDev</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="devs__item">
                                <h3 className="devs__title2">Let's say we were overwhelmed how smooth @gitpod
                                    workspaces creation & own Docker image for workspaces worked.</h3>
                                <p className="devs__text">Plus, installing @code extensions from the store
                                    and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)</p>
                                <div className="item__dev">
                                    <img className="Devc__item__img2" src={img2} alt="Brat" />

                                    <div>
                                        <h3 className="item__title">Michael Friedrich</h3>
                                        <p className="item__text">
                                            Developer Evangelist <span className="span__item">@GitLab</span>

                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="devs__item">

                                <p className="devs__text">Look at any PR (pull request) in a full coding environment
                                    where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the
                                    PR URL. Super useful for reviewing/testing stuff without having to check it out locally!</p>


                                <div className="item__dev">
                                    <img className="Devc__item__img2" src={img3} alt="Brat" />

                                    <div>
                                        <h3 className="item__title">Julius Volz</h3>
                                        <p className="item__text">
                                            Creator <span className="span__item">@PrometheusIO</span>

                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>



                        <div className="devs__logo">
                            <img src={logo} alt="logo" width={138} height={42} />
                            <img src={logo2} alt="logo" width={138} height={20} />
                            <img src={logo3} alt="logo" width={138} height={67} />
                            <img src={logo4} alt="logo" width={138} height={36}/>
                            <img src={logo5} alt="logo" width={138} height={33}/>
                            <img src={logo6} alt="logo" width={138} height={22}/>
                            <img src={logo7} alt="logo" width={138} height={37}/>

                        </div>

                        <div className="devs__logo2">
                            <img src={logo8} alt="logo" width={138} height={67} />
                            <img src={logo9} alt="logo" width={138} height={17} />
                            <img src={logo10} alt="logo" width={138} height={46} />
                            <img src={logo11} alt="logo" width={138} height={38} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Section__devs };