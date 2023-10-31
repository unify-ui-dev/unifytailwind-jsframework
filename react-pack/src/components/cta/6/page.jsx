const CtaSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative">
                <div className="bg-white dark:bg-gray-950 rounded-xl p-10 sm:p-14 !pb-0 flex flex-col md:flex-row gap-14 overflow-hidden">
                    <div className="space-y-8 max-w-lg md:max-w-none md:w-6/12 lg:w-2/5 md:py-8">
                        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
                            Join +2k WordWide Users
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <ul className="text-gray-600 dark:text-gray-400 grid grid-cols-2 gap-5">
                            <li className="flex items-center gap-x-3">
                                <span className="bg-blue-100 text-blue-600 dark:bg-gray-900 p-0.5 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                User management
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="bg-blue-100 text-blue-600 dark:bg-gray-900 p-0.5 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Advantage
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="bg-blue-100 text-blue-600 dark:bg-gray-900 p-0.5 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Cloud based
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="bg-blue-100 text-blue-600 dark:bg-gray-900 p-0.5 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Work offline too
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="bg-blue-100 text-blue-600 dark:bg-gray-900 p-0.5 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Advantage
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="bg-blue-100 text-blue-600 dark:bg-gray-900 p-0.5 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Advantage
                            </li>
                        </ul>
                        <div className="flex items-center">
                            <a href="#" className="h-12 px-5 rounded-lg bg-blue-600 text-white flex items-center">
                                Signup Now
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full aspect-[4/2] md:aspect-auto pt-4 px-4 bg-gradient-to-br from-pink-200 to-blue-100 overflow-hidden rounded-t-lg">
                        <img src="/images/dash-light.webp" alt="cover image" width={1800} className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CtaSection