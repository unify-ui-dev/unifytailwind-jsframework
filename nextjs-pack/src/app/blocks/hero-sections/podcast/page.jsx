"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
    {
        id: 1,
        text: "Home",
        link: "#"
    },
    {
        id: 2,
        text: "Features",
        link: "#"
    },
    {
        id: 3,
        text: "Episodes",
        link: "#"
    },
    {
        id: 4,
        text: "About",
        link: "#"
    },
    {
        id: 5,
        text: "Episodes",
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
            <div onClick={() => { closeNavbar() }} aria-hidden="true" className={
                `fixed bg-gray-800/40 inset-0 z-30 ${openNavbar ? "flex lg:hidden" : "hidden"}`
            } />
            <header className="fixed left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-xl">
                <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max">
                        <Link href="#" className="text-xl font-semibold flex items-center gap-x-2">
                            <span className="flex">
                                <span className="w-3 h-6 rounded-l-full flex bg-sky-600" />
                                <span className="w-3 h-6 rounded-r-full flex bg-teal-400 mt-2" />
                            </span>
                            <span className="text-lg text-gray-700 dark:text-gray-300">Podux</span>
                        </Link>
                    </div>
                    <div className={`
                        absolute top-full left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                        ${openNavbar ? "" : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"}
                    `}>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
                            {
                                navItems.map(navItem => (
                                    <li key={navItem.id}>
                                        <Link href={navItem.link} className="relative py-2.5 duration-300 ease-linear hover:text-sky-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-sky-600">
                                            {navItem.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                            <Link href="#" className="px-5 py-2.5 border border-gray-200 dark:border-gray-800 text-sky-700 dark:text-white flex justify-center w-full sm:w-auto">
                                Signin
                            </Link>
                            <Link href="#" className="px-5 py-2.5 bg-sky-700 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto">
                                Signup
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => { toggleNavbar() }} aria-label="toggle navbar" className="outline-none border-l border-l-sky-100 dark:border-l-gray-800 pl-3 relative py-3 children:flex">
                            <span aria-hidden="true" className={`
                                h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                                ${openNavbar ? " rotate-45 translate-y-[0.33rem]" : ""}
                            `} />
                            <span aria-hidden="true" className={`
                                mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                                ${openNavbar ? " -rotate-45 -translate-y-[0.33rem]" : ""}
                            `} />
                        </button>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default function HeroSection() {
    return (
        <>
            <Navbar />
            <section className="py-8 mt-24">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-10">
                    <div className="lg:w-1/2 lg:py-10 xl:py-12 text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto ">
                        <h1 className="font-semibold leading-tight text-teal-950 dark:text-white text-4xl md:text-5xl lg:text-6xl">
                            Find and listen in your favorite <div className="relative after:absolute after:inset-x-0 after:h-3 after:bg-sky-100 dark:after:bg-sky-950 after:bottom-2 inline-block px-2">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-tr from-sky-800 to-teal-400">Podcasts</span></div>!
                        </h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, beatae omnis ipsa magnam neque ut
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link href="#" className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-transparent bg-sky-700 text-white">
                                Start Listening
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={16} height={16} strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                            <Link href="#" className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-gray-200 text-sky-700 dark:border-gray-800 dark:text-white">
                                Explore channels
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-browser-safari" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0Zm0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0ZM4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341Zm6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8Zm12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8ZM2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091Zm6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354Zm9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353ZM1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483Zm-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177Zm12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177ZM3.045 12.944a.299.299 0 0 1-.029-.376l3.898-5.592a.25.25 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.25.25 0 0 1-.062.062l-5.592 3.898a.299.299 0 0 1-.382-.034l-.005-.006Zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176ZM9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176Z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex items-center gap-1 mt-10 justify-center lg:justify-start gap-x-3">
                            <div className="flex items-center -space-x-2">
                                <Image src="/images/podCast.webp" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                                <Image src="/images/podCast.webp" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                                <Image src="/images/podCast.webp" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">+12k</span>
                                <span className="text-gray-600 text-sm dark:text-gray-300">WordWide listners</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative lg:h-auto max-w-2xl md:max-w-3xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-8 px-10 py-1.5 bg-white text-center border border-gray-100 shadow-lg shadow-gray-200/40">
                            <span className="font-bold text-3xl text-sky-950">+25</span>
                            <p className="text-gray-600">Podcasts</p>
                        </div>
                        <Image src="/images/sidebiew.webp" width={2250} height={1400} alt="sidebiew image" className="lg:w-full lg:h-full object-cover" />
                    </div>
                </div>
            </section>
        </>
    )
}