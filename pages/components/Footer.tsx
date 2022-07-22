import logo from "../../public/Assests/logo.svg";
import facebook from "../../public/Assests/facebook.svg";
import instagram from "../../public/Assests/instagram.svg";
import twitter from "../../public/Assests/twitter.svg";
import linkedin from "../../public/Assests/linkedin.svg";
import gmail from "../../public/Assests/gmail.svg";
import call from "../../public/Assests/call.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-gray-600 bg-main-900 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={logo} />
                        <span className="ml-3 text-xl text-white">MYNERVA</span>
                    </a>
                    <p className="mt-2 text-sm text-white">A fair and square platform for learners as well as instructors and creators to learn and grow </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <nav className="list-none mb-10 text-white">
                            <li>
                                <a className="hover:text-gray-400">About us</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400">Contact Us</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400">Terms & Conditions</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400">Pitch Deck</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <nav className="list-none mb-10 text-white">
                            <li>
                                <a className="hover:text-gray-400">Community</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400">Carrers</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400">Get Access</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400">Partner with us</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <nav className="list-none mb-10 text-white">
                            <li>
                                <a className="hover:text-gray-400">Follow us :</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400"
                                    href="mailto:test@test.com"
                                >team@mynerva.in</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-400">
                                    <Image src={facebook} width={10} height={10} />
                                </a>
                                &nbsp;
                                <a className="hover:text-gray-400">
                                    <Image src={twitter} width={10} height={10} />
                                </a>
                                &nbsp;
                                <a className="hover:text-gray-400">
                                    <Image src={instagram} width={10} height={10} />
                                </a>
                                &nbsp;
                                <a className="hover:text-gray-400">
                                    <Image src={gmail} width={10} height={10} />
                                </a>
                                &nbsp;
                                <a className="hover:text-gray-400">
                                    <Image src={linkedin} width={10} height={10} />
                                </a>
                                &nbsp;
                                <a className="hover:text-gray-400">
                                    <Image src={call} width={10} height={10} />
                                </a>
                            </li>
                        </nav>
                    </div>
                    {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer