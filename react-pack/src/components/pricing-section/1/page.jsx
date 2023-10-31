
const PricingSection = () => {



    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 divide-y divide-gray-200 dark:divide-gray-800">
                <div className="flex md:justify-between md:flex-row flex-col gap-3 md:items-center">
                    <div className="max-w-2xl space-y-3">
                        <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
                            Get access to all MediCare Soft for only <span className="text-emerald-700 dark:text-emerald-600">$1200</span>
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                        </p>
                    </div>
                    <div className>
                        <a href="#" className="h-12 flex items-center w-max px-5 rounded-lg bg-emerald-700 dark:bg-emerald-600 text-white transition ease-linear hover:bg-opacity-80">
                            Get Started now
                        </a>
                    </div>
                </div>
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 pt-6">
                    <div className="md:col-span-2 lg:col-span-1 space-y-3">
                        <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-emerald-700 dark:before:bg-emerald-600 text-emerald-700 dark:text-emerald-500">
                            All you need to manage your clinic
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Modern way to have control on your clinic
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                        </p>
                    </div>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300 children:py-3 last:pb-0 first:pt-0">
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 1
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 2
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 3
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 4
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 6
                        </li>
                    </ul>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300 children:py-3 last:pb-0 first:pt-0">
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 1
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 2
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 3
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 4
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Advantage 6
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PricingSection