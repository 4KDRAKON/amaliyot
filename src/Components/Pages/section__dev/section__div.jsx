import React from "react";
import "./section__dev.scss"
import img from "../../Lib/img/dev__img.jpg"
import Aos from "aos";
import "aos/dist/aos.css"
function Section__dev() {

    React.useEffect(()=>{
        Aos.init();
},[])
    return (

        <>
            <section className="Section__dev">
                <div className="container">
                    <div className="section__dev__div" data-aos="fade-right">
                        <ul className="dev__list">
                            <li className="dev__item1">
                                <h2 className="dev__title">Think CI/CD for dev environments</h2>
                                <p className="dev__text">We invented prebuilds so application code,
                                    configuration and infrastructure can all be stored as machine-executable
                                    code in your git repositories and applied to dev environments automatically
                                    and continuously.</p>
                            </li>
                            <li className="dev__item2">
                                <a className="dev__link" href="#link">More on prebuilds</a>
                                <a className="dev__link2" href="#link">Documentation</a>
                            </li>
                        </ul>

                        <img className="dev__img" src={img} alt="Rasm"  />

                    </div>
                </div>
            </section>
        </>
    )
}
export { Section__dev }