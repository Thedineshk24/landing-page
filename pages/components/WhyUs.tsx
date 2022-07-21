import group from "../../public/Assests/group.svg";
import bundle from "../../public/Assests/bundle.svg";
import courses from "../../public/Assests/courses.svg";
import degree from "../../public/Assests/degree.svg";
import rightArrow from "../../public/Assests/rightArrow.svg";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="text-gray-400 bg-main-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex text-left ml-16 w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            <Image src={degree} /> <br />
            Be part of an array of <br />
            <span className="text-green-500"> Courses </span> and learning experience.</h1>
        </div>
        <div className="flex">
          <div className="lg:px-10">
            <div className="flex relative hover:cursor-pointer">
              <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={group} />
            </div>
          </div>
          <div className="lg:mx-5">
            <div className="flex relative hover:cursor-pointer">
              <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={bundle} />
            </div>
          </div>
          <div className="lg:mx-5">
            <div className="flex relative hover:cursor-pointer">
              <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover" src={courses} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start ml-16 sm:flex-no-wrap md:flex-wrap lg:flex-no-wrap xl:flex-wrap">
        <button className="inline-flex hover:cursor-pointer lg:mr-16 items-center bg-gray-400 border-pink-700 py-1 px-5 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0">
          View Courses &nbsp; <Image src={rightArrow} />
        </button>
      </div>
    </section>
  )
}

export default WhyUs