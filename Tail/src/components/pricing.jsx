import { useState } from "react";

const Pricing = () => {
    const[isYearly,setISYearly]=useState(false);
    const packages = [
        {
            name: "start",
            monthlyPrice: 20,
            yearlyPrice: 199,
            description: "Our company offers a variety of packages, ranging from basic to premium."
        },
        {
            name: "standard",
            monthlyPrice: 30,
            yearlyPrice: 299,
            description: "Upgrade to our standard package for enhanced features and benefits."
        },
        {
            name: "premium",
            monthlyPrice: 50,
            yearlyPrice: 499,
            description: "Experience the ultimate package with exclusive perks and premium support."
        }
    ];
    
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
           <div className="text-center">
            <h2 className="md:text-5xl text-3xl font-extrabold text-primary">
                Here are all our plans</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">This plan outlines strategies for increasing sales and distribution channels.
                     It may involve partnerships with retailers or distributors, online sales initiatives, 
                     and strategies for reaching untapped customer segments.
                </p>
                {/*toggle pricing*/}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6  bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full 
                            ${isYearly? "bg-primary ml-8":"bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={()=>
                        setISYearly(!isYearly)} 
                        />
                
                </div>
           </div>

           {/*pricing cards*/}
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
    {
        packages.map((pkg, index) => (
            <div key={index} className="border py-10 md:px-6 px-4
            rounded-lg shadow-3xl">
                <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                <p className="text-tartiary text-center">{pkg.description}</p>
                <p className="mt-5 text-center text-secondary text-4xl font-bold">
                    {isYearly ? `$${pkg.yearlyPrice}`:`$${pkg.monthlyPrice}`}
                    <span className="text-base text-tartiary font-medium">/{isYearly?'year':
                    'month'}</span>
                </p>
                <ul className="mt-4 space-y-2 px-4">
                    <li></li>
                </ul>
                
            </div>
        ))
    }
</div>

        </div>
    );
};

export default Pricing;
