import "./component.css"


const iconRender = (val) => {
    switch (val) {
        case "stat-ico":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                    <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
                    <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
                </svg>
            )
        default:
            return <>No Icon</>;
    }
}


const FeatureItem = ({ title, description, icon }) => {
    return (
        <div className="p-3 rounded-md bg-white dark:bg-gray-950 shadow-lg dark:shadow-none hover:shadow-emerald-600/20 shadow-transparent transition-all ease-linear border border-gray-100 hover:border-gray-100 dark:border-gray-900 dark:hover:border-gray-600">
            <div className="flex gap-4">
                <div className="min-w-max">
                    <span className="flex text-emerald-600 dark:text-gray-100 aspect-square rounded bg-emerald-600/10 dark:bg-gray-900 p-3">
                        {iconRender(icon)}
                    </span>
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
const features = [
    {
        id: 1,
        title: "Feature 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "stat-ico"
    },
    {
        id: 2,
        title: "Feature 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "stat-ico"
    },
    {
        id: 3,
        title: "Feature 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "stat-ico"
    },
]

const Features = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-10 xl:gap-14">
                <div className="flex flex-1 flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <h2 className="text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                                We are offering best delivery services in Lubumbashi
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</p>
                    </div>
                    <div className="space-y-3">
                        {
                            features.map(feature => (
                                <FeatureItem key={feature.id} {...feature} />
                            ))
                        }
                    </div>
                </div>
                <div className="w-full md:h-auto object-cover flex md:items-end justify-center md:w-1/2 xl:w-[45%] relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-tr from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 rounded-3xl" />
                    <img src="/images/woman-with-gro.webp" width={1001} height={1001} alt="woman with grocery" className="wfull h-auto lg:w-[86%] relative" />
                </div>
            </div>
        </section>
    )
}

export default Features