
import React from "react";
import "./section__git.scss"
import Logo from "../../Lib/img/gitlab__git.svg"
import Logo2 from "../../Lib/img/git__hubgit.svg"
import Logo3 from "../../Lib/img/bit__git.svg"
import Type from "../../Lib/img/typeckript.svg"
import Phyton from "../../Lib/img/phyton.svg"
import Go from "../../Lib/img/okey__lets__go.svg"
import rust from "../../Lib/img/r.svg"
import Java from "../../Lib/img/javasila.svg"
import svet from "../../Lib/img/svet.svg" 
import Aos from "aos";
import "aos/dist/aos.css"
function Section__git(){
    React.useEffect(()=>{
        Aos.init();
},[]) 
    return(

        <>
        {/* <section className="Section__git">
            <div className="container"> */}
                {/* <div className="Section__git__div">
                    <h2 className="Section__git__title">Get started now</h2>
                    <ul className="Section__git__list">
                        <li className="Section__git__item">
                            <h2 className="Section__git__item__title">Connect Git repository</h2>
                            <p className="Section__git__item__text">Select a Git provider to start with 
                            an existing project from any Git context.</p>
                            <a className="gitlab" href="#link">
                                <img className="gitlan" src={Logo} alt="logo" width={28} height={28} />
                                Continue with GitLab
                            </a>
                            <a className="github" href="#link">
                                <img className="gitlan" src={Logo2} alt="logo" width={28} height={28} />
                                Continue with GitHub
                            </a>

                            <a className="gitbit" href="#link">
                                <img className="gitlan" src={Logo3} alt="logo" width={28} height={28} />
                                Continue with GitHub
                            </a>

                            <p className="Section__git__item__text2">Or prefix any GitLab, GitHub or Bitbucket URL with</p>
                            <a className="ai" href="#link">gitpod.io/#</a>
                        </li>
                        <li></li>
                    </ul>
                </div> */}



<section id="connect" class="connect" data-aos="fade-up">
      <h1 class="title">Get started now</h1>
      <div class="container connect-container">
        <div class="card-left">
          <h2>Connect Git repository</h2>
          <h4>
            Select a Git provider to start with an existing project from any Git
            context.
          </h4>
          <div class="buttons">
            <a href="#link" class="orange-btn">
              <img src={Logo} alt="" />
              <span>Continue with GitLab</span>
            </a>
            <a href="#link" class="black-btn">
              <img src={Logo2} alt="" />
              <span>Continue with GitHub</span>
            </a>
            <a href="#link" class="blue-btn">
              <img src={Logo3} alt="" />
              <span>Continue with Bitbucket</span>
            </a>
          </div>
          <p>Or prefix any GitLab, GitHub or Bitbucket URL with</p>
          <a class="lastChild" href="">gitpod.io/#</a>
        </div>
        <div class="card-right">
          <h2>Launch an example workspace</h2>
          <h4>Dive into one of our example workspaces</h4>
          <div class="launchs">
            <div class="launch">
              <img src={Type} alt="" />
              <h3>Node or TypeScript</h3>
              <a href="">Launch workspace</a>
            </div>
            <div class="launch">
              <img src={Phyton} alt="" />
              <h3>Python</h3>
              <a href="">Launch workspace</a>
            </div>
            <div class="launch">
              <img src={Go} alt="" />
              <h3>Go</h3>
              <a href="">Launch workspace</a>
            </div>
            <div class="launch">
              <img src={rust} alt="" />
              <h3>Rust</h3>
              <a  href="">Launch workspace</a>
            </div>
            <div class="launch">
              <img src={Java} alt="" />
              <h3>Java</h3>
              <a href="">Launch workspace</a>
            </div>
            <div class="launch">
              <img src={svet} alt="" />
              <h3>Svelte</h3>
              <a href="">Launch workspace</a>
            </div>
          </div>
        </div>
      </div>
    </section>











            {/* </div>
        </section> */}
        </>
    )
}

export {Section__git}


