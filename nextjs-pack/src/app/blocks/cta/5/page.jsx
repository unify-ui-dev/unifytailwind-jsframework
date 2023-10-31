import Link from "next/link"


const CtaSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative">
                <div className="bg-white dark:bg-gray-950 flex flex-col items-center md:flex-row md:justify-between gap-8 p-12 rounded-xl md:items-start text-center md:text-left">
                    <div className="max-w-xl space-y-3">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Ready to take your skills to the noon
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="#" className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-5 py-2.5 rounded-lg">
                            Read doc
                        </Link>
                        <Link href="#" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg">
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-32 -mt-16 bg-gray-900 dark:bg-gray-800" />
        </section>
    )
}

export default CtaSection