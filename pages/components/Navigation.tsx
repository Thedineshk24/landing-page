import React from 'react'
import logo from "../../public/Assests/logo.svg";
import dropDown from "../../public/Assests/dropDown.svg";
import Search from "../../public/Assests/Search.svg";
import Image from "next/image";

const Navigation = () => {
    return (
        <header className="text-white bg-main-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font lg:ml-16 font-medium items-center text-white mb-4 md:mb-0">
                    <Image src={logo} width={29} height={10} />
                    <span className="ml-3 text-sm">MYNERVA</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:cursor-pointer flex items-center justify-center">Products &nbsp;
                        <Image src={dropDown} />
                    </a>
                    <a className="mr-5 hover:cursor-pointer">Resources &nbsp;
                        <Image src={dropDown} />
                    </a>
                    <a className="mr-5 hover:cursor-pointer">About Us &nbsp;
                        <Image src={dropDown} />
                    </a>
                    <Image src={Search} className="hover:cursor-pointer h-20 w-20" />
                </nav>
                <button className="inline-flex hover:cursor-pointer lg:mr-16 items-center bg-btnBg-900 border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Sign in
                </button>
                <button className="inline-flex hover:cursor-pointer lg:mr-16 items-center bg-btnBg-900 border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Sign up
                </button>
            </div>
        </header>
    )
}

export default Navigation