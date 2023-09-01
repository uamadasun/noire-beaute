import React from "react";

const ContactForm = () => {
  return (
    <div className="w-96 h-96  p-10">
      <form method="POST" action="#">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium leading-6 text-white"
          >
            Full Name
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              name="fullName"
              id="name"
              className="peer block w-full border-0 py-1.5 text-black-900 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-white peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
        </div>

        <button type="submit" className="absolute">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
