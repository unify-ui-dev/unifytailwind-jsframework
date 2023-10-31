"use client"
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
    {
        id: 1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>,
        link: "#",
        text: "Dashboard",
        isActive: true,
    },
    {
        id: 2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>,
        link: "#",
        text: "Candidats",
        isActive: false,
    },
]
const Sidebar = () => {
    const [sidebarToggled, setSidebarToggled] = useState(false)
    const [sidebarResized, setSidebarResized] = useState(false)
    const toggleSidebar = () => {
        setSidebarToggled(sidebarToggled => !sidebarToggled)
    }
    const resizeSidebar = () => {
        setSidebarResized(sidebarResized => !sidebarResized)
    }
    return (
        <>
            <aside className={`
            fixed h-[100dvh] overflow-hidden lg:static w-11/12 max-w-[18rem] md:w-72 transition-all rounded-r-2xl bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/40 dark:shadow-gray-800/60 flex flex-col justify-between px-4 lg:transition-[width] ease-linear
            ${sidebarToggled ? "" : "-translate-x-full lg:-translate-x-0"}
            ${sidebarResized ? "lg:w-20" : ""}
        `}>
                <div className="min-h-max py-4 border-b border-b-gray-200 dark:border-b-gray-800">
                    <Link href="#" data-logo-box className="flex items-center gap-x-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                        <span className="w-11 h-11 min-w-[2.75rem] rounded-md bg-blue-600 text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                        </span>
                        <span className={`
                        ${sidebarResized ? "lg:invisible" : ""}
                    `}>unifyUI</span>
                    </Link>
                </div>
                <nav className="h-full pt-10">
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        {
                            navItems.map(navItem => (
                                <li key={navItem.id}>
                                    <Link href={navItem.link} className={`
                                    flex items-center gap-x-4 px-3 py-2.5 rounded-md
                                    ${navItem.isActive ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"}
                                `}>
                                        <span className="min-w-max inline-flex">
                                            {navItem.icon}
                                        </span>
                                        <span className={`
                                        inline-flex ease-linear transition-colors duration-300
                                        ${sidebarResized ? "lg:invisible" : ""}`}>
                                            {navItem.text}
                                        </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="min-h-max py-2 hidden lg:flex justify-end bg-transparent">
                    <button onClick={() => { resizeSidebar() }} className={`
                    outline-none bg-gray-100 dark:bg-gray-900 rounded-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 ease-linear transition-transform  w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                    ${sidebarResized ? "rotate-180" : ""}
                `}>
                        <span className="sr-only">toggle sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </aside>
            <main>
                <div className="flex lg:hidden fixed right-2 top-2 p-4">
                    <button onClick={() => { toggleSidebar() }} className="p-3 rounded-full bg-blue-600 dark:bg-blue-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
                        <span className="sr-only">
                            toggle sidebar
                        </span>
                        <span className={`
                            w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
                            ${sidebarToggled ? "rotate-[40deg] translate-y-1.5" : ""}
                        `} />
                        <span className={`
                            w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                            ${sidebarToggled ? "opacity-0 scale-x-0" : ""}
                        `} />
                        <span className={`
                            w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                            ${sidebarToggled ? "-rotate-[40deg] -translate-y-1.5" : ""}
                        `} />
                    </button>
                </div>
            </main>
        </>
    )
}
export default Sidebar