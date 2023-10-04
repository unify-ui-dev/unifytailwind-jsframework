import { useState } from 'react'
import "./component.css"


const navItems = [
    {
        id: 1,
        text: "Company",
        link: "#"
    },
    {
        id: 2,
        text: "Services",
        link: "#"
    },
    {
        id: 3,
        text: "Products",
        link: "#"
    },
    {
        id: 4,
        text: "Ressources",
        link: "#"
    }
]

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)

    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar)
    }
    return (
        <header className="sticky left-0 top-0 w-full flex items-center h-20 z-50 bg-white dark:bg-gray-950 bg-opacity-90 backdrop-filter backdrop-blur-xl">
            <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                <div className="flex items-center min-w-max">
                    <a href="#" className="font-semibold flex items-center gap-x-2">
                        <div className="flex items-center -space-x-3">
                            <span className="h-6 aspect-square bg-blue-600 dark:bg-blue-500 rounded-full flex" />
                            <span className="h-6 aspect-square bg-sky-600 dark:bg-sky-400 blur rounded-full flex" />
                        </div>
                        <span className="text-lg text-gray-700 dark:text-gray-300">careRent</span>
                    </a>
                </div>
                <div className="absolute inset-0 top-0 h-screen lg:h-max translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent border-b border-gray-200 dark:border-gray-800 lg:border-b-0 py-16 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:w-max lg:space-x-16 lg:top-0 lg:relative  lg:flex duration-300 ease-linear">
                    <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
                        {
                            navItems.map(navItem => (
                                <li key={navItem.id}>
                                    <a href={navItem.link} className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 ">
                                        {navItem.text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                        <a href="#" className="flex items-center justify-center w-full sm:w-auto h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-blue-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                            Get It touch
                        </a>
                    </div>
                </div>
                <div className="flex items-center lg:hidden">
                    <button onClick={() => { toggleNavbar() }} className="outline-none border-l border-l-purple-100 dark:border-l-gray-800 pl-3 relative py-3">
                        <span className="sr-only">Toggle navbar</span>
                        <span aria-hidden="true" className={`
                                flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                                ${openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""}
                            `} />
                        <span aria-hidden="true" className={`
                                flex mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                                ${openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""}
                            `} />
                    </button>
                </div>
            </nav>
        </header>
    )
}


export default function HeroSection() {
    return (
        <>
            <Navbar />
            <section className="pt-4">
                <div className="sm:px-2 md:px-2 lg:px-1 xl:px-0 mx-auto lg:max-w-[82rem]">
                    <div className="sm:rounded-3xl flex flex-col-reverse md:flex-row items-center bg-gray-100 dark:bg-gray-900">
                        <div className="absolute z-10 bottom-8 lg:bottom-0 left-0 md:relative min-w-max w-full md:w-auto md:justify-center flex flex-row md:flex-col items-center md:space-y-4 gap-x-6 px-4 sm:pl-8 sm:pr-0 py-4 text-gray-600">
                            <button className="outline-none swip-prev-homeslide p-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                <span className="sr-only">Prev</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="flex md:flex-col items-center md:space-y-4 gap-x-4 home-swiper-pagination w-max max-w-max">
                                <span className="relative w-5 h-5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800 before:absolute before:inset-1 before:rounded-full before:bg-blue-600" />
                                <span className="relative w-5 h-5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-200/90 dark:bg-gray-800/90 before:absolute before:inset-1 before:rounded-full" />
                            </div>
                            <button className="outline-none swip-next-homeslide p-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                <span className="sr-only">Next</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full">
                            <div className="relative flex items-center h-[calc(100dvh-5rem)] md:h-auto py-24 px-4 sm:px-8 md:px-12 lg:px-14 sm:py-20 md:py-24 lg:py-28 w-full">
                                <div className="sm:w-3/5 max-w-xl md:max-w-2xl relative z-10">
                                    <div className="space-y-6 md:space-y-8 relative">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white md:text-gray-900 dark:text-white">
                                            Freight and Transportation <span className="font-sans italic">Solutions</span>
                                        </h1>
                                        <p className="text-gray-300 md:text-gray-700 dark:text-gray-300 max-w-lg">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab, quos qui perspiciatis quibusdam,
                                        </p>
                                        <div className="pt-4">
                                            <a href="#" className="px-6 h-12 flex items-center w-max rounded-3xl bg-blue-600 text-white">
                                                Get In Touch
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute right-0 top-0 inset-y-0 w-full md:w-4/5 lg:w-3/5">
                                    <div aria-hidden="true" className="absolute inset-0 bg-gray-800/40 dark:bg-gray-950/80 md:hidden">
                                        <span className="w-full md:hidden bg-gradient-to-br from-gray-800 dark:from-gray-950 flex h-full" />
                                    </div>
                                    <div className="hidden md:flex absolute inset-0 bg-gradient-to-r from-gray-100 dark:from-gray-900">
                                    </div>
                                    <img src="/images/camion1.webp" alt="" className="h-full w-full object-cover md:rounded-r-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
