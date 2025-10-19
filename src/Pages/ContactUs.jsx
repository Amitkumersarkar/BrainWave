import toast from "react-hot-toast";
import assets from "../assets/assets";
import Title from "./Title";

const ContactUs = () => {
    const submitForm = async (e) => {
        e.preventDefault();
        // setResult("Sending....");
        const formData = new FormData(e.target);

        formData.append("access_key", "274f14d3-b7c6-43ff-84f0-aa89e6ce64ba");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form Submitted Successfully");
                e.target.reset();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }

    }
    return (
        <div id='contact-us' className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Reach out to us' description='From strategy to execution, we craft digital solutions that move your business forward.'></Title>
            <form onSubmit={submitForm} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
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
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" id="" placeholder="Enter your text message" required rows="8" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"></textarea>
                </div>
                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 font-semibold items-center rounded-full cursor-pointer hover:scale-105 transition-all" >Submit <img src={assets.arrow_icon} className="w-4" alt="" /></button>
            </form>
        </div>
    );
};

export default ContactUs;