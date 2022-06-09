import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
// import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-no-repeat bg-cover bg-[url('https://i.ibb.co/hHTvs1g/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here !</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Starts</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
