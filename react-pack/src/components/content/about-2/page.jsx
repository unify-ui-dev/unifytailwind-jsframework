import "./component.css"

const ContentSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-gray-100 dark:bg-gray-900">
                <div className="flex md:flex-1">
                    <img src="/images/heroImg.webp" alt="working on housing" width={1300} className="w-full md:h-full object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300">
                    <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                        We help drive your business forward faster
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Web Developement
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Web Developement
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Web Developement
                        </li>
                    </ul>
                    <div className="flex">
                        <a href="#" className="px-5 h-11 flex items-center bg-emerald-600 dark:bg-emerald-500 rounded-lg text-white">
                            Get In touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentSection