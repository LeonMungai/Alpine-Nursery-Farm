import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    CircleFadingPlus,
    Twitter,
    Facebook,
    Linkedin,
    MessageCircleHeart,
} from "lucide-react";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(6, "Message must not exceed 200 characters").max(200),
});

type FormData = z.infer<typeof schema>;


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="p-6 sm:p-10 md:px-20 lg:px-40 rounded-sm min-h-screen">
            <h1 className="text-3xl text-cyan-300 font-normal mb-4">Write to us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-base font-medium text-yellow-500">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className={`mt-1 block w-full max-w-lg px-3 py-2 border ${errors.name ? "border-red-500" : "border-green-600"
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-300 focus:border-green-400`}
                        aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-base font-medium text-yellow-500">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`mt-1 block w-full max-w-lg px-3 py-2 border ${errors.email ? "border-red-500" : "border-green-600"
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-300 focus:border-green-400`}
                        aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-base font-medium text-yellow-500">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register("message")}
                        className={`mt-1 block w-full max-w-lg px-3 py-2 border ${errors.message ? "border-red-500" : "border-green-600"
                            } rounded-md shadow-sm focus:outline-none focus:ring-green-300 focus:border-green-400`}
                        rows={4}
                        aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-green-800 text-gray-200 m-4 py-3 px-6 rounded-full hover:bg-green-700 transition duration-200"
                >
                    Submit
                </button>
            </form>

            <h2 className="text-3xl font-light text-cyan-400 mt-8">Follow us on:</h2>

            <div className="mt-4 flex gap-4">
                <a
                    className="border border-pink-600 rounded-full p-2 w-9 h-9 flex items-center justify-center hover:bg-green-400 text-pink-500"
                >
                    <CircleFadingPlus />
                </a>
                <a
                    target="_blank"
                    href="https://twitter.com"
                    className="border border-blue-700 rounded-full p-2 w-9 h-9 flex items-center justify-center hover:bg-green-400 text-blue-500"
                >
                    <Twitter />
                </a>
                <a
                    target="_blank"
                    href="https://facebook.com"
                    className="border border-blue-700 rounded-full p-2 w-9 h-9 flex items-center justify-center hover:bg-green-400 text-blue-500"
                >
                    <Facebook />
                </a>
                <a
                    target="_blank"
                    href="https://linkedin.com"
                    className="border border-blue-700 rounded-full p-2 w-9 h-9 flex items-center justify-center hover:bg-green-400 text-blue-500"
                >
                    <Linkedin />
                </a>
                <a
                    target="_blank"
                    href="https://pinterest.com"
                    className="border border-rose-600 rounded-full p-2 w-9 h-9 flex items-center justify-center hover:bg-green-400 text-rose-500"
                >
                    <MessageCircleHeart />
                </a>
            </div>
        </div>
    );
};

export default Contact;
