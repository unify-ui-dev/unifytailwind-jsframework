import "./component.css"

const CtaSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center flex flex-col items-center space-y-8">
                <h1 className="font-semibold text-4xl text-gray-900 dark:text-white">
                    Start your free trial
                </h1>
                <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat obcaecati dolore qui modi
                </p>
                <div className="flex gap-4 items-center">
                    <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                        Get started
                    </a>
                    <a href="#" className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800">
                        Read doc
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CtaSection