const Features = () => {
    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col  space-y-16">
                    <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
                        <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-emerald-800 dark:text-gray-100">Features</span>
                        <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
                            The tool that changes your day-to-day management
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae odio consequatur aliquam ratione quod iusto
                            aspernatur
                        </p>
                    </div>
                    <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:items-center">
                        <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-1 md:grid-cols-1 lg:order-1">
                            <div className="flex flex-col space-y-6 justify-center md:justify-start">
                                <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                                    {/* feature icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                                    Feature 1
                                </h1>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Industry's standard dummy
                                </p>
                            </div>
                            <div className="flex flex-col space-y-6 justify-center md:justify-start">
                                <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                                    {/* feature icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                                    Feature 1
                                </h1>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Industry's standard dummy
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center order-3 md:col-span-2 lg:order-2 lg:row-span-2 lg:h-full">
                            <div className="flex-1 relative bg-gradient-to-tr from-sky-100 to-indigo-300 
                      p-6 rounded-lg aspect-[4/2.4] overflow-hidden">
                                <img src="/images/dash-light.webp" alt="illustration" width={1800} className="wfull hauto" />
                            </div>
                        </div>
                        <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-2 md:grid-cols-1 lg:order-3">
                            <div className="flex flex-col space-y-6 justify-center md:justify-start">
                                <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                                    {/* feature icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                                    Feature 1
                                </h1>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Industry's standard dummy
                                </p>
                            </div>
                            <div className="flex flex-col space-y-6 justify-center md:justify-start">
                                <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                                    {/* feature icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                                    Feature 1
                                </h1>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Industry's standard dummy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features