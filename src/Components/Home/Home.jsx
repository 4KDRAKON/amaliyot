import {Header} from "../Pages/Header/header";
import { Section__design } from "../Pages/Section__design/Section__disign";
import { Section__git } from "../Pages/Section__git/section__git";
import { Footer } from "../Pages/footer/footer";
import { Hero } from "../Pages/hero/Hero";
import { Section__dev } from "../Pages/section__dev/section__div";
import { Section__devs } from "../Pages/section__devs/Section__devs";

function Home() {
    return (
        <>
        <Header />
        <Hero />
        <Section__dev />
        <Section__design />
        {/* <Section__devs /> */}
        <Section__git />
        <Footer />
        </>
    )
}

export default Home;