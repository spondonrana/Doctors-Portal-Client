import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center mt-40"
    >
      <div className="flex hidden lg:block">
        <img
          style={{ width: `650px`, height: `650px` }}
          className="mt-[-200px]"
          src={doctor}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make An Appointment</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          earum ab cupiditate autem accusantium expedita sequi, temporibus, aut
          illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed
          maiores doloremque consequatur. Amet consequuntur quibusdam autem,
          quod maxime qui itaque quaerat.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;