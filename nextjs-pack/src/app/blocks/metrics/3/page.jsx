import Image from "next/image"


const MetricsSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex gap-16 flex-col md:flex-row md:items-center">
                <Image src="/images/happy-work.webp" width={1900} height={1200} alt="happy team work" className="w-full h-auto md:w-1/2 md:h-full object-cover rounded-lg order-2 md:order-1" />
                <div className="space-y-10 md:order-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Title</h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 text-center text-gray-700 dark:text-gray-300 children:space-y-3 children:bg-gray-100 dark:children:bg-gray-900 children:p-4 children:rounded-lg">
                        <div className>
                            <span className="font-semibold text-2xl md:text-4xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                        </div>
                        <div className>
                            <span className="font-semibold text-2xl md:text-4xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                        </div>
                        <div className>
                            <span className="font-semibold text-2xl md:text-4xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                        </div>
                        <div className>
                            <span className="font-semibold text-2xl md:text-4xl text-sky-600 dark:text-sky-500">
                                12K+
                            </span>
                            <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                                Metric title
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MetricsSection