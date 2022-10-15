import Head from "next/head";
import Image from "next/image";
import React from "react";
import AccreditationSection from "../components/AccreditationSection";
import BusinessSection from "../components/BusinessSection";
import Footer from "../components/Footer";
import HeroBackgroundImage from "../components/HeroBackgroundImage";
import HomePageLayout from "../components/HomePageLayout";
import ProductSection from "../components/ProductSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <HomePageLayout>
      <HeroBackgroundImage />
      <div className="w-full navbar bg-white py-5  flex justify-center ">
        <div className="max-w-4xl  px-10 ">
          <p className="font-medium text-md md:text-lg leading-6 text-black tracking-normal sm:tracking-wider text-center">
            A Telecoms infrastructure company with a commitment to meet your
            business connectivity needs and connect you at the speed of light
          </p>
        </div>
      </div>
      <BusinessSection />
      <ServicesSection />
      <ProductSection />
      <AccreditationSection />
      <Footer />
    </HomePageLayout>
  );
}
