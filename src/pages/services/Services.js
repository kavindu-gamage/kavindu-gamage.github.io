import React from "react";
import { Crown } from "../../assests";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div className=" flex flex-col items-center text-white py-16">
      <PageTitle text1="Services" text2="Specialized In" />
      <div className="flex flex-col lg:flex-row justify-center gap-4 p-10">
          <ServiceCard
          url= {Crown}
          urlText="Crown Icon" 
          title="UI/UX Design" 
          body="Turn what you have in mind of a digital product into reality. For any platform you consider." 
          />
          <ServiceCard
          url= {Crown}
          urlText="Crown Icon" 
          title="UI/UX Design" 
          body="Turn what you have in mind of a digital product into reality. For any platform you consider." 
          />
          <ServiceCard
          url= {Crown}
          urlText="Crown Icon" 
          title="UI/UX Design" 
          body="Turn what you have in mind of a digital product into reality. For any platform you consider." 
          />
      </div>
    </div>
  );
};
export default Services;
