import { useState } from 'react'

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
    return (
        <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
            <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                <div className="flex items-center min-w-max relative">
                    <a href="#" className="font-semibold flex items-center gap-x-2">
                        <div className="flex items-center -space-x-3">
                            <span className="h-6 aspect-square bg-blue-600 dark:bg-blue-500 rounded-full flex" />
                            <span className="h-6 aspect-square bg-pink-600 dark:bg-pink-400 blur rounded-full flex" />
                        </div>
                        <span className="text-lg text-gray-700 dark:text-gray-300">Agency</span>
                    </a>
                </div>
                <div className={`
                    fixed inset-x-0 h-[100dvh] lg:h-max top-0  lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                    ${openNavbar ? "" : " -translate-y-10 opacity-0 invisible lg:visible"}
                `}>
                    <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
                        {
                            navItems.map(navItem => (
                                <li key={navItem.id}>
                                    <a href={navItem.link} className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 ">{navItem.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                        <a href="#" className="px-6 py-3 duration-300 ease-linear flex justify-center w-full sm:w-auto border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-700 dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:bg-gray-950 rounded-xl">
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
            <section className="min-h-max bg-blue-50 dark:bg-gray-950">
                <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl dark:from-[#170cac] dark:invisible dark:opacity-40">
                    </div>
                    <div className="h-20 w-3/5 bg-gradient-to-r from-[#4232ce] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
                    </div>
                </div>
                <div className="min-h-max h-[100dvh] w-full flex items-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-blue-600 to-pink-400 rounded-full opacity-50 blur-2xl" />
                    <div className="relative mx-auto pt-32 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
                        <h1 className="text-gray-900 dark:text-white mx-auto max-w-4xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
                            We help you to grow your business
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe atque enim quasi a ipsum asperiores necessitatibus deleniti, sint quo vel corporis dignissimos
                        </p>
                        <div className="flex sm:flex-row flex-col gap-5 w-full mx-auto max-w-xl">
                            <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 dark:text-gray-400 shadow-lg shadow-gray-200/20 dark:shadow-transparent
                      border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 rounded-xl ease-linear focus-within:bg-white dark:focus-within:bg-gray-950  focus-within:border-blue-600">
                                <span className="min-w-max pr-2 border-r border-gray-200 dark:border-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                    </svg>
                                </span>
                                <input type="email" name="" id="" placeholder="johndoe@gmail.com" className="w-full py-3 outline-none bg-transparent" />
                                <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-lg outline-none relative overflow-hidden border duration-300 ease-linear
                          after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                                    <span className="hidden sm:flex relative z-[5]">
                                        Get in touch
                                    </span>
                                    <span className="flex sm:hidden relative z-[5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                        <div className="flex items-center gap-1 mt-10 justify-center gap-x-3">
                            <div className="flex items-center -space-x-2">
                                <img src="/images/podCast.webp" width={2250} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                                <img src="/images/podCast.webp" width={2250} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                                <img src="/images/podCast.webp" width={2250} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">+12k</span>
                                <span className="text-gray-600 text-sm dark:text-gray-300">WordWide Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}