import React from "react";
import { Crown } from "../../assests";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section id='about' className='w-full h-auto py-3 border-b-[1px]  border-b-black'>

    <div className=" flex flex-col items-center text-white py-10">
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
    </section>
  );
};
export default Services;
