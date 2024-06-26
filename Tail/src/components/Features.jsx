import React from "react";
import card from"../assets/card.png"

const Feature = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-3/4 mb-3">Why we are better than others</h3>
                    <p className="text-baset text-tartiary ">Genius is one percent inspiration and ninety-nine percent perspiration.</p>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] cursor-pointer h-96 
                    shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 ">
                        <div>
                            <img src={card} alt="" />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                                Conventient study schedule
                            </h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] cursor-pointer md:mt-16 h-96 
                    shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 ">
                        <div>
                            <img src={card} alt="" />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                                Conventient study schedule
                            </h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px]  cursor-pointer h-96 
                    shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 ">
                        <div>
                            <img src={card} alt="" />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                                Conventient study schedule
                            </h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
