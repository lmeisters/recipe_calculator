// "use client";

export const CallToAction = () => {
    return (
        <section className="py-20">
            <div className="container h-80 mx-auto flex justify-center max-w-[1024px]">
                <div className="bg-gradient-to-br from-teal-900 to-teal-800 text-white p-12 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute border border-teal-700 rounded-full"
                                style={{
                                    width: `${100 + i * 15}%`,
                                    height: `${100 + i * 15}%`,
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            ></div>
                        ))}
                    </div>
                    <div className="relative z-10  mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4 ">
                            FridgeFolio is the only recipe manager you'll ever
                            need
                        </h2>
                        <p className="text-lg mb-8">
                            Try our platform free with up to 5 client projects
                            and see how you can reclaim billable hours and
                            reduce operational chaos
                        </p>

                        <button className="btn btn-secondary">
                            Get started for free
                        </button>
                    </div>
                </div>{" "}
            </div>
        </section>
    );
};
