import community from '../../public/Assests/community.svg';
import Image from 'next/image';

const Community = () => {
    return (
        <section className="text-gray-400 bg-main-900 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-600">
                    Join the community.
                </h1>
            </div>
            <div className="container mx-auto object-cover object-center rounded hover:cursor-pointer">
                <Image alt="community" height={380} src={community} />
            </div>
        </section>
    )
}

export default Community