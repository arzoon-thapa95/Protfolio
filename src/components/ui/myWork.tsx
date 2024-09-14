"use client";
import { MoveRight, SendIcon } from "lucide-react";
import React from "react";

const MyWork = () => {
  return (
    <div
      id='work'
      className='w-auto h-auto bg-white scroll-mt-10 dark:bg-darkTheme'
    >
      <div className='w-full px-[12%] py-10 text-gray-700'>
        <h4 className='text-center mb-2 text-lg font-Roboto'>My portfolio</h4>
        <h2 className='text-center text-5xl font-Josefin'>My latest work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Josefin items-center'>
          Welcome to my web development portfolio! Explore a callection of
          projects showcasing my expertise in fornt-end development.
        </p>
        <div className='flex flex-col md:grid md:grid-cols-auto gap-6 my-10'>
          <div className='border rounded-lg px-2 py-2 hover:bg-slate-100 cursor-pointer dark:hover:bg-hoverDarkColor hover:-translate-y-1 duration-500 justify-between gap-2 w-auto hover:shadow-whiteShadow border-neutral-300'>
            <div className='w-full rounded-lg'>
              <img
                src='../images/photo-1605559424843-9e4c228bf1c2.jpg'
                alt='project one'
                height={1000}
                width={1000}
                className='w-full h-[300px] rounded-sm object-cover'
              />
            </div>
            <div className='flex flex-col gap-4  mx-auto w-11/12 p-4 text-zinc-700'>
              <h1 className='text-start font-Josefin font-bold '>
                Sushimerksem
              </h1>
              <div className='font-Josefin'>
                <ul className='list-disc font-semibold text-start text-xs text-zinc-500'>
                  <li>
                    <strong>Dashboard Design and Integration.</strong>
                  </li>
                  <li>
                    <strong>CRUD Operations with TanStack Query.</strong>
                  </li>
                  <li>
                    <strong>UI Design</strong>
                  </li>
                  <li>
                    <strong>API Integration</strong>
                  </li>
                </ul>
              </div>

              <ul className='items-center gap-3 sm:gap-2 w-auto flex-wrap text-xs text-zinc-500 flex self-stretch '>
                <li className='flex items-center justify-center sm:w-7  border-gray shadow-md rounded-lg cursor-pointer hover:bg-slate-300 duration-500 w-auto px-2 py-2 min-w-14 dark:hover:bg-black/40 dark:bg-black/80'>
                  React
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-2 py-2 min-w-24 w-auto text-nowrapdark:hover:bg-black/40 dark:bg-black/80'>
                  Javascript
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  TypeScript
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  Tailwind CSS
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  TanStack Query
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  TanStack Table
                </li>
              </ul>
            </div>
          </div>

          <div className='border rounded-lg px-2 py-2 hover:bg-slate-100 cursor-pointer dark:hover:bg-hoverDarkColor hover:-translate-y-1 duration-500 justify-between gap-2 w-auto hover:shadow-whiteShadow border-neutral-300'>
            <div className='w-full rounded-lg'>
              <img
                src='../images/photo-1605559424843-9e4c228bf1c2.jpg'
                alt='project one'
                height={1000}
                width={1000}
                className='w-full h-[300px] rounded-md object-cover'
              />
            </div>
            <div className='flex flex-col gap-4  mx-auto w-11/12 p-4'>
              <h1 className='font-Josefin font-bold text-zinc-700 text-start'>
                Sharebigya
              </h1>

              <ul className='list-disc font-semibold text-start text-xs text-zinc-500 font-Josefin'>
                <li>
                  <strong>
                    Responsive Design: Developed and implemented responsive
                    design to ensure compatibility across various devices and
                    screen sizes.
                  </strong>
                </li>
                <li>
                  <strong>
                    UI Design with Figma: Designed and prototyped user
                    interfaces using Figma, focusing on user experience and
                    aesthetic appeal.
                  </strong>
                </li>
                <li>
                  <strong>
                    API Integration: Integrated APIs to connect front-end
                    components with back-end services, enhancing functionality
                    and data flow.
                  </strong>
                </li>
                <li>
                  <strong>
                    Component Creation and Design: Created and designed reusable
                    components to streamline development and maintain
                    consistency across the application.
                  </strong>
                </li>
              </ul>

              <ul className='flex items-center gap-3 sm:gap-2 w-auto flex-wrap text-xs text-zinc-500'>
                <li className='flex items-center justify-center sm:w-7  border-gray shadow-md rounded-lg cursor-pointer hover:bg-slate-300 duration-500 w-auto px-2 py-2 min-w-14 dark:hover:bg-black/40 dark:bg-black/80'>
                  React
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  TypeScript
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  Tailwind CSS
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  TanStack Query
                </li>
                <li className='flex items-center justify-center sm:w-7 border-gray shadow-md  rounded-lg cursor-pointer hover:bg-slate-300 duration-500 px-6 py-2 min-w-24 w-auto text-nowrap dark:hover:bg-black/40 dark:bg-black/80'>
                  TanStack Table
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a
          href='/app/contact'
          className='flex items-center justify-center gap-2 text- border-[0.5px] border-neutral-300 rounded-full py-3 px-10 mx-auto my-20 text-nowrap hover:bg-blue-300 duration-500 text-gray-500 hover:border-hoverColor max-w-[150px] h-[40px] font-semibold text-slate-500'
        >
          Go to contact
          <MoveRight className='w-4' />
        </a>
      </div>
    </div>
  );
};

export default MyWork;
