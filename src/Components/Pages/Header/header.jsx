import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Logo from "../../Lib/img/header__img.svg"
import logo from "../../Lib/img/header__menuu.svg"
import "./header.scss"
import "./btn.scss"
import Aos from "aos";
import "aos/dist/aos.css"
function Header() {
     React.useEffect(()=>{
        Aos.init();
},[])
    const Ref = React.useRef(null)

    const Add = () => {
        Ref.current.classList.add("heacder__list22")
    }

    const Remove = () => {
        Ref.current.classList.remove("heacder__list22")
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__div">
                        <a href="#link"  data-aos="fade-left">
                            <img src={Logo} alt="logo" width={131} height={41} />
                        </a>


                        <ul className="header__list"  data-aos="fade-right">
                            <li className="Header__item">
                                <a className="header__link" href="#link">Features</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Pricing</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Blog</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Docs</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Changelog</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">We're hiring <span className="header__span">*</span></a>

                            </li>
                        </ul>



                        <button class="buttonn"  data-aos="fade-right">
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </button>
                        <button className="Btn__menu" onClick={Add}>
                            <img src={logo} alt="logo" />
                        </button>



                        <ul ref={Ref} className="header__list2">
                            <button className="btnlar" onClick={Remove}>X</button>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Features</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Pricing</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Blog</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Docs</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">Changelog</a>
                            </li>
                            <li className="Header__item">
                                <a className="header__link" href="#link">We're hiring <span className="header__span">*</span></a>

                            </li>
                        </ul>

                    </div>
                </div>
            </header>

        </>
    )
}

export { Header }