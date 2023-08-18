"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import BookButton from "../components/BookButton";
import Images from '../components/Images.js'
import image1 from '../assets/clientImages/206298332_113370597667632_8287303202346434933_n.jpg'
import image2 from '../assets/clientImages/206487995_113370641000961_7204808302955302452_n.jpg'
import image3 from '../assets/clientImages/206566106_113370561000969_4393745460899097362_n.jpg'
import image4 from '../assets/clientImages/207220256_113357834335575_2423935073195352852_n.jpg'
import image5 from '../assets/clientImages/207338398_113357814335577_3542937771647406335_n.jpg'
import image6 from '../assets/clientImages/213246565_114773457527346_5436039462430176459_n.jpg'
import image7 from '../assets/clientImages/213827469_114773444194014_6952385179451093757_n.jpg'
import image8 from '../assets/clientImages/214494728_114773480860677_2596673136583914489_n.jpg'
import image9 from '../assets/clientImages/271590400_215856947418996_447858686198827769_n.jpg'
import image10 from '../assets/clientImages/302053139_381050127564487_6278609677496043294_n.jpg'
import image11 from '../assets/clientImages/302697761_377215484614618_8244741789604176536_n.jpg'
import image12 from '../assets/clientImages/303364406_377214924614674_5430206517606936566_n.jpg'
import image13 from '../assets/clientImages/313933648_425808723088627_357417800697862361_n.jpg'

const services = [
  {
    category: "Knotless Braids",
    options: [
      "Knotless Braids",
      "Boho Knotless Braids",
      "Knotless Braid Bob",
      "Kids Knotless Braids",
    ],
  },
  {
    category: "Braids/Cornrow Styles",
    options: ["Feed-in Braids", "Stitch Braids", "Crochet Braid"],
  },
  {
    category: "Half Up/Half Down",
    options: ["Half Up, Half Down Style w/ braids and bundles"],
  },
  {
    category: "Soft Locs",
    options: ["Soft Locs"],
  },
];



export default function Services() {
  return (
    <div className=" mt-24 ">
      <div className="mx-auto max-w-1/2 px-4 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
            Services
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {services.map((service) => (
              <Disclosure as="div" key={service.category} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-2xl font-semibold leading-7 text-center mx-auto">
                          {service.category}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ChevronUpIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <ul>
                        {service.options.map((option) => (
                          <li className="text-md text-center" key={option.id}>
                            {option}
                          </li>
                        ))}
                      </ul>
                      <div className="mx-auto flex justify-center mt-3">
                        <BookButton />
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        {/* GALLERY */}
        <div className="w-full mx-auto my-0 ">
          <h2 className="text-4xl mt-32 font-bold leading-10 text-center tracking-tight text-gray-900">
            Gallery
          </h2>
          <div className="flex overflow-x-auto -space-x-40 md:space-x-8  w-full mx-auto mt-8">
            <Images image={image1}/>
            <Images image={image2}/>
            <Images image={image3}/>
            <Images image={image4}/>
            <Images image={image5}/>
            <Images image={image6}/>
            <Images image={image7}/>
            <Images image={image8}/>
            <Images image={image9}/>
            <Images image={image10}/>
            <Images image={image11}/>
            <Images image={image12}/>
            <Images image={image13}/>
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
