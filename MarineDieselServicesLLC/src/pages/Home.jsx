import { useState } from "react";
import Gallery from "../components/gallery";

function Home() {

  return (
    <>
        <div className="absolute top-0 left-0 text-left ml-5 mt-5 ">
            <h2 className="text-8xl">Marine Diesel Services LLC</h2>
            <h1 className="text-8xl">DIESEL ENGINE SERVICE, SALES & PARTS SALES</h1>
            <h3 className="text-3xl">VOLVO, STEYR, YAAR, CUMMINS, CATEPILLAR, IVECO, MTU, BUKH, DETROIT, NANNI, LISTER, DEERE</h3>
        </div>
        <div>
            <Gallery/>
        </div>
        <div className="absolute bottom-0 left-0 mb-5 ml-5">
            <div className="text-2xl text-left">
                <p>1835 E HALLANDALE BEACH BLVD 175</p>
                <p>HALLANDALE BEACH, FL 33009</p>
                <p>Tel: (954) 326-7755</p>
                <p>sergio@marinedieselservices.comcastbiz.net</p>
            </div>
        </div>
    </>
  );
}

export default Home;
