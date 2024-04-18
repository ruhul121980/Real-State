import React from "react";
import Slid from "./Slid"; 
import Estate from "./Estate";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl"></h2>
      <Slid />
      <Estate></Estate>
      <Footer></Footer>
    </div>
  );
}
