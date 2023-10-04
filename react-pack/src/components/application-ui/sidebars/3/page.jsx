import { useState } from 'react'
import "./component.css"


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
        isActive: true,
    },
]

const Sidebar = () => {

    const [sidebarToggled, setSidebarToggled] = useState(false)

    const toggleSidebar = () => {
        setSidebarToggled(sidebarToggled => !sidebarToggled)
    }

    return (
        <>
            <aside className={`
                fixed h-[100dvh] overflow-hidden lg:relative w-11/12 max-w-[20rem] md:w-80 transition-all  bg-white dark:bg-gray-950 border-r border-r-gray-100 dark:border-r-gray-900 flex lg:transition-none ease-linear
                ${sidebarToggled?"":"-translate-x-full lg:-translate-x-0"}
            `}>
                <nav className="w-[4.2rem] p-2 border-r border-r-gray-100 dark:border-r-gray-900 flex flex-col justify-between gap-5 items-center">
                    <div className="flex w-full pb-2 border-b border-b-gray-100 dark:border-b-gray-900">
                        <a href="#" className="bg-blue-600 w-full aspect-square rounded-md flex items-center justify-center text-white">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1" />
                            </svg>
                        </a>
                    </div>
                    <ul className="flex flex-col w-full gap-4 flex-1">
                        <li className="flex w-full">
                            <a href="#" className="text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 w-full flex items-center justify-center aspect-square rounded-md">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                                </svg>
                            </a>
                        </li>
                        <li className="flex w-full">
                            <a href="#" className="text-gray-700 dark:text-gray-300 w-full flex items-center justify-center aspect-square rounded-md hover:text-gray-900 dark:hover:text-gray-100">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                                </svg>
                            </a>
                        </li>
                        <li className="flex w-full">
                            <a href="#" className="text-gray-700 dark:text-gray-300 w-full flex items-center justify-center aspect-square rounded-md hover:text-gray-900 dark:hover:text-gray-100">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                </svg>
                            </a>
                        </li>
                        <li className="flex w-full">
                            <a href="#" className="text-gray-700 dark:text-gray-300 w-full flex items-center justify-center aspect-square rounded-md hover:text-gray-900 dark:hover:text-gray-100">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                        <path d="M9 4.025A7.5 7.5 0 1 0 16.975 12H9V4.025Z" />
                                        <path d="M12.5 1c-.169 0-.334.014-.5.025V9h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 12.5 1Z" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="min-h-max w-full">
                        <button className="outline-none flex items-center justify-center aspect-square w-full rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3" />
                            </svg>
                        </button>
                    </div>
                </nav>
                <div className="flex-1 p-2">
                    <nav className="flex flex-col gap-4">
                        <div className="pt-3 pb-3 border-b border-b-gray-100 dark:border-b-gray-900">
                            <form className="w-full relative">
                                <span className="absolute left-3 inset-y-2 flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </span>
                                <input type="search" placeholder="Type something" className="w-full outline-none rounded-md text-gray-700 dark:text-gray-300 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:bg-gray-50 dark:focus:bg-gray-950 pl-10 pr-4 py-2.5" />
                            </form>
                        </div>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#" className="flex items-center gap-x-3 px-4 py-2.5 rounded-md text-gray-700 dark:text-gray-300">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5h6M9 8h6m-6 3h6M4.996 5h.01m-.01 3h.01m-.01 3h.01M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                                    </svg>
                                    Tasks
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-x-3 px-4 py-2.5 rounded-md text-gray-700 dark:text-gray-300">
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z" />
                                    </svg>
                                    Calendar
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-x-3 px-4 py-2.5 rounded-md text-gray-700 dark:text-gray-300">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.046 3.59-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.77c.439 2.344 2.383 2.587 2.599 3.76.11.586.22 1.171-.309 1.271L5 17.101c-.529.1-.639-.488-.749-1.074-.219-1.172 1.506-2.102 1.067-4.447l-.331-1.769a5.338 5.338 0 0 1 4.059-6.22Zm-7.13 4.602a8.472 8.472 0 0 1 2.17-5.048m2.646 13.633A3.472 3.472 0 0 0 13.46 16l.089-.5-6.817 1.277Z" />
                                    </svg>
                                    Notification
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-x-3 px-4 py-2.5 rounded-md text-gray-700 dark:text-gray-300">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4.5 19A3.5 3.5 0 0 1 1 15.5V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5A3.5 3.5 0 0 1 4.5 19Zm0 0H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4.938a1 1 0 0 0-.697.283l-4.238 4.124a1.046 1.046 0 0 0-.164.208C6.986 18.228 6.184 18.705 4.5 19Zm0-4h.01m8.925-12.293 3.536 3.536a1 1 0 0 1 0 1.414L8 16.627v-9.9l4.02-4.02a1 1 0 0 1 1.415 0Z" />
                                    </svg>
                                    Sometext
                                </a>
                            </li>
                        </ul>
                    </nav>
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