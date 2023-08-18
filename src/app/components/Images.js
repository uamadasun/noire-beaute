import Image from "next/image";
import React from "react";

const Images = (props) => {
  const { image } = props;
  return (
    <section className="flex-shrink-0 mx-auto my-0">
        
      <Image
        src={image}
        className="w-1/2 h-full md:h-96 md:w-96 rounded-lg"
        alt={`${image} image for slide show`}
      />
    </section>
  );
};

export default Images;
