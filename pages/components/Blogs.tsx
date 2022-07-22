import blog1 from "../../public/Assests/blog1.svg";
import blog2 from "../../public/Assests/blog2.svg";
import blog3 from "../../public/Assests/blog3.png";
import user from "../../public/Assests/user.svg";
import rightArrow from "../../public/Assests/rightArrow.svg";
import Image from "next/image";

const Blogs = () => {
    return (
        <section className="text-gray-600 bg-main-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-card-900">
                            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog1} alt="blog" />
                            <div className="p-6">
                                <p className="leading-relaxed mb-3 text-white">
                                    Ux Evoluton. How virgin Atlantic Built New UX practices Over the Decades
                                </p>
                                <div className="flex items-center flex-wrap mt-6">
                                    <Image src={user} /> <span className="text-gray-400 ml-4">Dinesh</span>
                                    <span className="hover:cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                                        <Image src={rightArrow} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-card-900">
                            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog2} alt="blog" />
                            <div className="p-6">
                                <p className="leading-relaxed mb-3 text-white">
                                    Ux Evoluton. How virgin Atlantic Built New UX practices Over the Decades
                                </p>
                                <div className="flex items-center flex-wrap mt-6">
                                    <Image src={user} /> <span className="text-gray-400 ml-4">Dinesh</span>
                                    <span className="hover:cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                                        <Image src={rightArrow} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-card-900">
                            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog3} alt="blog" />
                            <div className="p-6">
                                <p className="leading-relaxed mb-3 text-white">Ux Evoluton. How virgin Atlantic Built New UX practices Over the Decades</p>
                                <div className="flex items-center flex-wrap mt-6">
                                    <Image src={user} /> <span className="text-gray-400 ml-4">Dinesh</span>
                                    <span className="hover:cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                                        <Image src={rightArrow} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs