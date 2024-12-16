import React from "react";

import "./SpecialDoctor.css";
import { IoIosStar } from "react-icons/io";

import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import ContentHeader from "../CONTENTHEADER/ContentHeader";

const SpecialDoctor = () => {
  const doctorInfo = [
    {
      image: `${doctor1}`,
      name: "Dr. Dredor Smith",
      type: "Medicine specialist ",
      rating: "3.92",
      ratingPeoples: 252,
      patients: 4895,
      hospital: "Infermedica Hospital, NYC",
    },

    {
      image: `${doctor2}`,
      name: "Dr. Amrita sen gupta ",
      type: "General Surgeon ",
      rating: "4.8 ",
      ratingPeoples: 599,
      patients: 1698,
      hospital: "Mediplus Hospital, NYC",
    },

    {
      image: `${doctor3}`,
      name: "Dr. Christinne Jones",
      type: "Pediatrist",
      rating: "4.8 ",
      ratingPeoples: 321,
      patients: 9375,
      hospital: "Advocate Hospital, NYC",
    },
  ];
  return (
    <div className="specialDoctorSection">
      {/* icon flex */}
      <ContentHeader title="Our Doctors"></ContentHeader>
      {/* icon flex */}
      <p className="specialDoctorHeader">Our Special Doctors</p>
      <p className="specialDoctorPara">
        Our team of specialists is at the forefront of medical innovation. Each
        specialist brings a unique blend of expertise, empathy, and experience
        to ensure that your health is in the best hands:
      </p>
      {/* doctors Information */}
      <div className="doctorsInformation">
        {doctorInfo.map((doctor, index) => {
          return (
            <div key={index} className="doctorCard">
              <img src={doctor.image} alt={doctor.name} />
              <p className="doctorName">{doctor.name}</p>
              <div className="doctorTypeRating">
                <p className="doctorType">{doctor.type}</p>
                <p className="doctorRating">
                  <IoIosStar className="starIcon" />{" "}
                  <span className="rating">{doctor.rating}</span>
                  <span className="ratingNumbers">
                    ({doctor.ratingPeoples})
                  </span>
                </p>
              </div>
              <p className="patientsNumber">{doctor.patients} Patients</p>
              <p className="hospitalName">{doctor.hospital}</p>
            </div>
          );
        })}
      </div>
      {/* doctors Information */}
    </div>
  );
};

export default SpecialDoctor;
