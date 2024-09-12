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
                                    width: `${95 + i * 5}%`,
                                    height: `${95 + i * 5}%`,
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            ></div>
                        ))}
                    </div>
                    <div className="relative z-10  mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4 ">
                            Start Cooking Today
                        </h2>
                        <p className="text-lg mb-8">
                            Ready to transform your kitchen experience? Sign up
                            for FridgeFolio and start saving, scaling, and
                            cooking smarter today
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
