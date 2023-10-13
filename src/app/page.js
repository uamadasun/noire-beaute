"use client"

import Image from "next/image";
import juls from "./assets/juls.svg";
import greeting from "./assets/greeting.svg";
import signature from "./assets/signature.svg";
import naturalHair from "./assets/naturalHair.svg";
import softLocs from "./assets/softLocs.svg";
import weave from "./assets/weave.svg";
import banner from "./assets/banner.svg";

import Specialties from "./components/Specialties";



export default function Page() {
  



  return (
    <div className="relative h-fit">

      {/* HERO SECTION */}
      <section className="dark:bg-gray-900 pt-24 hero-section">
        <div className="py-8 mx-3 max-w-screen-xl text-left lg:py-16 lg:px-0 bg-banner bg-no-repeat bg-cover">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            NATURAL HAIR ARTIST
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-3xl sm:mx-0 xl:px-0 sm:px-0 dark:text-gray-400 w-2/3">
            Holistic hair health and beauty. Specializing in natural haircare,
            protective styling, and enhancing natural texture.
          </p>
          <div className="mx-auto my-0">
            <a href="https://noirebeautebyj.as.me/schedule.php" target="_blank">
              <button
                className=
                    " bg-noire-gold-300 font-semibold px-8 py-3 mt-2 text-sm rounded-full w-1/3 md:hidden text-black "
              >
                Book Now
              </button>
            </a>
          </div>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
        </div>
      </section>

      <section className="about-me max-h-fit bg-white">
        <div className="py-24 max-w-screen-xl text-left relative mx-auto">
          <h2 className="text-black text-center text-3xl lg:text-5xl md:text-4xl xl:text-6xl font-bold mx-auto">
            MEET YOUR STYLIST
          </h2>
          <div className="flex flex-col md:flex-row align-middle justify-center items-center">
            <Image
            
              src={juls}
              height={175}
              width={175}
              alt="'Hey beautiful'"
              className="juls mx-auto my-0 md:mx-16 lg:mx-20 mt-5 md:h-64 lg:h-72 md:w-64 lg:w-72 object-contain"
            />
            <div className=" text-black text-center mx-5 md:mr-10 mt-5 align-middle">
              <Image
                src={greeting}
                height={250}
                width={250}
                className="mx-auto mb-2"
              />
              <p className="text">
                Welcome! Thank you for choosing me as your stylist and partner
                in your healthy hair journey. My passion is revealing the
                natural beauty of your hair by embracing and enhancing your
                unique texture. Together we can achieve your ultimate hair goals
                - protecting and growing your gorgeous natural hair.
              </p>

              <Image
                src={signature}
                height={300}
                width={300}
                alt="'xoxo, Juls'"
                className="mx-auto"
              />
            </div>
          </div>

          <section className="specialty mt-10">
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 mt-12">
              <span className="font-semibold uppercase text-black text-2xl">
                SPECIALTIES
              </span>
              <div className="flex flex-wrap flex-col md:flex-row justify-center items-top mt-8  md:align-baseline sm:justify-between gap-1.5">
                {/* Natural Hair Care */}
                <Specialties
                  image={naturalHair}
                  description={
                    "I offer cuts, colors, and styles that enhance natural curls, coils, and textures."
                  }
                  styleName={"NATURAL HAIR CARE"}
                />

                {/* Soft Locs */}
                <Specialties
                  image={softLocs}
                  description={
                    "My meticulous technique creates lightweight, seamless soft locs that stun."
                  }
                  styleName={"SOFT LOCS"}
                />

                {/* Weave */}

                <Specialties
                  image={weave}
                  description={
                    "Customizable, high-quality weaves give versatile styling and a natural look."
                  }
                  styleName={"WEAVE"}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
