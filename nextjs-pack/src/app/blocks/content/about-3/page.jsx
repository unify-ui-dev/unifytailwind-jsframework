import Image from "next/image"
import Link from "next/link"


const ContentSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
                <div className="flex md:flex-1">
                    <Image src="/images/creative-agency-production.webp" alt="creative agency " width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300 md:py-8">
                    <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                        We help drive your business forward faster
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <a href="tel:+243" className="flex gap-x-6 items-start" rel="noreferer">
                            <span className="p-3 md:p-3.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>
                            <div className="space-y-0.5 flex flex-col flex-1">
                                <p className="text-foreground">Call us</p>
                                <p className="font-semibold text-gray-900 dark:text-white text-lg">+243 xx xx xx xxx</p>
                            </div>
                        </a>
                        <a href="mailto:" className="flex gap-x-6 items-start" rel="noreferer">
                            <span className="p-3 md:p-3.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>
                            </span>
                            <div className="space-y-0.5 flex flex-col flex-1">
                                <p className="text-foreground">Send us a mail</p>
                                <p className="font-semibold text-gray-900 dark:text-white text-lg">+243 xx xx xx xxx</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex">
                        <Link href="#" className="px-5 h-11 flex items-center bg-gray-900 dark:bg-gray-100 rounded-lg text-white dark:text-gray-900">
                            Know more
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentSection