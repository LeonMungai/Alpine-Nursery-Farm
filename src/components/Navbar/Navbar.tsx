import {
    CircleFadingPlus,
    Twitter,
    Facebook,
    Linkedin,
    MessageCircleHeart,
    Sprout,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

export const Navbar = () => (
    <div className="bg-green-900">
        <nav className="p-5 shadow-lg">
            {/* Social Media Icons */}
            <div className="flex justify-center gap-5 mb-4">
                {[
                    { icon: CircleFadingPlus, color: "text-pink-500", border: "border-pink-600" },
                    { icon: Twitter, color: "text-blue-400", border: "border-blue-700", href: "https://twitter.com" },
                    { icon: Facebook, color: "text-blue-500", border: "border-blue-700", href: "https://facebook.com" },
                    { icon: Linkedin, color: "text-blue-400", border: "border-blue-700", href: "https://linkedin.com" },
                    { icon: MessageCircleHeart, color: "text-rose-500", border: "border-rose-600", href: "https://pinterest.com" },
                ].map((social, index) => (
                    <a
                        key={index}
                        href={social.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border ${social.border} rounded-full p-2 w-9 h-9 flex items-center justify-center hover:scale-110 hover:bg-green-400 ${social.color} transition-transform duration-300`}
                    >
                        <social.icon />
                    </a>
                ))}
            </div>

            {/* Divider */}
            <hr className="border-t-2 border-green-700" />

            {/* Navigation Links */}
            <ul className="flex flex-col sm:flex-row justify-center items-center text-lg sm:text-2xl font-bold mt-4 space-y-4 sm:space-y-0 sm:space-x-10">
                {/* Logo */}
                <li>
                    <a
                        target="_blank"
                        href="https://sprout.com"
                        rel="noopener noreferrer"
                        className="border border-green-600 rounded-full p-2 w-12 h-12 flex items-center justify-center hover:bg-slate-300 transition-transform duration-300 hover:scale-110"
                    >
                        <Sprout />
                    </a>
                </li>

                {/* Title */}
                <li>
                    <p className="text-3xl text-yellow-400 rounded-2xl font-semibold shadow-md shadow-yellow-500 px-4 py-2">
                        Alpine Nursery
                    </p>
                </li>

                {/* Navigation Links */}
                {[
                    { name: "Home", to: APP_ROUTES.HOME },
                    { name: "Trees", to: APP_ROUTES.TREES },
                    { name: "About", to: APP_ROUTES.ABOUT },
                    { name: "Contact", to: APP_ROUTES.CONTACT },
                ].map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-500 border border-green-700 rounded-2xl px-4 py-1 shadow-md shadow-green-400"
                                    : "text-white font-extralight hover:text-green-400 hover:scale-105 transition-transform duration-300"
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);

export default Navbar;
