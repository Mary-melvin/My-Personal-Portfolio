import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
    return (
        <div className="flex items-center flex-col pt-[4.75rem] md:pt-[5rem] lg:pt-[6rem]">
            <h1 className="font-mono font-bold text-sub-light dark:text-sub-dark text-lg md:text-2xl mb-1 md:mb-2">
                Contact Me
            </h1>
            <p className="font-inter font-[475] text-sub-light dark:text-sub-dark text-sm md:text-base leading-snug text-center max-w-[358px] md:max-w-[400px]">
                I'm always looking for opportunities to work on new and exciting
                projects. Click the button below to send me an email, and let's
                start working!
            </p>
            <a href="mailto:mary.melvin@gmail.com" className="mt-4 inline-flex text-sub-light dark:text-sub-dark items-center space-x-3 md:hover:bg-off-white md:dark:hover:bg-off-black !bg-opacity-25 border-quiet-light dark:border-quiet-dark !border-opacity-40 border transition-colors duration-300 py-3 px-6 rounded-lg text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="pb-[2px]" /><p className="font-mono font-semibold">Email Me</p>
            </a>
        </div>
    );
};

export default Contact;
