import { GlobeIcon, MoveRightIcon } from "lucide-react";
import React, { ReactNode } from "react";

export interface IserviceCard {
  id: number;
  title: string;
  discription: string[];
  buttonName: string;
  iconSvg: any;
  titleIcon: any;
}

const ServiceCard: React.FC<IserviceCard> = ({
  title,
  discription,
  buttonName,
  iconSvg,
  titleIcon,
}) => {
  console.log(iconSvg, "iconSvg ");
  console.log("dis", discription);
  return (
    <>
      <div className='border border-neutral-300 rounded-lg px-8 py-12 hover:shadow-whiteShadow cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 dark:hover:bg-hoverDarkColor w-1/3'>
        {React.cloneElement(titleIcon, { className: "dark:text-white" })}
        <h3 className='text-lg my-4 font-Josefin text-zinc-700 dark:text-whiteText'>
          {title}
        </h3>
        <ul className='text-sm text-gray-600 leading-5 font-Josefin '>
          {discription.map((item, index) => {
            return (
              <li
                key={index}
                className=' text-zinc-500 list-disc text-sm dark:dark:text-whiteText ml-4'
              >
                {item}
              </li>
            );
          })}
        </ul>

        <a
          href='#'
          className='flex items-center gap-2 text-sm mt-5 font-Josefin hover:text-hoverColor text-zinc-500 dark:text-whiteText'
        >
          {buttonName}
          <span>
            {React.cloneElement(iconSvg, {
              className:
                "dark:text-white w-4 text-zinc-500 dark:text-whiteText",
            })}
          </span>
        </a>
      </div>
    </>
  );
};

export default ServiceCard;
