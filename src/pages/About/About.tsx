import { motion } from "framer-motion";

type AboutProps = {
    title: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
};

export const About = ({ title, imageSrc, imageAlt, description }: AboutProps) => (

    <main className="flex flex-col lg:flex-row items-center text-center p-6 sm:p-10">

        <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="border border-green-800 rounded-lg m-6 max-w-xs sm:max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />

        <div className="flex flex-col">
            <h1 className="font-extralight text-teal-500 text-4xl sm:text-5xl underline">
                {title}
            </h1>

            <p className="text-lg sm:text-xl font-light text-teal-500 mt-6 sm:mt-10 leading-relaxed max-w-3xl">
                {description}
            </p>
        </div>

    </main>
);

export default About;
