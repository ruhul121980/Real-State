import React from "react";
import Slid from "./Slid"; // Make sure the path to the Slid component is correct
import Estate from "./Estate";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl"></h2>
      <Slid /> {/* Place the Slid component inside the div */}
      <Estate></Estate>
      <Footer></Footer>
    </div>
  );
}
