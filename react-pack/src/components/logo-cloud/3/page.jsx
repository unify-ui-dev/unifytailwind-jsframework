import "./component.css"

const LogoCloudSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10 ">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/3 space-y-6">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white capitalize">Trusted by companies like</h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptates sit officia nulla architecto libero assumenda iusto.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 flex-1">
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                        <a href="#" target="_blank">
                            <img src="/logos/paypallogo.png" width={300} alt="logo ipsum" className="w-auto h-9 dark:grayscale" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogoCloudSection