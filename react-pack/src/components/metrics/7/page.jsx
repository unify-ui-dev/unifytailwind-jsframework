import "./component.css"


const MetricsSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Title</h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 divide-y md:children:!border-t-0 sm:divide-x divide-gray-100 dark:divide-gray-900 sm:children:even:border-transparent ">
                    <div className="space-y-4 text-center">
                        <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                            4 Years
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Experiences
                        </p>
                    </div>
                    <div className="space-y-4 text-center">
                        <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                            +20 Projects
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Achieved
                        </p>
                    </div>
                    <div className="space-y-4 text-center">
                        <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                            95%
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Satisfaction
                        </p>
                    </div>
                    <div className="space-y-4 text-center">
                        <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                            14
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Clients
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MetricsSection