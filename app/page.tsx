import Header from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Price from "@/components/price";
import Explanation from "@/components/explanation";
import Services from "@/components/services";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Header />
      <NavBar />
      <Intro />
      <About />
      <Portfolio />
      <Price />
      <Explanation />
      <Services />
      <Footer />
    </>
  )
}