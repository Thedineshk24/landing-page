
import Image from 'next/image';
import lead from "../../public/Assests/lead.svg";

const Tools = () => {
    return (
        <section className="text-white bg-main-900 body-font pt-4">
            <div className="container mx-auto bg-card-900 flex px-5 py-8 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <div className="ml-16 mt-0 text-gray-400 text-sm">
                        ANALYTICS
                    </div>
                    <h1 className="title-font sm:text-4xl text-sm ml-16 mb-4 font-medium text-white">Be part of the
                        <br /> <span className="text-red-500">Creators</span> community and add educational value
                    </h1>
                    <div className="flex justify-center ml-16">
                        <button className="inline-flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Know More
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image className="object-cover object-center rounded" alt="hero" src={lead} />
                </div>
            </div>
        </section>
    )
}

export default Tools