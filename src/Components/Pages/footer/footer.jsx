import React from "react";
import "./footer.scss"
import Logo from "../../Lib/img/footer__logo.svg"
import git from "../../Lib/img/footer__git.svg"
import twit from "../../Lib/img/footer__twit.svg"
import com from "../../Lib/img/footer__comment.svg"
function Footer(){
    return(

        <>
        <footer className="footerr">
            <div className="container">
               <div className="footer__div">
               <ul className="footer__list">
                    <li className="footer__item">
                        <h2 className="footer__title">Gitpod</h2>
                        <a className="footer__link" href="#link">Home</a>
                        <a className="footer__link" href="#link">Features</a>
                        <a className="footer__link" href="#link">Pricing</a>
                        <a className="footer__link" href="#link">Changelog</a>
                        <a className="footer__link" href="#link">Self-Hosted</a>
                        <a className="footer__link" href="#link">Gitpod vs GitHub</a>
                        <a className="footer__link" href="#link">Codespaces</a>
                        <a className="footer__link" href="#link">Status</a>
                    </li>
                    <li className="footer__item">
                        <h2 className="footer__title">Developer</h2>
                        <a className="footer__link" href="#link">Getting started</a>
                        <a className="footer__link" href="#link">Screencasts</a>
                        <a className="footer__link" href="#link">Blog</a>
                        <a className="footer__link" href="#link">Documentation</a>
                        <a className="footer__link" href="#link">Report a bug</a>
                        <a className="footer__link" href="#link">Community</a>
                    </li>
                    <li className="footer__item">
                        <h2 className="footer__title">Company</h2>
                        <a className="footer__link" href="#link">About</a>
                        <a className="footer__link" href="#link">Careers <span className="header__span">*</span></a>
                        <a className="footer__link" href="#link">Contact</a>
                        <a className="footer__link" href="#link">Media Kit</a>
                    </li>
                    <li className="footer__item">
                        <h2 className="footer__title">Legal</h2>
                        <a className="footer__link" href="#link">Imprint</a>
                        <a className="footer__link" href="#link">Terms of Service</a>
                        <a className="footer__link" href="#link">Privacy Policy</a>
                    </li>
                </ul>
                <hr className="hr" />

                <div className="footer__logos">
                    <img src={Logo} alt="looogoo" width={176} height={24} />
                    <div className="images">

                        <img src={twit} alt="logo" />
                        <img src={git} alt="logo" />
                        <img src={com} alt="logo" />
                    </div>
                </div>
               </div>
            </div>

            <div className="footer__div2">
                <p className="footer__div2__text">This website uses cookies to enhance the user experience. Read our
                <a href="#link" className="footer__div2__span">privacy policy
                </a>for more info.</p>
                <a className="footer__div2__link" href="#link">Accept Cookies</a>
            </div>
        </footer>
        </>
    )
}
export {Footer}