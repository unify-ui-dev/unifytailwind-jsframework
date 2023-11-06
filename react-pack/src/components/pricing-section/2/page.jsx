const PricingSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col  space-y-10">
                    <div className="flex gap-10 flex-col items-center">
                        <div className="text-center max-w-2xl">
                            <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">Centered Payment section</h2>
                        </div>
                        <div className="min-w-max flex justify-center md:justify-end">
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg shadow-gray-200/40 dark:shadow-none flex items-center relative p-1">
                                <button className="text-white flex items-center h-9 w-max px-4 rounded-lg bg-blue-900 dark:bg-blue-950">
                                    Monthly
                                </button>
                                <button className="text-gray-700 dark:text-gray-300 flex items-center h-9 w-max px-4">
                                    Yearly
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-auto">
                        <div className="rounded-lg border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 p-6 sm:p-10 space-y-6">
                            <div className="text-center space-y-3">
                                <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
                                    Starter Plan
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                            <div className="text-center space-y-2">
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    $40.00
                                </p>
                                <span className="text-gray-700 dark:text-gray-300">Per Month/Per user</span>
                            </div>
                            <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                            <div className="flex justify-center">
                                <a href="#" className="outline-none w-max flex items-center mx-auto h-11 px-5 rounded-md bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-gray-300">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="rounded-lg relative border border-gray-100 dark:border-gray-900 bg-gray-100 dark:bg-gray-900 p-6 sm:p-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-b-lg bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
                                Recommanded
                            </div>
                            <div className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
                                        Profesional
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-200 dark:before:bg-gray-800" />
                                <div className="text-center space-y-2">
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                        $100.00
                                    </p>
                                    <span className="text-gray-700 dark:text-gray-300">Per Month/Per user</span>
                                </div>
                                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-200 dark:before:bg-gray-800" />
                                <div className="flex justify-center">
                                    <a href="#" className="outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md bg-blue-900 dark:bg-blue-950 text-white">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 p-6 sm:p-10 space-y-6">
                            <div className="text-center space-y-3">
                                <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
                                    Starter Plan
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                            <div className="text-center space-y-2">
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    $40.00
                                </p>
                                <span className="text-gray-700 dark:text-gray-300">Per Month/Per user</span>
                            </div>
                            <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                            <div className="flex justify-center">
                                <a href="#" className="outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-gray-300">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection