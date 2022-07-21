import book from '../../public/Assests/book.svg';
import Image from 'next/image';
const Hero = () => {
    return (
        <section className="text-white bg-main-900 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <p className="sm:text-1xl text-sm font-small mb-2 text-gray-400">WELCOME TO MYNERVA</p>
                    <h2 className="lg:text-5xl mx-auto leading-relaxed font-large py-3">
                        Build amazing real time <br />
                        Skills and Courses.
                    </h2>
                    <p className="text-sm font-small mb-4 text-gray-400 py-5">
                        Mynerva helps you upskill yourself wiith a wide niche of courses and lets you list your course in minutes.
                    </p>
                    <div className="flex justify-center flex-wrap sm:flex-no-wrap md:flex-wrap lg:flex-no-wrap xl:flex-wrap">
                        <button className="inline-flex hover:cursor-pointer lg:mr-16 items-center bg-btnBg-900 border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                            <Image src={book} />&nbsp; View Courses
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero