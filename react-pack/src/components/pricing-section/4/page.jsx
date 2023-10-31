
const PricingSection = () => {
    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col  space-y-16">
                    <div className="flex gap-14 md:justify-between flex-col md:flex-row items-center">
                        <div className="text-center md:text-left md:max-w-lg space-y-5">
                            <span className="rounded-lg bg-blue-100 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-800 dark:text-gray-100">Plan</span>
                            <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">Choose perfet plan for your need</h2>
                        </div>
                        <div className="min-w-max flex justify-center md:justify-end">
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg shadow-gray-200/40 dark:shadow-none flex items-center relative p-1">
                                <button className="text-white flex items-center h-9 w-max px-4 rounded-lg bg-blue-900 dark:bg-blue-950">
                                    Monthly
                                </button>
                                <button className="text-gray-700 dark:text-gray-300 flex items-center h-9 w-max px-4 before:absolute ">
                                    Yearly
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid divide-y divide-gray-200 dark:divide-gray-800 lg:divide-y-0 gap-6 mx-auto lg:items-stretch lg:grid-cols-3 md:gap-8 lg:gap-12 bg-white dark:bg-gray-900 rounded-xl px-4 md:px-6 lg:px-8 pb-10">
                        <div className="bg-white dark:bg-gray-900 pt-6 px-4 h-auto flex flex-col">
                            <div className="min-h-max mb-5">
                                <div className="relative flex items-end">
                                    <div className="flex">
                                        <span className="text-4xl font-bold text-blue-950 dark:text-white">$0</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">/Month</span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pt-5">Educational</h2>
                                <p className="text-gray-700 dark:text-gray-300 pt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <ul role="list" className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                            </ul>
                            <div className="mt-5 flex flex-1 items-end min-h-max">
                                <a href="#" className="outline-none relative flex h-12 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-lg before:bg-gray-900 dark:before:bg-gray-950 before:transition before:duration-300 after:absolute after:inset-0 after:duration-500 hover:after:bg-opacity-90 dark:hover:bg-opacity-90 active:duration-75 active:before:scale-95">
                                    <span className="relative text-sm font-medium text-white">Continue for free</span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 pt-6 px-4 h-auto flex flex-col">
                            <div className="min-h-max mb-5">
                                <div className="relative flex items-end">
                                    <div className="flex">
                                        <span className="text-4xl font-bold text-blue-950 dark:text-white">$20</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">/Month</span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pt-5">Team</h2>
                                <p className="text-gray-700 dark:text-gray-300 pt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <ul role="list" className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="bg-gray-100 dark:bg-blue-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    Advantage
                                </li>
                            </ul>
                            <div className="mt-5 flex flex-1 items-end min-h-max">
                                <a href="#" className="outline-none relative flex h-12 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-lg before:bg-gray-900 dark:before:bg-gray-950 before:transition before:duration-300 after:absolute after:inset-0 after:duration-500 hover:after:bg-opacity-90 dark:hover:bg-opacity-90 active:duration-75 active:before:scale-95">
                                    <span className="relative text-sm font-medium text-white">Get started</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative pt-6 px-4 mt-6 lg:mt-0 h-auto flex flex-col before:absolute before:z-0 before:scale-x-[1.13] sm:before:scale-x-[1.15] lg:before:scale-x-105 before:scale-y-105 lg:before:scale-y-110 before:inset-0 before:bg-gray-900 dark:before:bg-blue-950 before:rounded-xl">
                            <div className="absolute top-0 right-0 z-[5] bg-gray-500/40 dark:bg-blue-900 text-white rounded-xl px-4 py-1">Populaire</div>
                            <div className="min-h-max pb-5 relative z-10">
                                <div className="relative flex items-end">
                                    <div className="flex">
                                        <span className="text-4xl md:text-5xl font-bold text-white">$0</span>
                                    </div>
                                    <span className=" text-xl font-semibold text-gray-200">/ Mois</span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-100 pt-5">Personnel</h2>
                                <p className="text-gray-300 pt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <ul role="list" className="flex flex-col h-full gap-2 text-gray-300 relative">
                                <li className="inline-flex gap-4 items-center">
                                    <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    <span>Advantage 1</span>
                                </li>
                                <li className="inline-flex gap-4 items-center">
                                    <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    <span>Advantage 1</span>
                                </li>
                                <li className="inline-flex gap-4 items-center">
                                    <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    <span>Advantage 1</span>
                                </li>
                                <li className="inline-flex gap-4 items-center">
                                    <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    <span>Advantage 1</span>
                                </li>
                                <li className="inline-flex gap-4 items-center">
                                    <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    <span>Advantage 1</span>
                                </li>
                                <li className="inline-flex gap-4 items-center">
                                    <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                    <span>Advantage 1</span>
                                </li>
                            </ul>
                            <div className="pt-4 flex min-h-max">
                                <a href="#" className="outline-none relative flex h-12 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-lg before:bg-gray-200 dark:before:bg-gray-900 before:transition before:duration-300 after:absolute after:inset-0 after:duration-500 hover:after:bg-opacity-90 dark:hover:bg-opacity-90 active:duration-75 active:before:scale-95">
                                    <span className="relative text-sm font-medium text-blue-900 dark:text-white">Continue for free</span>
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