

const iconRender = (val) => {
    switch (val) {
        case "stat-ico":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            )
        default:
            return <>No Icon</>;
    }
}


const FeatureItem = ({ title, description, icon }) => {
    return (
        <div className="space-y-4">
            <span className="p-2 rounded-md  flex w-max bg-emerald-50 dark:bg-gray-900 text-emerald-600 dark:text-emerald-400">
                {iconRender(icon)}
            </span>
            <h2 className="font-bold text-gray-900 dark:text-white text-xl">
                {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
                {description}
            </p>
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
    {
        id: 4,
        title: "Feature 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "stat-ico"
    },
]

const Features = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col gap-14">
                <div className="flex max-w-xl">
                    <h2 className="text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                        Order from anywhere, get it delivered fast
                    </h2>
                </div>
                <div className="flex gap-12 lg:items-center">
                    <div className="flex flex-1 flex-col gap-10">
                        <div className="gap-8 lg:gap-10 grid sm:grid-cols-2">
                            {
                                features.map(feature => (
                                    <FeatureItem key={feature.id} {...feature} />
                                ))
                            }
                        </div>
                        <a href="#" className="bg-emerald-700 text-white px-5 h-12 rounded-md w-max flex items-center gap-x-3">
                            Sign up now
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="hidden md:flex justify-end md:w-1/2 xl:w-[45%] lg:h-full items-center">
                        <img src="/images/Image.png" width={500} alt="img cover about" className="w-full lg:w-[90%] xl:lg:w-[85%] h-auto object-cover rounded-md" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features