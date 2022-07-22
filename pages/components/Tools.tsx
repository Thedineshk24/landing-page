
import Image from 'next/image';
import lead from "../../public/Assests/lead.svg";
import market from "../../public/Assests/market.svg";
const Tools = () => {
    return (
        <>
            <section className="text-white bg-main-900 body-font pt-4">
                <h1 className="title-font sm:text-4xl text-sm ml-16 mb-4 font-medium text-white">
                    <Image src={market} width={47} height={21} />
                    <br />
                    Be part of the
                    <br /> <span className="text-red-500">Creators</span> community and add educational value
                </h1>
                <div className="container mx-auto bg-card-900 flex px-5 py-8 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                        <div className="ml-16 mt-0 text-gray-400 text-sm">
                            ANALYTICS
                        </div>
                        <h1 className="title-font sm:text-4xl text-sm ml-16 mb-4 font-medium text-white">Be part of the
                            Lead Generation and Capturing
                        </h1>
                        <p className="ml-16 text-gray-400 leading-relaxed mx-auto mb-4">
                            Our in-home lead capture tools enable us to get a higher conversion rate which translates to more revenue for you. Effective landing pages and concise fields for details ensure a smooth collection of customer behavior.
                        </p>
                        <div className="flex ml-16">
                            <button className="inline-flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Know More
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg">
                        <Image className="object-cover object-center rounded" width={234} height={210} alt="hero" src={lead} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tools