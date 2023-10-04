import { useState } from 'react'
import "./component.css"


const navItems = [
    {
        id: 1,
        text: "Home",
        link: "#"
    },
    {
        id: 2,
        text: "Solutions",
        link: "#"
    },
    {
        id: 3,
        text: "Blog",
        link: "#"
    },
    {
        id: 4,
        text: "About",
        link: "#"
    }
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
            <div onClick={() => { closeNavbar() }} aria-hidden="true" className={
                `fixed bg-gray-800/40 inset-0 z-30 ${openNavbar ? "flex lg:hidden" : "hidden"}`
            } />
            <header className="absolute inset-x-0 top-0 h-20 flex items-center z-50">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-50">
                    <nav className="flex items-center justify-between w-full relative">
                        <div className="inline-flex relative bg-inherit">
                            <a href="#" className="flex items-center gap-2">
                                <span className="flex">
                                    <span className="w-3 h-6 rounded-l-full flex bg-emerald-500" />
                                    <span className="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2" />
                                </span>
                                <span className="text-lg text-gray-700 dark:text-white">Podux</span>
                            </a>
                        </div>
                        <div className={`
                            absolute top-10 px-5 sm:px-8 md:px-12 lg:z-auto
                            lg:px-0 lg:pt-0 lg:top-0 
                            bg-white dark:bg-gray-950 lg:dark:bg-transparent  rounded-xl border border-gray-200 
                            dark:border-gray-800 shadow-lg shadow-gray-100 dark:shadow-transparent  
                            lg:border-none lg:shadow-none lg:rounded-none lg:bg-transparent 
                            w-full lg:justify-between py-6 lg:py-0 lg:relative flex flex-col lg:flex-row transition-all duration-300 ease-linear origin-top
                            ${openNavbar ? "" : "invisible opacity-20 translate-y-6 lg:visible lg:opacity-100 lg:translate-y-0"}
                        `}>
                            <ul className="text-gray-700 dark:text-gray-100 w-full flex lg:items-center gap-y-4 lg:gap-x-8 flex-col lg:flex-row lg:w-full lg:justify-center">
                                {
                                    navItems.map(navItem => (
                                        <li key={navItem.id}>
                                            <a href={navItem.link} className="transition hover:text-emerald-500 ease-linear text-lg">{navItem.text}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="lg:min-w-max flex flex-col lg:flex-row lg:items-center gap-4 mt-8 lg:mt-0 w-full sm:w-max">
                                <a href="#" className="px-7 relative text-emerald-500 h-12 flex w-full sm:w-max justify-center items-center before:bg-emerald-500/5 dark:before:bg-emerald-500/10 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95">
                                    <span className="relative text-emerald-500">Signin</span>
                                </a>
                                <a href="#" className="px-7 relative text-white h-12 flex w-full sm:w-max justify-center items-center before:bg-emerald-500 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95">
                                    <span className="relative text-white"> Join Us</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex ml-2 pl-2 border-l border-gray-100 dark:border-gray-800 min-w-max items-center gap-x-3">
                            <button className="outline-none flex relative text-gray-700 dark:text-gray-300 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:flex hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                                <span className="sr-only">switch theme</span>
                            </button>
                            <button onClick={() => { toggleNavbar() }} aria-label='toggle navbar' className="outline-none lg:hidden w-7 h-auto flex flex-col relative children:flex">
                                <span aria-hidden="true" className={`
                                    w-6 origin-right h-0.5 rounded-full bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-linear
                                    ${openNavbar ? "-rotate-[40deg] -translate-y-[0.375rem] scale-x-100" : " scale-x-75"}
                                `} />
                                <span aria-hidden="true" className={`
                                    w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-linear
                                    ${openNavbar ? "opacity-0 scale-x-0" : ""}
                                `} />
                                <span aria-hidden="true" className={`
                                    w-6 origin-right mt-1 h-0.5 rounded-full bg-gray-700 dark:bg-gray-200 transition-all duration-300 ease-linear
                                    ${openNavbar ? "rotate-[40deg] -translate-y-[0.150rem] scale-x-100" : "scale-x-50"}
                                `} />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}


export default function HeroSection() {
    return (
        <>
            <Navbar />
            <section className="relative w-full">
                <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-emerald-500 opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
                    </div>
                    <div className="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
                    </div>
                </div>
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
                    <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                        <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20">
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                        <div className="lg:py-6">
                            <div className="text-center lg:text-left">
                                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                                    New season available <a href="#" className="underline text-emerald-700 dark:text-white font-semibold">here</a>
                                </span>
                                <h1 className="text-gray-800 pt-4 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                                    Find and listen <br /> Favorite
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-[#8cd66a]">
                                        Podcast
                                    </span>
                                    on internet
                                </h1>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mt-8 text-center lg:text-left mx-auto max-w-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, beatae omnis ipsa magnam neque
                                ut nam
                                nesciunt esse fugit praesentium hic magni possimus illo consequatur.
                            </p>
                            <div className="flex items-center gap-4 mt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                                <a href="#" className="px-7 relative text-white h-12 flex w-full sm:w-max justify-center items-center before:bg-emerald-500 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95">
                                    <span className="relative text-white"> Join Us</span>
                                </a>
                                <a href="#" className="px-7 relative text-emerald-500 h-12 flex w-full sm:w-max justify-center items-center before:bg-emerald-500/5 dark:before:bg-emerald-500/10 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95">
                                    <span className="relative text-emerald-500 flex items-center gap-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                        </svg>
                                        Listening Episode
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center text-center flex-col sm:flex-row gap-4 sm:gap-0 mt-8 w-max mx-auto lg:mx-0">
                                <div className="flex items-center -space-x-2">
                                    <img src="/images/sidebiew.webp" width={1240} alt="avatar" className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover" />
                                    <img src="/images/sidebiew.webp" width={1240} alt="avatar" className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover" />
                                    <img src="/images/sidebiew.webp" width={1240} alt="avatar" className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover" />
                                    <img src="/images/sidebiew.webp" width={1240} alt="avatar" className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover" />
                                    <span className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 bg-gray-200 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 flex items-center justify-center">
                                        300+
                                    </span>
                                </div>
                                <span className="pl-2 text-gray-600 dark:text-gray-200"> WordWide listners </span>
                            </div>
                        </div>
                        <div className="lg:h-full hidden md:flex">
                            <div className="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                                <div className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-emerald-500 to-pink-300 dark:from-[#570cac] dark:to-emerald-500 blur-2xl">
                                </div>
                                <div className="absolute w-3/5 h-full z-10 p-1 -translate-y-1/2 top-1/2 right-3 rounded-3xl bg-whitee dark:bg-gray-950  shadow-lg shadow-gray-100 dark:shadow-transparent  border border-gray-200 dark:border-gray-800">
                                    <img src="/images/sidebiew.webp" alt="In studio" width={500} height="auto" loading="lazy" className="w-full h-full rounded-2xl object-cover" />
                                </div>
                                <div className="absolute -translate-y-1/2 top-1/2 h-[calc(80%-2rem)] w-[calc(40%-20px)] p-1 rounded-3xl bg-white dark:bg-gray-950  shadow-lg shadow-gray-100 dark:shadow-transparent  border border-gray-200 dark:border-gray-800">
                                    <img src="/images/sidebiew.webp" alt="Happy in studio" width={200} height="auto" loading="lazy" className="w-full h-full rounded-2xl object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
