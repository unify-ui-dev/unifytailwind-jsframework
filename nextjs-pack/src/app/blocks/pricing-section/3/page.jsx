import Link from "next/link"


const PricingSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 divide-y divide-gray-200 dark:divide-gray-800">
                <div className="flex md:justify-between md:flex-row flex-col gap-5 md:gap-20">
                    <div className="max-w-xl">
                        <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
                            The Right Plan for <br />
                            <span className="text-sky-700 dark:text-sky-600">Your Business</span>
                        </h1>
                    </div>
                    <div className="flex-1 max-w-2xl">
                        <p className="text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam ipsa eum libero, in voluptatibus esse ad? Enim ratione inventore eum ducimus qui ea,
                        </p>
                    </div>
                </div>
                <div className="mt-16 border-t border-t-gray-200 dark:border-t-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
                    <div className="py-4 grid items-center md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="md:col-span-2 lg:col-span-1">
                            <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100">Starter</h2>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 md:col-span-2 lg:col-span-3 md:items-center grid gap-6 md:grid-cols-3">
                            <ul className="space-y-3 md:col-span-2">
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage  1
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage 2
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage 3
                                </li>
                            </ul>
                            <div className="font-bold text-4xl text-gray-900 dark:text-white">
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="flex md:justify-end md:items-center">
                            <a href="#" className="h-10 px-5 text-sky-700 dark:text-gray-300 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center outline-none">
                                Get started
                            </a>
                        </div>
                    </div>
                    <div className="py-4 grid items-center md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="md:col-span-2 lg:col-span-1">
                            <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100">Starter</h2>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 md:col-span-2 lg:col-span-3 md:items-center grid gap-6 md:grid-cols-3">
                            <ul className="space-y-3 md:col-span-2">
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage  1
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage 2
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage 3
                                </li>
                            </ul>
                            <div className="font-bold text-4xl text-gray-900 dark:text-white">
                                <span>Regular</span>
                            </div>
                        </div>
                        <div className="flex md:justify-end md:items-center">
                            <Link href="#" className="h-10 px-5 rounded-lg text-white bg-sky-700 dark:bg-sky-600 border-gray-200 dark:border-gray-800 flex items-center outline-none">
                                Get started
                            </Link>
                        </div>
                    </div>
                    <div className="py-4 grid items-center md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="md:col-span-2 lg:col-span-1">
                            <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100">Starter</h2>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 md:col-span-2 lg:col-span-3 md:items-center grid gap-6 md:grid-cols-3">
                            <ul className="space-y-3 md:col-span-2">
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage  1
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage 2
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <span className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-sky-700 dark:bg-sky-600 text-white">✓</span>
                                    Advantage 3
                                </li>
                            </ul>
                            <div className="font-bold text-4xl text-gray-900 dark:text-white">
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="flex md:justify-end md:items-center">
                            <Link href="#" className="h-10 px-5 text-sky-700 dark:text-gray-300 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center outline-none">
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection