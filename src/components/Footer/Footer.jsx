import assets from "../../assets/assets";

const Footer = ({ theme }) => {
    return (
        <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
            {/* footer top */}
            <div className="flex justify-between lg:items-baseline max-lg:flex-col gap-10">

                {/* left side div */}
                <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className="w-32 sm:w-44" alt="" />
                    <p className="max-w-md">From strategy to execution, we craft digital solutions that move your business forward.</p>
                    <ul className="flex gap-8">
                        <li><a className="hover:text-secondary" href="#hero">Home</a></li>
                        <li><a className="hover:text-secondary" href="#services">Services</a></li>
                        <li><a className="hover:text-secondary" href="#our-work">Our Work</a></li>
                        <li><a className="hover:text-secondary" href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
                {/* right side div */}
                <div className="text-gray-600 dark:text-gray-400">
                    <h3 className="font-semibold">Subscribe to our newsletter</h3>
                    <p className="text-sm mt-2 mb-6">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex justify-between items-center">
                        <input type="email" name="email" required placeholder="Enter your email" id="" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500" />
                        <button className="btn btn-primary m-2">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 my-6" />
            <p className="text-gray-600 mb-1 font-semibold"> Developed by AmitSarkar </p>
            <p className="flex flex-wrap text-gray-500 gap-2 mb-3"> <img src={assets.email_icon} alt="" className="items-center" width={25} /> amitsarkar.dev.bd@gmail.com</p>
            {/* footer bottom */}
            <div className="flex justify-center sm:justify-between flex-wrap gap-4 text-sm text-gray-500 pb-6">
                <p>Copyright 2025 © Agency.Ai- All Right Reserved.</p>

                <div className="flex justify-between items-center  gap-4">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;