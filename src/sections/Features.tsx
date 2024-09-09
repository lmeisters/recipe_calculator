// "use client";

export const Features = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <div className="section-heading mb-16">
                    <div className="flex justify-center">
                        <div className="tag">Key Features</div>
                    </div>
                    <h2 className="section-title my-5">
                        All-in-One Recipe Management & Meal Planning
                    </h2>
                    <p className="section-description mt-5">
                        Streamline your cooking with seamless recipe management,
                        smart meal planning, and personalized suggestions
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8 max-w-[1120px] mx-auto">
                    <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-end min-h-[250px]">
                        <h3 className="text-xl font-semibold mb-2">
                            Recipe Management
                        </h3>
                        <p>
                            Easily save, organize, and access your favorite
                            recipes
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-end min-h-[250px]">
                        <h3 className="text-xl font-semibold mb-2">
                            Meal Planning
                        </h3>
                        <p>Plan your meals for the week with ease</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-end min-h-[250px] sm:row-span-2">
                        <h3 className="text-xl font-semibold mb-2">
                            Portion Adjustment
                        </h3>
                        <p>
                            Automatically adjust recipes for any number of
                            servings
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-end min-h-[250px] sm:col-span-1 lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-2">
                            Nutrition Tracking
                        </h3>
                        <p>Monitor nutritional information for your meals</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg col-span-1 min-h-[300px] flex flex-col justify-end">
                        <h3 className="text-xl font-semibold mb-2">
                            AI generated pictures
                        </h3>
                        <p>Monitor nutritional information for your meals</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg col-span-1 min-h-[300px] flex flex-col justify-end">
                        <h3 className="text-xl font-semibold mb-2">
                            Smart ingredient substitution
                        </h3>
                        <p>Monitor nutritional information for your meals</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg col-span-1 min-h-[300px] flex flex-col justify-end">
                        <h3 className="text-xl font-semibold mb-2">
                            Offline access to saved recipes
                        </h3>
                        <p>Monitor nutritional information for your meals</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
