import assets from "../assets/assets";
import Title from "./Title";

const ContactUs = () => {

    return (
        <div id='contact-us' className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Reach out to us' description='From strategy to execution, we craft digital solutions that move your business forward.'></Title>
            <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="" className="" />
                        <input type="text" name="name" placeholder="Enter your name" required className="w-full p-3 text-sm outline-none" />
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Your Email</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="" className="" />
                        <input type="email" name="email" placeholder="Enter your email" required className="w-full p-3 text-sm outline-none" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;