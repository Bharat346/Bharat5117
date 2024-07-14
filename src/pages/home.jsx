import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Calc.css";
import Btn from "../btn.jsx"
// import QR from "./qr.jsx";
import NavBar from "../nav.jsx";
import Card from "../card.jsx";
import Bcard from "../card2.jsx";
import Section_1 from "../section1.jsx";
import Section_2 from "../section2.jsx";
import Section_3 from "../section_3.jsx";
import EmailPage from "../Email-page/email.jsx";
import Footer from "../footer/footer.jsx";
import "../components/css/default.css";
import {blogData} from "../json/blogdata.js";
import Blog from "./blogs/blogs.jsx";
import Progress_Bar from "../circular-Progress-bar/circularProgressBar.jsx";"./jsx-parts/circularProgressBar.jsx"
import { Outlet } from "react-router-dom";
import EducationSection from "../educational.jsx";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <NavBar></NavBar> */}
      <div className="BIGC">
         <Section_1/>
         <div style={{display:"flex",flexDirection:"column" , gap:"10px", width:"100vw"}}>
         <Section_2/>
         <EducationSection/>
         <Section_3/>
         <EmailPage/>
         <Footer/>
         
         </div>
      </div>
    </>
  );
}

export default Home;
