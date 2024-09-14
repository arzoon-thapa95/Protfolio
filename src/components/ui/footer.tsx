import { MailIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section className='w-auto h-auto bg-white scroll-mt-20 dark:bg-darkTheme'>
      <div className='text-black dark:bg-darkTheme'>
        <div className='text-center dark:text-whiteText'>
          <h6>Arjun Thapa</h6>
          <div className='w-max flex items-center gap-2 mx-auto'>
            <MailIcon className='w-6' />
            mr.arjun.thap95@gmail.com
          </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-neutral-300 mx-[10%] mt-12 py-6 font-Josefin dark:text-whiteText'>
          <p> Arjun Thapa.All rights reserved</p>
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-Josefin'>
            <li className='underline hover:text-blue-500'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/arjun-thapa-5654b0137/'
              >
                Link in
              </a>
            </li>
            <li className='underline hover:text-blue-500'>
              <a target='_blank' href='Git hub'>
                Git hub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
