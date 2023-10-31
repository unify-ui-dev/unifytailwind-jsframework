import "./component.css"

const ContentSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
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
                            Web site Analysis
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Free optimazation.
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Content Optimization.
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Web site Analysis
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Free optimazation.
                        </li>
                    </ul>
                </div>
                <div className="flex md:flex-1">
                    <img src="/images/working-on-housing-project.jpg" alt="working on housing" width={1300} className="w-full md:h-full object-cover rounded-lg" />
                </div>
            </div>
        </section>
    )
}

export default ContentSection