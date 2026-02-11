import { useState } from "react";
import Gallery from "../components/gallery";

function Home() {

  return (
    <div className="flex flex-col justify-center gap-20">
        <div className="text-left mt-5 gap-5 flex flex-col">
            <h2 className="text-5xl">Marine Diesel Services LLC</h2>
            <h1 className="text-3xl">DIESEL ENGINE SERVICE, SALES & PARTS SALES</h1>
            <h3 className="text-xl font-extrabold">VOLVO, STEYR, YANMAR, CUMMINS, CATEPILLAR, IVECO, MTU, BUKH, DETROIT, NANNI, LISTER, DEERE</h3>
        </div>
        <div>
            <Gallery/>
        </div>
        <div className="mb-5 ml-5">
            <div className="font-bold text-left mb-5">
                <h1>Contact us:</h1>
            </div>
            <div className="text-2xl text-left">
                <p>sergio@marinedieselservices.comcastbiz.net</p>
                <p>Tel: (954) 326-7755</p>
                <p>1835 E HALLANDALE BEACH BLVD 175</p>
                <p>HALLANDALE BEACH, FL 33009</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
