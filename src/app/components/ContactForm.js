"use client";
import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const formKey = process.env.NEXT_PUBLIC_FORM_KEY;

  return (
    <div className="w-full h-fit  p-5  mx-auto rounded-md mt-3 md:w-4/5 ">
      <form method="POST" action="https://api.web3forms.com/submit">
        <input type="hidden" name="access_key" value={formKey} />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Full Name*
          </label>
          <div className="relative mt-2 text-black">
            <input
              type="text"
              name="name"
              id="name"
              className="peer block w-full border-0 py-1.5 text-black focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
              required
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-white peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-white"
          >
            Email*
          </label>
          <div className="relative mt-2 text-black">
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full border-0 py-1.5 text-black focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="example@email.com"
              required
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-white peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-white"
          >
            Message*
          </label>
          <div className="relative mt-2 text-black">
            <textarea
              rows={5}
              cols={20}
              name="message"
              id="message"
              className="peer block w-full border-0 py-1.5 text-black focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="type your message here"
              required
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-white peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="redirect"
          value="http://localhost:3000/success"
        />

        <div className="mx-auto my-4 flex justify-center">
          <button
            type="submit"
            className=" bg-noire-gold-400 text-black border border-black w-1/2 hover:bg-noire-gold-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
