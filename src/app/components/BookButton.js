import React from "react";

const BookButton = (props) => {
    const {mobile} = props
  return (
    <a href="https://noirebeautebyj.as.me/schedule.php" target="_blank">
      <button className={!mobile ? "bg-noire-gold hover:bg-white transition duration-150 ease-out hover:ease-in font-semibold px-2 text-sm rounded-full  hover:scale-125  text-black" : "bg-noire-gold font-semibold px-8 py-2 mt-4 text-sm rounded-full w-full text-black"} >
        Book Now
      </button>
    </a>
  );
};

export default BookButton;
