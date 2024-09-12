// "use client";

export const CallToAction = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto flex justify-center">
                <div className="bg-green-500 p-8 rounded-lg shadow-md flex align-center gap-20">
                    <div className="flex flex-col">
                        <h2 className="text-white text-2xl font-bold mb-4">
                            Ready to get started?
                        </h2>
                        <p className="text-white mb-6">
                            Start benefiting from our fully free-to-use app
                            immediately, with no restrictions or tiers.
                        </p>
                    </div>
                    <button className="bg-white text-green-500 font-bold py-2 px-4 rounded hover:bg-green-200 ">
                        Get started for free
                    </button>
                </div>
            </div>
        </section>
    );
};
