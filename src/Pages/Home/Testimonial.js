import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people3 from "../../assets/images/people3.png";
import people2 from "../../assets/images/people2.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Masud Rana",
      location: "Bangladesh",
      review: "Very Nice, khubi sundar",
      img: people1,
    },

    {
      _id: 2,
      name: "Mariom",
      location: "Bangladesh",
      review: "Very Nice, khubi sundar",
      img: people2,
    },

    {
      _id: 3,
      name: "Sumaiya",
      location: "Bangladesh",
      review: "Very Nice, khubi sundar",
      img: people3,
    },
  ];
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-primary font-bold">Testimonial</h3>
          <h2>What Our Patients Say</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
