import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hour"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit Our Site"
        bgClass="bg-[#3d4451]"
        img={phone}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us Now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
    </div>
  );
};

export default Info;
