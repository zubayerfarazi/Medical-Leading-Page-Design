import React from "react";

import "./Service.css";
import internalMedicine from "../../assets/service_card_1.svg fill.png";
import dentalCare from "../../assets/service_card_2.svg fill.png";
import urologyCare from "../../assets/service_card_3.svg.png";
import neurologyCare from "../../assets/service_card_4.svg fill.png";
import gynecologists from "../../assets/service_card_5.svg.png";
import ophthalmology from "../../assets/service_card_6.svg fill.png";
import orthopedics from "../../assets/service_card_7.svg fill.png";
import cardiology from "../../assets/service_card_8.svg.png";
import ContentHeader from "../CONTENTHEADER/ContentHeader";

const Service = () => {
  const services = [
    {
      image: `${internalMedicine}`,
      title: "Internal Medicine",
      doctors: "30+ Doctors",
    },
    { image: `${urologyCare}`, title: "Urology Care", doctors: "30+ Doctors" },
    { image: `${dentalCare}`, title: "Dental Care", doctors: "30+ Doctors" },
    {
      image: `${neurologyCare}`,
      title: "Neurology Care",
      doctors: "30+ Doctors",
    },
    {
      image: `${gynecologists}`,
      title: "Gynecologists",
      doctors: "30+ Doctors",
    },
    {
      image: `${ophthalmology}`,
      title: "Ophthalmology",
      doctors: "30+ Doctors",
    },
    { image: `${orthopedics}`, title: "Orthopedics", doctors: "30+ Doctors" },
    { image: `${cardiology}`, title: "Cardiology", doctors: "30+ Doctors" },
  ];
  return (
    <div className="serviceSection">
      <ContentHeader title="Our Services"></ContentHeader>
      <div className="serviceHeader">
        <p>Our MediAx Specialties</p>
        <p>Service</p>
      </div>
      <div className="serviceFlex">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <img src={service.image} alt="" />
            <p className="serviceCardHeader">{service.title}</p>
            <p className="serviceCardParagraph">{service.doctors}</p>
            <button className="readButton">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
