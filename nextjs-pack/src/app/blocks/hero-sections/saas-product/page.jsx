"use client"
import Image from 'next/image'
import Link from 'next/link'
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
        <>
            <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
                <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max relative">
                        <Link href="#" className="font-semibold flex items-center gap-x-2">
                            <div className="flex items-center -space-x-3">
                                <span className="h-6 aspect-square bg-purple-600 dark:bg-purple-500 rounded-full flex" />
                                <span className="h-6 aspect-square bg-pink-600 dark:bg-pink-400 blur rounded-full flex" />
                            </div>
                            <span className="text-lg text-gray-700 dark:text-gray-300">mySto</span>
                        </Link>
                    </div>
                    <div className={`
                        fixed inset-x-0 h-[100dvh] lg:h-max top-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                        ${openNavbar ? "" : "-translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0"}
                    `}>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:pl-10">
                            {
                                navItems.map(navItem => (
                                    <li key={navItem.id}>
                                        <Link href={navItem.link} className="relative py-2.5 duration-300 ease-linear hover:text-purple-600 ">
                                            {navItem.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                            <Link href="#" className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 border border-gray-200 dark:border-gray-800 text-purple-600 dark:text-gray-300">
                                Login
                            </Link>
                            <Link href="#" className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 bg-purple-600 text-white">
                                Sign-up
                            </Link>
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

export default function HeroSection() {
    return (
        <>
            <Navbar />
            <section className="min-h-max bg-purple-50 dark:bg-gray-950">
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-br from-purple-300 opacity-90 blur-lg dark:from-purple-800 dark:blur-xl dark:opacity-40" />
                <div className="w-full flex items-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-pink-400 rounded-full opacity-50 blur-2xl" />
                    <div className="min-h-max relative mx-auto pt-32 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
                        <Link href="#" className="flex items-center gap-x-2 text-gray-900 dark:text-gray-100 mx-auto w-max px-2 pr-1 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800">
                            mySto v2.1 is out
                            <span className="px-1 rounded-full bg-gray-200 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>
                        <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-semibold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight">
                            The Tool that lets you have full control on your stock &amp; sales
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe atque enim quasi a ipsum asperiores necessitatibus deleniti, sint quo vel corporis dignissimos
                        </p>
                        <div className="flex sm:flex-row flex-col gap-5 w-full mx-auto max-w-lg">
                            <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 dark:text-gray-400 shadow-lg shadow-gray-200/20 dark:shadow-transparent
                      border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 rounded-full ease-linear focus-within:bg-white dark:focus-within:bg-gray-950  focus-within:border-puble-600">
                                <input type="email" name="" id="" placeholder="johndoe@gmail.com" className="w-full py-3 outline-none bg-transparent" />
                                <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                          after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:top-0 after:left-0 after:bg-purple-700 hover:after:opacity-100 hover:after:scale-[2.5] bg-purple-600 border-transparent hover:border-[#172554]">
                                    <span className="hidden sm:flex relative z-[5]">
                                        Sign up
                                    </span>
                                    <span className="flex sm:hidden relative z-[5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                        <div className="mx-auto max-w-6xl rounded-t-2xl aspect-[5/2.3] overflow-hidden px-2 pt-2 bg-gradient-to-t from-gray-50 to-gray-200 dark:from-gray-950 dark:to-gray-900">
                            <Image src="/images/dash-light.webp" width={1440} height={1024} alt="product image" className="rounded-t-lg w-full h-auto dark:hidden" />
                            <Image src="/images/dash-dark.webp" width={1440} height={1024} alt="product image" className="rounded-t-lg w-full h-auto hidden dark:flex" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}