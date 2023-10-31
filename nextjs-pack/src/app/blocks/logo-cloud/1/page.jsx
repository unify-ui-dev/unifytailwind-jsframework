import Image from "next/image"

const LogoItem = ({ logo, name }) => {
    return (
        <div className="p-4 sm:p-5 rounded-lg border border-gray-100 dark:border-gray-900 group">
            <Image src={logo} width={100} height={60} alt={name} className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" />
        </div>
    )
}

const logos = [
    {
        id: 1,
        logo:"/logos/spotify.png",
        name:"Spotify"
    },
    {
        id: 2,
        logo:"/logos/paypallogo.png",
        name:"Paypal Logo"
    },
    {
        id: 3,
        logo:"/logos/spotify.png",
        name:"Spotify"
    },
    {
        id: 4,
        logo:"/logos/spotify.png",
        name:"Spotify"
    },
    {
        id: 5,
        logo:"/logos/spotify.png",
        name:"Spotify"
    },
]

const LogoCloudSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Trusted by companies like</h1>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {
                        logos.map(
                            logo=>(
                                <LogoItem key={logo.id} {...logo}/>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default LogoCloudSection