import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    return(
    <footer className="space-y-1 flex flex-col items-center text-xs mb-8 md:mb-12 lg:mb-14 font-medium">
        <a className="flex space-x-1 font-mono text-quiet-light dark:text-quiet-dark items-center" href="https://github.com/mary-melvin">
            <FontAwesomeIcon icon={faStar} className="pb-[1px]" />
            <p>Mary Melvin/portfolio</p>
        </a>
    </footer>
    )
}

export default Footer;