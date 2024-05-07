import React from "react";
import banner from "../assets/study.png"
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-xl mx-auto mt-24 ">
           <Banner banner={banner} heading="Develop your skills without diligence" 
           subheading="Genius is one percent inspiration and ninety-nine percent perspiration."
           btn1={'Get Started'} btn2={'Discount'}/>
        </div>
    );
};

export default Home;
