"use client";
import { navData } from "@/example";
import { motion, stagger, useAnimate } from "framer-motion";
import { AlignRightIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: any = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { theme, setTheme } = useTheme();

  return (
    <section className='w-auto h-auto relative z-10 scroll-mt-5 bg-white dark:bg-darkTheme'>
      <nav className='w-screen fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between  top-0 left-0 right-0 shadow-md bg-white dark:bg-darkTheme'>
        <h1 className='fancy-wipe text-gray-500 font-Josefin'>
          <span className='text-nowrap font-Josefin font-semibold text-start'>
            Arjun Thapa
          </span>
        </h1>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  shadow-sm bg-opacity-50 text-gray-500 text-nowrap font-Josefin dark:border dark:border-whiteText/50 dark:bg-transparent ml-10 w-full lg:justify-center'>
          {navData.map((item) => {
            return (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={item.id}
              >
                {<a href={item.link}>{item.name}</a>}
              </motion.li>
            );
          })}
        </ul>
        <div className='flex justify-end items-center gap-4 text-black w-full '>
          {/* <a
            href='contact'
            className='lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 text-gray-500 hover:border-hoverColor w-auto font-Josefin dark:border-whiteText dark:text-white'
          >
            Contact
          </a> */}
          {/* <a
            href='contact'
            className='lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 text-gray-500 inline hover:border-hoverColor text-nowrap font-Josefin dark:border-whiteText dark:text-white'
          >
            Download CV
          </a> */}
          <button
            className='bg-white  opacity-100 h-12 w-12  rounded-full flex items-center justify-center dark:bg-darkTheme border-gray-500 dark:border-whiteText'
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme === "light" ? (
              <MoonIcon
                className=' items-center gap-5 text-gray-500 hover:text-hoverColor cursor-pointer dark:hidden '
                // onClick={toggleTheme}
              />
            ) : (
              <SunIcon
                className=' items-center gap-5 text-gray-500 hover:text-hoverColor cursor-pointer hidden dark:block dark:text-white dark:bg-darkTheme'
                // onClick={toggleTheme}
              />
            )}
          </button>

          <AlignRightIcon
            className='block md:hidden ml-3 text-gray-500 cursor-pointer hover:text-hoverColor text-current dark:text-white'
            onClick={handleOpen}
          ></AlignRightIcon>
        </div>
        <div ref={scope}>
          {isOpen && (
            <ul
              id='sideMenu'
              className='flex justify-center  items-center md:hidden flex-col py-[4px] px-10 fixed -right-0 top-0 bottom-0 w-full z-50 h-screen bg-blue-100 transition duration-500 gap-4 text-gray-500 font-Josefin dark:bg-mobileNav dark:text-whiteText '
            >
              <XIcon
                className='absolute right-6 top-6 text-gray-500'
                onClick={handleClose}
              />
              {navData.map((item) => {
                return (
                  <motion.li
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    onClick={handleClose}
                  >
                    <a href={item.link} key={item.id}>
                      {item.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
