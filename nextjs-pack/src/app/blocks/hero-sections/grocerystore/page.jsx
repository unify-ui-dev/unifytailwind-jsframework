import { useState } from 'react'

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar)
    }
    const closeNavbar = () => {
        setOpenNavbar(false)
    }
    return (
        <>
            <div onClick={() => { closeNavbar() }} aria-hidden="true" className={
                `fixed bg-gray-800/40 inset-0 z-30 ${openNavbar ? "flex lg:hidden" : "hidden"}`
            } />
            <header className="fixed left-0 bg-emerald-50 dark:bg-gray-950 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-800 z-40">
                <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max">
                        <a href="#" className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            <span className="relative after:absolute after:inset-0 after:rotate-3 after:border after:border-emerald-600 text-emerald-800 dark:text-white">Grocy</span>Mart
                        </a>
                    </div>
                    <div className={`
                        absolute top-full lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 lg:transition-none ease-linear
                        ${openNavbar ? "translate-y-0 rotate-0 opacity-100 visible" : " translate-y-10 -rotate-12 opacity-0 invisible lg:visible lg:-rotate-0"}
                    `}>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-800 dark:text-gray-200 lg:w-full lg:justify-center">
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-emerald-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-emerald-600">Home</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-emerald-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-emerald-600">Categories</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-emerald-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-emerald-600">Sales</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-emerald-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-emerald-600">About</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-emerald-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-emerald-600">Contact</a>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                            <div className="hidden lg:flex lg:items-center ">
                                <a href="#" className="relative text-gray-800 dark:text-gray-200 px-1.5">
                                    <span className="sr-only">cart</span>
                                    <span className="absolute top-0 right-0 bg-emerald-600 w-2 h-2 rounded-full" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </a>
                            </div>
                            <a href="#" className="px-5 py-2.5 rounded-md text-emerald-800 dark:text-gray-200 underline flex justify-center">
                                Signin
                            </a>
                            <a href="#" className="px-5 py-2.5 rounded-md bg-emerald-600 text-white flex justify-center duration-300 ease-linear hover:bg-emerald-700">
                                Signup
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden gap-x-4">
                        <div className="flex items-center gap-x-4 lg:hidden">
                            <a href="#" className="relative  text-gray-700 dark:text-gray-300 px-1.5">
                                <span className="sr-only">cart</span>
                                <span className="absolute top-0 right-0 bg-emerald-600 w-2 h-2 rounded-full" />
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </a>
                            <div className="flex">
                                <button onClick={() => { toggleNavbar() }} aria-label="Toggle navbar" className="outline-none border-l border-l-emerald-100 dark:border-l-gray-800 pl-3 relative py-3 children:flex">
                                    <span aria-hidden="true" className={`
                                        h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                                        ${openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""}
                                    `} />
                                    <span aria-hidden="true" className={`
                                        mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                                        ${openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""}
                                    `} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

const FeatureItem = ({ text }) => {
    return (
        <div className="text-gray-700 dark:text-gray-300 flex gap-x-3">
            <span className="w-7 h-7 max-h-7 min-w-[1.75rem] bg-emerald-100 dark:bg-gray-900 dark:text-gray-300 text-emerald-600 rounded-md flex items-center justify-center">
                ✓
            </span>
            {text}
        </div>
    )
}

const CategoryCard = ({ icon, title, description }) => {
    return (
        <div className="space-y-2 sm:p-4 sm:rounded-md sm:bg-emerald-200/10 sm:dark:bg-gray-800/10">
            <img src={icon} alt="icon category" width={96} height={96} className="w-14 h-14 md:w-20 md:h-20" />
            <h2 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">
                {description}.
            </p>
        </div>
    )
}

const features = [
    {
        id: 1,
        text: "Feature 1"
    },
    {
        id: 2,
        text: "Feature 2"
    },
    {
        id: 3,
        text: "Feature 3"
    },
    {
        id: 4,
        text: "Feature 4"
    },
]

const categories = [
    {
        id: 1,
        icon: "/images/icons/fruit-icon.svg",
        title: "Product Category",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        icon: "/images/icons/fruit-icon.svg",
        title: "Product Category",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        icon: "/images/icons/fruit-icon.svg",
        title: "Product Category",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 4,
        icon: "/images/icons/fruit-icon.svg",
        title: "Product Category",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 5,
        icon: "/images/icons/fruit-icon.svg",
        title: "Product Category",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

export default function HeroSection() {
    return (
        <>
            <Navbar />
            <section className="py-8 mt-20">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-x-6">
                    <div className="lg:w-[47%] py-4 lg:py-8 xl:py-12 space-y-7">
                        <h1 className="text-gray-900 dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                            Let your <span className="text-emerald-600">groceries</span> come to you
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
                        </p>
                        <div className="max-w-md w-full">
                            <form action="#" className="flex w-full text-gray-700 dark:text-gray-400">
                                <input type="text" placeholder="meal, Vegetables......" className="px-5 py-2.5 border border-emerald-200 dark:border-gray-800 border-r-0 rounded-l-md flex w-full outline-none bg-emerald-50 dark:bg-gray-900" />
                                <button aria-label="search btn" className="outline-none text-white bg-emerald-600 px-3 py-2.5 rounded-r-md min-w-max">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4">
                            {
                                features.map(feature=>(
                                    <FeatureItem key={feature.id} {...feature}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-1 relative lg:h-auto">
                        <div className="relative h-max lg:absolute left-0 top-0 flex lg:h-full  lg:w-auto w-11/12">
                            <span className="absolute top-0 left-32 w-3/5 aspect-square rounded-md -rotate-[30deg] translate-y-20 origin-center border border-emerald-200 dark:border-gray-800" />
                            <span className="absolute top-1/2 right-16 w-2/5 aspect-square rounded-md rotate-12 -translate-y-1/2 origin-center border border-emerald-200 dark:border-gray-800" />
                            <img src="/images/woman-with-gro.webp" width={1001} height={1001} alt="woman with grocery" className=" lg:w-auto lg:h-full relative" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto lg:max-w-7xl bg-emerald-100 dark:bg-gray-900 rounded-md w-full p-5 sm:p-10 md:p-12 lg:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 relative">
                    {
                        categories.map(category=>(
                            <CategoryCard key={category.id} {...category}/>
                        ))
                    }
                    <div className="space-y-2 p-4 rounded-md bg-emerald-200/10 dark:bg-gray-800/10 border flex flex-col items-center justify-center border-emerald-100 dark:border-gray-800 lg:hidden">
                        <button className="rounded-full border border-dashed border-emerald-300 dark:border-gray-800 text-emerald-600 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                        <span className="text-gray-800 dark:text-gray-200">Know more</span>
                    </div>
                </div>
            </section>
        </>
    )
}