import { useState } from "react";
import logo from "../assets/pd.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuopen,setIsMenuopen]=useState(false);

    const toggleMenu=()=>{
        setIsMenuopen(!isMenuopen);
    }
    const navitems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];

    return (
    <>
        <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div className="flex space-x-14 items-center">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                        <img src={logo} alt="PD.AI Logo" className="w-10 inline-block items-center" />
                        <span>PD.AI</span>
                    </a>
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navitems.map(item => (
                                <a key={item.path} href={"/" + item.path} className="block 
                                hover:text-gray-300">{item.link}</a>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-x-12 hidden md:flex items-center">
                    <a href="/" className="hidden lg:flex items-center hover:text-secondary"><GrLanguage className="mr-2"/>Language</a>
                    <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded 
                    hover:text-white hover:bg-indigo-600">sign up</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white  focus:outline-none
                    focus:text-gray-300" >
                        {
                            isMenuopen?(<FaXmark className="w-6 h-6 text-primary" />):
                            (<FaBars className="w-6 h-6 text-primary " />)
                        }

                    </button>
                 </div>
            </div>
        </nav>
        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuopen ? "block fixed top-0 right-0 left-0":
        "hidden"}`}>
            {
                navitems.map(item => (
                    <a key={item.path} href={"/" + item.path} className="block 
                    hover:text-gray-300">{item.link}</a>
                ))
            }

        </div>
    </>
    );
};

export default Navbar;
