import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="bg-primary px-10 py-14 "
    >
      <div className="text-center pb-14 text-white">
        <h4 className="text-xl text-primary">Contact Us</h4>
        <h2 className="text-xl font-bold">Stay Connected With Us</h2>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={3}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default ContactUs;
