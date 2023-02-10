
import About from "./about";
import Footer from "./footer";
import Info from "./info";
import Interests from "./interests";

import "./SoloProjectOne.css";


export default function SoloProjectOne() {
  return (
    <div className="solo-project-one-wrapper">
      <Info />
      <About></About>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  )
}
