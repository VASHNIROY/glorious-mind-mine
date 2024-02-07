import React from 'react';
import logo1 from "../Images/bannersuccess.png";
import "./index.css";

import Header from '../Homes/Headers';
import Footer from '../Homes/Footer';
import {BsArrowDown} from 'react-icons/bs';
import SocialIcons from '../Homes/Socialicons';

import roy from '../Images/ai-image-1.png';
import Akhila from '../Images/ai-image-7.png';
import saicharan from '../Images/ai-image-3.png';
import triveni from '../Images/ai-image-6.png';
import venu from '../Images/ai-image-9.png';
import umar from '../Images/ai-image-4.png';
import nagesh from '../Images/ai-image-2.png';
import chandana from '../Images/ai-image-5.png';
import cog from "../Images/cognizant.png";
import genpact from "../Images/genpact.jpg";
import google from "../Images/google.png";
import capgemini from "../Images/capgemini.png";
import wipro from "../Images/wipro.jpg";
import exl from "../Images/exl.jpg";
import lgs from "../Images/lgs.png";
const SuccessStory = () => {
  const reviewsList = [
    {
      Image:roy,
      name: "Vashni Roy",
      description: "Junior Developer",
      currentRole: "Senior Developer",
      previousCompany2: "Cognizant",
      company:cog,
    },
    {
      name: "Akhila",
      Image:Akhila,
      description: "Non-Technical",
      currentRole: "Data Analyst",
      previousCompany2: "Google",
      company:google,
    },
    // Add six more testimonials here
    {
      name: "Saicharan",
      Image:saicharan,
      description: "Civil Graduate",
      currentRole: "Full Stack Developer",
      previousCompany2: "Capgemini",
      company:capgemini,
    },
    {
      name: "Triveni",
      Image:triveni,
      description: "Non-Tech Background",
      currentRole: "Sales force admin ",
      previousCompany2: "Wipro",
      company:wipro ,
    },
    {
      name: "Umar",
      Image:umar,
      description: "Degree Graduate",
      currentRole: "Data Scientist",
      previousCompany2: "LGS",
      company:lgs ,
    },
    {
      name: "Nagesh",
      Image:nagesh,
      description: "Non-Tech Background",
      previousCompany: "Genpact",
      currentRole: "Digital Marketing Specialist",
      previousCompany2: "Genpact",
      company: genpact,
    },
    
    {
      name: "Venu",
      Image:venu,
      description: "Degree Graduate",
      previousCompany: "LGS",
      currentRole: "Software Developer",
      previousCompany2: "LGS",
      company: lgs ,
    },
    {
      name: "Chandana",
      Image:chandana,
      description: "Digital Marketing",
      previousCompany: "LGS",
      currentRole: "Data Scientist",
      previousCompany2: "EXL",
      company:exl ,
    },
    // {
    //   name: "Prashanth",
    //   Image:prashanth,
    //   description: "Marketing professional with expertise in brand strategy and digital marketing.",
    //   previousCompany: "LGS",
    //   currentRole: "software Engineer",
    //   previousCompany2: "IBM",
    // }, 
  ];

  return (
        <>
        <Header/>
        <SocialIcons/>
        <div>
          <div className="alumni-banner">
            <div className="alumni-banner-content">
              <h3 className="alumini-text">Inspiring stories of success from our learners</h3>
              <p className='alumini-para'>Our candidate pool is your shortcut to efficient hiring. By choosing from our pre-qualified, pre-trained candidates, you'll experience a notable improvement in your interview-to-offer success rate. We've taken the guesswork out of recruitment by prioritizing quality and diversity, ensuring you have access to a wide range of talents and backgrounds.</p>
              {/*<div className="alumni-banner-btns">
              <button class="alumni-banner__btn " data-event-type="View Career Transitions" data-title="Alumni Banner" data-tab-id="tab-career-transition">Explore Career Transitions</button>
              <button class="alumni-banner__btn " data-event-type="Watch Success Stories" data-title="Alumni Banner" data-tab-id="tab-success-stories">View Testimonials</button>
              </div>*/}
            </div>
            <div className="alum-banner-image">
              <img src={logo1} alt="Logo" />
        </div>
          </div>
      <div >
        <ul className="success-story-testimonial-container">
          {reviewsList.map((each, index) => (
            <li key={index} className="success-story-testimonial-each-list">
                <img className="success-story-testimonial-image" src={each.Image} alt="Profile" />
                <p className="success-story-testimonial-name">{each.name}</p>
                <p className="success-story-testimonial-previous-role">{each.description}</p>
                <BsArrowDown className="success-story-testimonial-icon"/>
                <p className="success-story-testimonial-current-role">{each.currentRole}</p>
                <img src={each.company} className="success-story-testimonial-company-image" alt=""/>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
  


};

export default SuccessStory;