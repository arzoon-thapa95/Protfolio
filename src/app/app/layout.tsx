import NavBar from "@/components/navBar";
import Footer from "@/components/ui/footer";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-row-reverse '>
      <NavBar />
      <main className='min-h-screen w-full  '>
        {children}
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
