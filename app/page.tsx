import Header from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import Price from "@/components/price";
import Explanation from "@/components/explanation";
import Services from "@/components/services";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Price />
      <Explanation />
      <Services />
      <Footer />
    </>
  )
}