import React from "react";
import divider from "../assets/divider.svg";
import ig from "../assets/ig.svg";
import fb from "../assets/fb.svg";
import tiktok from "../assets/tiktok.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

import Image from "next/image";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <div className="mt-40 md:mt-24 w-full flex flex-col md:flex-row  items-center justify-evenly md:align-middle gap-4 px-8">
      {/* LEFT */}
      <div className="flex flex-col items-center gap-2 flex-1 w-fit">
        <div className="flex flex-col items-center gap-7">
          <div>
            <h2 className=" text-white text-2xl">Follow me on social media</h2>
          </div>
          {/* SOCIAL LINKS */}
          <div className="flex gap-5 md:gap-3">
            <Image src={fb} className="w-10 h-10" alt="facebook logo" />
            <Image src={ig} className="w-10 h-10" alt="instagram logo" />
            <Image src={tiktok} className="w-10 h-10" alt="tiktok logo" />
          </div>
          {/* Phone and email */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row align-middle items-center gap-3">
              <Image src={phone} className="w-10 h-10" alt="phone logo" />
              <p>678-430-9825</p>
            </div>
            <div className="flex flex-row  align-middle items-center gap-3">
              <Image src={email} className="w-10 h-10" alt="email logo" />
              <p>JULZBRAIDING@GMAIL.COM</p>
            </div>
          </div>
        </div>
      </div>
      {/* DIVIDER LINE */}
      <div className="w-fit">
        <Image src={divider} alt="page divider line" className=" hidden md:flex h-fit" />
      </div>
      {/* RIGHT */}
      <div className="flex-1 w-fit flex flex-col mt-10">
        <h3 className="text-5xl font-bold text-center">Get in Touch</h3>
        <section className="">
          <ContactForm/>


        </section>
        

      </div>
    </div>
  );
};

export default page;
