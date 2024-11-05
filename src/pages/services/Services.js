import React from "react";
import { App, Crown, Globe } from "../../assests";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section id='about' className='w-full h-auto py-3 border-b-[1px]  border-b-black'>

    <div className=" flex flex-col items-center text-white py-10">
      <PageTitle text1="Services" text2="Specialized In" />
      <div className="flex flex-col lg:flex-row justify-center gap-4 p-8">
          <ServiceCard
          url= {Crown}
          urlText="Crown Icon" 
          title="Custom Web Applications" 
          body="Develop tailored web applications from scratch that align with your business needs and provide seamless functionality across platforms." 
          />
          <ServiceCard
          url= {App}
          urlText="App Icon" 
          title="API Development & Integration" 
          body="Build secure and scalable APIs, and integrate third-party services to enhance your application's functionality and performance." 
          />
          <ServiceCard
          url= {Globe}
          urlText="Globe Icon" 
          title="E-Commerce Solutions" 
          body="Launch fully functional e-commerce websites with integrated payment gateways, inventory management, and user-friendly experiences." 
          />
      </div>
    </div>
    </section>
  );
};
export default Services;
