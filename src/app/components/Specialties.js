'use class'
import Image from "next/image";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const Specialties = (props) => {
  const { image, styleName, description } = props;
  const { ref: myRef, inView:myElementIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className="flex  flex-col flex-1 md:mr-5 ">
      <Image
        src={image}
        height={60}
        width={60}
        alt={`${styleName} logo`}
        ref={myRef}
        className={myElementIsVisible ? "transition ease-out delay-150 -translate-y-3 scale-110 mx-auto duration-700":"mx-auto"}
        
      />
      <div className="flex flex-col text-center mb-10 text-black">
        <h3 className="font-bold text-noire-gold">{styleName}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Specialties;
