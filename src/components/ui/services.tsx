import { GlobeIcon, MoveRightIcon, icons } from "lucide-react";
import React from "react";
import ServiceCard from "../card/serviceCard";
import { servicesData } from "@/example";

const Services = () => {
  return (
    <section
      id='Services'
      className='w-auto h-auto bg-white scroll-mt-10 dark:bg-darkTheme'
    >
      <div className='w-full px-[12%] py-10 text-gray-700 mt-10'>
        <h4 className='text-center mb-2 text-lg font-Quiacksand dark:text-whiteText'>
          What i offer
        </h4>
        <h2 className='text-center text-5xl font-Josefin'>my services</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Josefin'>
          I am frontend developer from Nepal
        </p>
        <div className='flex flex-col  md:grid md:grid-cols-auto gap-6 my-10'>
          {servicesData.map((item) => {
            console.log(item, "itemitemitemitem");
            return (
              <div className='flex justify-center'>
                <ServiceCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  discription={item.discription}
                  buttonName={item.buttonName}
                  iconSvg={<item.iconSvg />}
                  titleIcon={<item.titleIcon />}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
