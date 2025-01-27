type TreesProps = {
    heading: string;
    description: string;
    treeData: { title: string; img: string}[];
}; 

export const Trees = ({ heading, description, treeData }:TreesProps) => (
    <main>

        <div className="container text-center shadow-2xl p-6">

            <h1 className="text-5xl text-green-400 font-medium p-5">
                {heading}
            </h1>

            <p className="text-base sm:text-xl font-extralight text-teal-500 sm:mt-10 leading-relaxed">
                {description}
            </p>

        </div>

        <div className="container flex flex-wrap-reverse shadow-lg gap-6 justify-center py-10">
            {treeData.map((tree, index) => (
                <div key={index} className="group container text-center transition-all duration-300 ease-in-out">
                    {/* Title */}
                    <p className="text-cyan-400 max-w-80 font-light text-3xl p-3 shadow-md shadow-green-700 group-hover:scale-105 group-hover:text-green-400">
                        {tree.title}
                    </p>

                    {/* Image */}
                    <div className="overflow-hidden rounded-xl m-5 shadow-2xl">
                        <img
                            src={tree.img}
                            alt={`${tree.title} Image`}
                            className="rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90"
                        />
                    </div>

                </div>
            ))}
        </div>
    </main>

);

export default Trees;
