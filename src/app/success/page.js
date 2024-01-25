import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      className="flex items-center flex-col justify-center mt-40 
    "
    >
      <div className="w-1/2 text-center">
        <h1 className=" font-bold">
          We have received your message and will get back to you shortly. Thank
          you!
        </h1>
        <button className=" mt-5 bg-noire-gold-400 text-black border border-black w-1/2 hover:bg-noire-gold-300">
          <Link href="/contact">Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
