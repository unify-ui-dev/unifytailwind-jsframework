import { useState } from 'react'

const navItems = [
    {
        id: 1,
        isActive: true,
        text: "Home",
        link: "#"
    },
    {
        id: 2,
        isActive: false,
        text: "Portfolio",
        link: "#"
    },
    {
        id: 3,
        isActive: false,
        text: "Blog",
        link: "#"
    },
    {
        id: 4,
        isActive: false,
        text: "About",
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
            <header className="sticky left-0 top-0 w-full flex items-center h-20 bg-white border-b border-b-gray-200 dark:bg-gray-950 dark:border-b-gray-800 z-40">
                <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="w-full flex items-center lg:hidden">
                        <button onClick={() => { toggleNavbar() }} aria-label="toggle navbar" className="outline-none border-r border-r-gray-200 dark:border-r-gray-800 pr-3 relative py-3 children:flex">
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
                    <div className={`
                        top-full absolute left-0 bg-white dark:bg-gray-950 dark:lg:bg-transparent
                         lg:flex w-full ease-linear duration-300
                        lg:relative lg:bg-transparent border-b border-b-gray-200 dark:border-b-gray-800 lg:border-b-0
                        ${openNavbar ? "" : "invisible opacity-0 lg:visible lg:opacity-100"}
                    `}>
                        <ul className=" px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-y-6 lg:gap-x-5 text-gray-700 dark:text-gray-300 py-4 lg:py-0">
                            {
                                navItems.map(item => (
                                    <li key={item.id}>
                                        <a href={item.link} className={`
                                            relative py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg
                                            ${item.isActive ? "after:bg-gray-600 after:w-4" : ""}
                                        `}>
                                            {item.text}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex items-center flex-1">
                        <a href="#" className="flex items-center gap-x-0.5 text-gray-800 dark:text-gray-200">
                            <span className="bg-gray-700 dark:bg-gray-800 text-white px-4 py-1.5 rounded-lg">R</span>
                            <span aria-hidden="true" className="hidden sm:flex">doe</span>
                        </a>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5 sm:gap-x-2 w-full text-gray-700 dark:text-gray-300">
                        <a href="#" target="_blank" className="duration-200 ease-linear hover:text-gray-800 dark:hover:text-gray-100">
                            <span className="sr-only">facebook</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                        <a href="#" target="_blank" className="duration-200 ease-linear hover:text-gray-800 dark:hover:text-gray-100">
                            <span className="sr-only">Instagram</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                        </a>
                        <a href="#" target="_blank" className="duration-200 ease-linear hover:text-gray-800 dark:hover:text-gray-100">
                            <span className="sr-only">Twitter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                        <a href="#" target="_blank" className="duration-200 ease-linear hover:text-gray-800 dark:hover:text-gray-100">
                            <span className="sr-only">github</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
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
            <section className="py-8 ">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <div className="mx-auto text-center max-w-xl">
                        <h1 className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-white after:absolute
                            after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-800 dark:after:bg-gray-100 after:w-4">
                            Roy Doe doe
                        </h1>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
                        <div className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                            <h1 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white">
                                Web designer based in Lubumbashi-DRC
                            </h1>
                            <div className="text-gray-700 dark:text-gray-300 space-y-3 mx-auto max-w-2xl lg:max-w-none">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <a href="#" className="px-6 h-11 flex items-center rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm transition ease-linear hover:bg-gray-900">Hire me</a>
                            </div>
                            <div className="grid grid-cols-3 w-full">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semiboldtext-gray-800 dark:text-gray-200">2years</h2>
                                    <span className="text-gray-600">Experience</span>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semiboldtext-gray-800 dark:text-gray-200">+10</h2>
                                    <span className="text-gray-600">Projects</span>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-display font-semiboldtext-gray-800 dark:text-gray-200">90%</h2>
                                    <span className="text-gray-600">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-full relative">
                                <span className="absolute inset-x-0 top-16 bottom-0 rounded-lg scale-[1.04]  bg-gradient-to-b from-gray-200 dark:from-gray-900" />
                                <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
                                <img src="/images/dev-with-c.webp" width={1240} height={1376} alt="Developer with laptop smile" className="relative w-full h-auto max-h-96 lg:max-h-[26rem]" />
                            </div>
                        </div>
                        <div className="space-y-3 lg:space-y-6">
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800  dark:text-gray-200 text-lg">Smart Skills</span>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800  dark:text-gray-200 text-lg">Smart Skills</span>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">Smart Skills</span>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}