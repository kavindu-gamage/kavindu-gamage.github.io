import React from "react";
import {
  Aws,
  Docker,
  Express,
  GitLab,
  Go,
  GoogleCloud,
  Java,
  JavaScript,
  MongoDb,
  MySql,
  Node,
  Reactj,
  Spring,
  TypeScript,
} from "../../assests";
import { PageTitle } from "../../components/PageTitle/PageTitle";

const Technologies = () => {
  return (
    <section
      id="skills"
      className="w-full h-auto py-3 border-b-[1px]  border-b-black"
    >
      <div className="flex flex-col text-white pt-10">
        <PageTitle text1="Tech Stack" text2="Skilled With" />
      </div>
      <div class="grid md:grid-cols-5 lg:grid-cols-7 sm:grid-cols-3 xs:grid-cols-2  gap-8 p-5 lg:p-20 mb-10 text-center ">
        <div className="flex flex-col items-center justify-end">
          <img src={Spring} alt="SpringBoot" className="w-16 h-auto " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium  text-designColor">
            SpringBoot
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={Java} alt="Java" className="w-8 h-auto mb-1" />
          <h3 className="text-xs font-['Plus Jakarta Sans'] font-medium  text-designColor">
            Java
          </h3>
        </div>

        <div className="flex flex-col items-center justify-end ">
            <img src={Node} alt="Node" className="w-20 h-auto mb-4" />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium  text-designColor ">
            Node.js
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={Express} alt="Express" className="w-20 h-auto mb-3" />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium  text-designColor ">
            Express.js
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={Go} alt="Go" className="w-16 h-auto mb-3 " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium  text-designColor">
            GoLang
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={JavaScript} alt="JavaScript" className="w-10 h-auto mb-2 " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium text-designColor">
            JavaScript
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={TypeScript} alt="TypeScript" className="w-10 h-auto mb-2 " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium text-designColor">
            TypeScript
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={Reactj} alt="Reactjs" className="w-12 h-auto mb-2 " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium  text-designColor">
            React.js
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={MySql} alt="MySql" className="w-16 h-auto mb-3 " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium text-designColor">
            My Sql
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={MongoDb} alt="Mongo DB" className="w-14 h-auto mb-1" />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium text-designColor">
            mongo DB
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={Docker} alt="Docker" className="w-14 h-auto mb-3" />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium  text-designColor">
            Docker
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={GitLab} alt="GitLab" className="w-10 h-auto mb-2 " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium text-designColor">
          Git Lab
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={GoogleCloud} alt="Google Cloud" className="w-20 h-auto mb-2" />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium text-designColor">
            Google Cloud
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img src={Aws} alt="Aws" className="w-16 h-auto " />
          <h3 className="text-xs  font-['Plus Jakarta Sans'] font-medium  text-designColor">
            AWS
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
