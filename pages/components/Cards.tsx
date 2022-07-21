
import tailwind from "../../public/Assests/tailwind.svg";
// import aws from "../../public/Assests/aws.svg";
import flutter from "../../public/Assests/flutter.svg";
import star from "../../public/Assests/star.svg";
import rightArrow from "../../public/Assests/rightArrow.svg";
import Image from "next/image";

const CourseTextInformation = () => {
    return (
        <>
            <div className="bg-gray-900">
                <div className="flex relative justify-between">
                    <span className="flex flex-start px-3 text-white">Tailwind CSS Basics</span>
                    <span className="flex flex-end text-white">₹5000</span>
                </div>
                <div className="flex relative justify-between">
                    <span className="flex flex-start px-3 text-gray-400 text-sm">By Gautam Parekh</span>
                    <span className="flex flex-end text-gray-400 text-sm"><s>₹6000</s></span>
                </div>
                <div className="flex relative justify-between">
                    <span className="px-3 text-sm">
                        <Image width={10} height={10} src={star} /> &nbsp;<span>4.5</span>
                    </span>
                    <span px-3 text-sm>
                        intermediate
                    </span>
                    <span className="px-3 text-sm">
                        <Image width={10} height={10} src={rightArrow} />
                    </span>
                </div>
            </div>
        </>
    )
}

const Cards = () => {
    return (
        <section className="text-gray-400 bg-main-900 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:px-10">
                        <div className="flex relative hover:cursor-pointer">
                            <Image width={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={tailwind} />
                        </div>
                        <CourseTextInformation />
                    </div>
                    <div className="lg:mx-5">
                        <div className="flex relative hover:cursor-pointer">
                            <Image width={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={flutter} />
                        </div>
                        <CourseTextInformation />
                    </div>
                    <div className="lg:mx-5">
                        <div className="flex relative hover:cursor-pointer">
                            <Image width={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={tailwind} />
                        </div>
                        <CourseTextInformation />
                    </div>
                </div>
                <div className="flex flex-wrap py-10">
                    <div className="lg:px-10">
                        <div className="flex relative hover:cursor-pointer">
                            <Image width={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={tailwind} />
                        </div>
                        <CourseTextInformation />
                    </div>
                    <div className="lg:mx-5">
                        <div className="flex relative hover:cursor-pointer">
                            <Image width={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={flutter} />
                        </div>
                        <CourseTextInformation />
                    </div>
                    <div className="lg:mx-5">
                        <div className="flex relative hover:cursor-pointer">
                            <Image width={350} alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={tailwind} />
                        </div>
                        <CourseTextInformation />
                    </div>
                </div>
            </div>
            <div className="flex justify-start ml-16 flex-wrap sm:flex-no-wrap md:flex-wrap lg:flex-no-wrap xl:flex-wrap">
                <button className="inline-flex hover:cursor-pointer lg:mr-16 items-center bg-gray-400 border-pink-700 py-1 px-5 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0">
                    View Kits and Bundles&nbsp; <Image src={rightArrow} />
                </button>
            </div>
        </section>
    )
}

export default Cards