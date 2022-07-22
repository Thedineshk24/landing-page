
import rightArrow from "../../public/Assests/rightArrow.svg";
import Image from "next/image";

const WeOffers = () => {
  return (
    <section className="text-gray-400 bg-main-900 body-font p-10">
      <div className="px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-card-900 border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-gray-400 text-xs mb-1">OPERATIONS</p>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Scope to Scale-Up <br />Operations
                </h1>
                <p className="leading-relaxed mb-3">
                  Greater exposure to potential customers through our in-house experts and algorithms ensures
                  you get a consistently growing number of paying customers every month.
                </p>
              </div>
              <div className="float-right mr-6 hover:cursor-pointer">
                <Image src={rightArrow} width={10} height={10} alt="rightArrow" />
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-card-900 border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
              <p className="text-gray-400 text-xs mb-1">ANALYTICS</p>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                Top Down <br />Marketing tools
                </h1>
                <p className="leading-relaxed mb-3">
                Get more traction in a blazing fast period of time through marketing tools like SEO, Advertising, and a well-equipped team. 
                </p>
              </div>
              <div className="float-right mr-6 mt-6 hover:cursor-pointer">
                <Image src={rightArrow} width={10} height={10} alt="rightArrow" />
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-card-900 border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
              <p className="text-gray-400 text-xs mb-1">TOOLS</p>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                Business tools & <br /> Analytics
                </h1>
                <p className="leading-relaxed mb-3">
                We provide you with data tools and analytics which will give you effective insights, making it easier for you to make important decisions.
                </p>
              </div>
              <div className="float-right mr-6 mb-5 hover:cursor-pointer">
                <Image src={rightArrow} width={10} height={10} alt="rightArrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeOffers