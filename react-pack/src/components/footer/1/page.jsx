
const FooterItem = ({ text, link }) => {
    return (
        <li>
            <a href={link} className="duration-200 hover:text-blue-600 dark:hover:text-blue-500">
                {text}
            </a>
        </li>
    )
}

const FooterBlockItem = ({ title, items }) => {
    return (
        <div className="space-y-5">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {title}
            </h1>
            <ul className="space-y-3">
                {
                    items.map(item=>(
                        <FooterItem key={item.id} {...item}/>
                    ))
                }
            </ul>
        </div>
    )
}

const footerBlocks = [
    {
        id: 1,
        title: "Navigation",
        items: [
            {
                id: 1,
                text: "Home",
                link: "#"
            },
            {
                id: 2,
                text: "About",
                link: "#"
            },
            {
                id: 3,
                text: "Contact",
                link: "#"
            },
        ]
    },
    {
        id: 2,
        title: "Services",
        items: [
            {
                id: 1,
                text: "Web design",
                link: "#"
            },
            {
                id: 2,
                text: "Marketing",
                link: "#"
            },
            {
                id: 3,
                text: "Web Development",
                link: "#"
            },
        ]
    },
    {
        id: 3,
        title: "Products",
        items: [
            {
                id: 1,
                text: "Unify Tailwind",
                link: "#"
            },
            {
                id: 2,
                text: "Unify Uno",
                link: "#"
            },
            {
                id: 3,
                text: "Tailset Builder",
                link: "#"
            },
        ]
    },
]


const FooterBlock = () => {
    return (
        <footer className="pt-16 md:pt-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="w-full text-gray-700 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8 pb-4 border-b border-b-gray-200 dark:border-b-gray-800">
                    <div className="flex">
                        <a href="#">
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-indigo-400 font-bold text-2xl">U</span>
                            Unify-Ui
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span>Lubumbashi-RDC</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                        <span>+243 ......</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        <span>info@dcssarl</span>
                    </div>
                </div>
                <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10 text-gray-700 dark:text-gray-300">
                    {
                        footerBlocks.map(footerBlock=>(
                            <FooterBlockItem key={footerBlock.id} {...footerBlock}/>
                        ))
                    }
                    <div className="space-y-5 col-span-2 md:col-span-3 lg:col-span-1">
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Subscribe to our newsletter
                        </h1>
                        <p className="max-w-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis ex temporibus
                        </p>
                        <form action className="grid w-full relative max-w-xl">
                            <div className="flex flex-col gap-3 w-full relative">
                                <input type="email" className="w-full outline-none px-3 py-3 rounded-md bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" placeholder="johndoe@gmail.com" />
                                <button className="w-full py-3 sm:py-0 sm:w-max sm:absolute sm:right-1 sm:inset-y-1 px-4 text-sm flex sm:items-center justify-center outline-none bg-blue-600 text-white rounded-md">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700 dark:text-gray-300">
                    <div className="flex text-center sm:text-left sm:min-w-max">
                        <p> © 2023 UnifyUI. All right reserved </p>
                    </div>
                    <div className="flex justify-center sm:justify-end w-full gap-3">
                        <a href="#" aria-label="social link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="social link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="social link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="social link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterBlock