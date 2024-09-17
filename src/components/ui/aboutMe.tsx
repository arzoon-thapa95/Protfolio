"use client";
import React from "react";
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
} from "lucide-react";
import { imageData } from "@/example";
import Image from "next/image";
import imagesPic from "/public/images/arjunThapa.jpeg";

const AboutMe = () => {
  return (
    <section className='bg-white dark:bg-darkTheme w-auto h-auto scroll-mt-10 mt-10'>
      <div className='text-black w-full px-[12%] py-10 scroll-mt-1'>
        <h4 className='text-center mb-2 text-lg font-Josefin dark:text-whiteText'>
          Introduction
        </h4>
        <h2 className='text-center text-5xl dark:text-whiteText'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='max-w-max mx-auto relative'>
            <Image
              src={imagesPic}
              alt='next'
              height={500}
              width={500}
              className='w-64 sm:w-60 mb-2 rounded-lg'
            />
          </div>
          <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Josefin text-justify dark:text-whiteText'>
              {`  I'm a passionate and dedicated web developer with a fresh
              perspective on creating innovative and responsive web
              applications. I specialize in HTML, CSS, JavaScript, and am
              continuously expanding my skills to include the latest
              technologies. I'm eager to contribute to dynamic projects and
              collaborate with teams to bring ideas to life through code.`}
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-auto gap-6 max-w-2xl'>
              <li className='border-[0.5px] border-neutral-300 rounded-xl p-6 cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 hover:shadow-whiteShadow dark:border-gray dark:hover:bg-hoverDarkColor '>
                <CodeXmlIcon className='w-7 mt-3 text-gray-500 dark:text-whiteText' />
                <h3 className='my-4 font-semiboldtext-zinc-700 font-Josefin dark:text-whiteText'>
                  {`Languages`}
                </h3>
                <p className='text-zinc-500 text-sm font-Josefin dark:text-whiteText'>
                  {`HTML,CSS,JavaScript,`}
                  <br />
                  {`TypeScript,React Js,Nextjs`}
                </p>
              </li>
              <li className='border-[0.5px] border-neutral-300 rounded-xl p-6 cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 hover:shadow-whiteShadow dark:border-gray dark:hover:bg-hoverDarkColor '>
                <GraduationCapIcon className='w-7 mt-3 text-gray-500 dark:text-whiteText' />
                <h3 className='my-4 font-semiboldtext-zinc-700 font-Josefin dark:text-whiteText'>
                  {`Education`}
                </h3>
                <p className='text-zinc-500 text-sm font-Josefin dark:text-whiteText'>
                  {`TSLC in computer engineering.`}
                </p>
              </li>
              <li className='border-[0.5px] border-neutral-300 rounded-xl p-6 cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 hover:shadow-whiteShadow dark:border-gray dark:hover:bg-hoverDarkColor '>
                <BriefcaseBusinessIcon className='w-7 mt-3 text-gray-500 dark:text-whiteText' />
                <h3 className='my-4 font-semiboldtext-zinc-700 font-Josefin dark:text-whiteText '>
                  {`Projects`}
                </h3>
                <p className='text-zinc-500 text-sm font-Josefin dark:text-whiteText'>
                  {`Built 2 projects`}
                </p>
              </li>
            </ul>
            <h4 className='my-5text-zinc-700 font-Josefin dark:text-whiteText'>
              Tools i use
            </h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {imageData.map((item) => {
                return (
                  <li
                    className='flex items-center justify-center w-12 sm:w-7 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-whiteShadow duration-500 dark:border-white border-neutral-300'
                    key={item.id}
                  >
                    <Image src={item.path} alt={item.alt} className='w-4' />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
