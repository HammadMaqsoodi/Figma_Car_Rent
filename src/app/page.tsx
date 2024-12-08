"use client"
// import { Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./component/footer";
import Cart from "./component/cart";
import Navbar from "./component/navbar";
import Banner from "./component/banner";
import Cart1 from "./component/cart1";
import Cart2 from "./component/cart2";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <Banner/>
      <Cart/>
      <Cart1/>
      <Cart2/>
      <Footer/>
      
      
    </div>
  );
}
