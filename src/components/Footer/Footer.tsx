
import {
    CircleFadingPlus,
    Twitter,
    Facebook,
    Linkedin,
    MessageCircleHeart,

} from "lucide-react";

export const Footer = () =>
    <div className="bg-green-900 flex items-center justify-center">

        <nav className="p-4">
        
            <div className="flex jusify-center gap-5 mb-4>">
              
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
            
        </nav>

    </div>

{/* Divider */ }
<hr className="border-t-2 border-green-700" />

export default Footer;