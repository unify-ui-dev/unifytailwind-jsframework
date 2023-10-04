import { useState } from 'react'
import "./component.css"

const navItems = [
    {
        id: 1,
        text: "Solutions",
        link: "#"
    },
    {
        id: 2,
        text: "Company",
        link: "#"
    },
    {
        id: 3,
        text: "Plateform",
        link: "#"
    },
    {
        id: 4,
        text: "Ressources",
        link: "#"
    },
    {
        id: 5,
        text: "Contact",
        link: "#"
    },
]

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
            <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
                <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max relative">
                        <a href="#" className="font-semibold flex items-center gap-x-2">
                            <div className="flex items-center -space-x-3">
                                <span className="h-6 aspect-square bg-purple-600 dark:bg-purple-500 rounded-full flex" />
                                <span className="h-6 aspect-square bg-pink-600 dark:bg-pink-400 blur rounded-full flex" />
                            </div>
                            <span className="text-lg text-gray-700 dark:text-gray-300">mySto</span>
                        </a>
                    </div>
                    <div className={`
                        fixed inset-x-0 h-[100dvh] lg:h-max top-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                        ${openNavbar ? "" : "-translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0"}
                    `}>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:pl-10">
                            {
                                navItems.map(navItem => (
                                    <li key={navItem.id}>
                                        <a href={navItem.link} className="relative py-2.5 duration-300 ease-linear hover:text-purple-600 ">
                                            {navItem.text}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                            <a href="#" className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 border border-gray-200 dark:border-gray-800 text-purple-600 dark:text-gray-300">
                                Login
                            </a>
                            <a href="#" className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 bg-purple-600 text-white">
                                Sign-up
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
        </>
    )
}

export { Navbar }