import React from "react";
import LoadMap from "../components/Map";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen justify-center md:align-middle gap-4 px-8">
      {/* LOCATION */}
      <section className=" w-full md:w-1/4 text-center p-2">
        <h1 className="text-3xl font-bold mb-4">Location</h1>
        <div className="text-xl leading-8 tracking-wide">
          <p>132 WOODSTOCK SQUARE AVE #420</p>
          <p>WOODSTOCK, GA 30189</p>
        </div>
      </section>
      {/* MAP */}
      
      <section className=" border-noire-gold border-8  w-full md:w-1/2 hidden md:flex">
        <LoadMap />
      </section>
      {/* HOURS */}
      <section className=" w-full md:w-1/4 text-center p-2">
        <h1 className="text-3xl font-bold mb-4">Hours</h1>
        <div className="text-xl leading-8 tracking-wide">
          <p>MON,TUES & FRI | <span className="text-noire-gold">8:30AM-5PM</span></p>
          <p>SUN | <span className="text-noire-gold">10AM-4PM</span></p>
          <p>WED, THURS & SAT | <span className="text-noire-gold">CLOSED</span></p>
        </div>
      </section>
      <section className=" border-noire-gold border-8  w-full md:hidden">
        <LoadMap />
      </section>
    </div>
  );
};

export default page;
