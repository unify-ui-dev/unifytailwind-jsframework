import "./component.css"

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="rounded-lg h-auto flex flex-col p-6 md:p-8 bg-gray-100 dark:bg-gray-900">
            <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 w-max">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img src={icon} alt="ico" className="w-auto h-10" width={20} />
                </div>
            </div>
            <div className="space-y-5 mt-6">
                <h2 className="text-xl relative  font-semibold text-gray-900 dark:text-white">
                    {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-justify line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    )
}
const services = [
    {
        id: 1,
        title: "Service name 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "/images/icons/web-development.svg"
    },
    {
        id: 2,
        title: "Service name 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "/images/icons/seo.svg"
    },
    {
        id: 3,
        title: "Service name 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "/images/icons/web-development.svg"
    },
    {
        id: 4,
        title: "Service name 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "/images/icons/seo.svg"
    },
    {
        id: 5,
        title: "Service name 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "/images/icons/web-development.svg"
    },
    {
        id: 6,
        title: "Service name 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
        icon: "/images/icons/seo.svg"
    },
]

const Features = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
                <div className="flex flex-col gap-5">
                    <div className="space-y-4 max-w-xl">
                        <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-800 dark:text-gray-100">Services</span>
                        <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">Let's us help you growing your busines</h1>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:items-stretch">
                    {
                        services.map(service=>(
                            <ServiceCard key={service.id} {...service}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features