"use client";
import Header from "@/components/ui/header";
import Footer from "../footer/page";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <section className='w-[100%]'>
      <Header />
      <Services />
    </section>
  );
}
