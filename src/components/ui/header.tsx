import { DownloadCloudIcon, MoveRightIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <section className='bg-white w-auto h-full scroll-mt-10 dark:bg-darkTheme mb-20 mt-20'>
      <div className='text-black dark:text-white bg-white w-11/12 max-w-3xl text-center mx-auto h-auto flex flex-col items-center justify-center gap-4 my-auto dark:bg-darkTheme mt-16'>
        <p className='rounded-full w-20'>
          <img
            src='../images/arjunThapa.jpeg'
            alt='next'
            height={1000}
            width={1000}
            className='w-1/2 sm:w-60 mb-2 rounded-full'
          />
        </p>
        <h3 className='felx items-end gap-2 text-xl md:text-2xl mb-3 font-Nunito dark:text-white'>
          Hi I'm Arjun Thapa
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Nunito'>
          frontend web developer based in Nepal
        </h1>
        <p className='max-w-2xl font-Nunito'>
          I am a frontend developer from Nepal, with a experience of 3 month
        </p>
        <div className='flex flex-col md:flex-col lg:flex-row gap-4 mt-4'>
          <a
            href='/app/contact'
            className='px-10 py-3 border rounded-full bg-gradient-to-r from-hoverColor to-[#d37d27] 
            flex text-white items-center gap-2 mb-2 hover:border-hoverColor text-nowrap'
          >
            Contact me
            <MoveRightIcon className='w-4' />
          </a>
          <div className='flex-col justify-center items-center'>
            <a
              href='/images/Arjun-thapa-Cv.pdf'
              download
              className='px-10 py-3 border rounded-full  
              flex text-gray-500 items-center gap-2 hover:border-hoverColor text-nowrap border-neutral-300 dark:hover:bg-hoverDarkColor'
            >
              My resume
              <DownloadCloudIcon className='w-4' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
