import "./component.css"

const MetricsSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
                <div className="max-w-2xl space-y-3">
                    <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
                        Take a look to our amazing works
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    <div className="relative aspect-[5/3.8] rounded-lg overflow-hidden">
                        <img src="/images/hero-img.webp" alt="project cover" width={1300} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 dark:from-gray-900 flex flex-col justify-end p-5 space-y-5 text-gray-300">
                            <h1 className="font-semibold text-white text-2xl">
                                Landing page for agency
                            </h1>
                            <p className="text-gray-300 line-clamp-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis repudiandae similique, quae velit exercitationem veritatis ipsum natus molestias autem, laudantium,
                            </p>
                            <div className="w-max">
                                <a href="#" className="group flex items-center gap-x-3 text-gray-100 font-medium border-b border-gray-800">
                                    View details
                                    <span className="duration-300 ease-linear group-hover:pl-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[5/3.8] rounded-lg overflow-hidden">
                        <img src="/images/hero-img.webp" alt="project cover" width={1300} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 dark:from-gray-900 flex flex-col justify-end p-5 space-y-5 text-gray-300">
                            <h1 className="font-semibold text-white text-2xl">
                                Landing page for agency
                            </h1>
                            <p className="text-gray-300 line-clamp-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis repudiandae similique, quae velit exercitationem veritatis ipsum natus molestias autem, laudantium,
                            </p>
                            <div className="w-max">
                                <a href="#" className="group flex items-center gap-x-3 text-gray-100 font-medium border-b border-gray-800">
                                    View details
                                    <span className="duration-300 ease-linear group-hover:pl-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MetricsSection