import assets from "../../assets/assets";
import TrustedBy from "../../Pages/TrustedBy";

const Hero = () => {

    return (
        <div id='hero' className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">

            <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full ">
                <img className="w-20 " src={assets.group_profile} alt="" />
                <p className="text-xs front-medium">Trusted by 10k+ people</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl-leading-[95px] max-w-5xl">Turning imagination into <span className="bg-gradient-to-r from-[#F527C5] to-[#4d8cea] bg-clip-text text-transparent">digital</span> impact.</h1>
            <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

            <div className="relative">
                <img className="w-full max-w-6xl" src={assets.hero_img} alt="" />
                <img className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden" src={assets.bgImage1} alt="" />
            </div>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default Hero;