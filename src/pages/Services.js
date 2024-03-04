import React from "react";
import g1 from "../img/WhatsApp Image 2024-03-04 at 10.34.28 AM.jpeg";
import g2 from "../img/WhatsApp Image 2024-03-04 at 10.36.16 AM.jpeg";
import g3 from "../img/WhatsApp Image 2024-03-04 at 10.55.48 AM.jpeg";
import g4 from "../img/WhatsApp Image 2024-03-04 at 11.03.11 AM.jpeg";
import g5 from "../img/WhatsApp Image 2024-03-04 at 11.00.41 AM.jpeg";
const Services = () => {
  return (
    <section>
      <div className="max-w-[1400px] m-auto px-4 grid lg:grid-cols-2 gap-4 py-10">
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
          <img
            className="object-cover w-full h-full p-2 row-span-3"
            src={g2}
            alt=""
          />
          <img
            className="object-cover w-full h-full p-2 row-span-2"
            src={g1}
            alt=""
          />
          <img
            className="object-cover w-full h-full p-2 row-span-2"
            src={g3}
            alt=""
          />
          <img
            className="object-cover w-full h-full p-2 row-span-3"
            src={g4}
            alt=""
          />
          <img
            className="object-cover w-full h-full p-2 row-span-2"
            src={g5}
            alt=""
          />
        </div>
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-5xl md:text-6xl font-bold ">Services</h3>
          <p className="text-2xl py-6">Your health is our priority.</p>
          <p className="pb-6">
            <ul className="text-lg md:flex md:space-x-4">
              <li>Emergency</li>
              <li> Vacination</li>
              <li>Diagnosis Service</li>
              <li>24 Hr care</li>
              <li>Specialist Doctors</li>
              <li>Health Screening</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
