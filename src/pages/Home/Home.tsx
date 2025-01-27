import { Copyright } from "lucide-react";

type HomeProps = {
    imageSrc: string;
    altText: string;
    title: string;
    linkHref: string;
};

export const Home = ({ imageSrc, altText, title, linkHref }: HomeProps) => (
    <main className="bg-green-900">
        <img
            src={imageSrc}
            alt={altText}
            className="w-full max-h-[500px] object-cover"
        />

        <div className="flex items-center justify-center bg-green-950 sm:gap-2 sm:p-8">
            <a
                target="_blank"
                href={linkHref}
                className="rounded-full p-2 w-9 h-9 flex hover:bg-green-400 text-teal-500"
            >
                <Copyright />
            </a>
            <p className="bg-green-950 text-xl sm:text-2xl font-medium text-teal-500 py-12 px-4 text-center">
                {title}
            </p>
        </div>

    </main>
);

export default Home;
