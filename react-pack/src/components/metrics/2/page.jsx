import "./component.css"

const MetricsSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
                <div className="space-y-6 max-w-xl">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Title</h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-14 md:items-center">
                    <div className="md:w-1/2 md:py-8 grid sm:grid-cols-2 gap-8 md:gap-6 lg:gap-10 text-center text-gray-700 dark:text-gray-300 children:space-y-3">
                        <div className>
                            <span className="font-semibold text-xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className>
                            <span className="font-semibold text-xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className>
                            <span className="font-semibold text-xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className>
                            <span className="font-semibold text-xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <img src="/images/happy-work.webp" alt="happy team work" className="w-full h-auto md:w-1/2 md:h-full object-cover rounded-lg" />
                </div>
            </div>
        </section>

    )
}

export default MetricsSection