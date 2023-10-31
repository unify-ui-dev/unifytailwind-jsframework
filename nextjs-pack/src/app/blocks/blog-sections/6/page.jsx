import Image from "next/image"
import Link from "next/link"


const BlogCard = ({ cover, title, sumary, tags }) => {
    return (
        <Link href="#" className="bg-white h-full dark:bg-gray-900 border border-gray-600 dark:border-gray-800 flex flex-col p-6 space-y-4">
            <Image alt="banner image" className="w-full aspect-video object-cover relative" src={cover} width={1263} height={1291} />
            <div className="flex flex-col space-y-4">
                <h1 className="text-gray-900 dark:text-white font-semibold text-2xl lg:text-3xl">{title}</h1>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                    {sumary}
                </p>
                <div className="flex flex-wrap gap-3 w-full">
                    {
                        tags.map(tag=>(
                            <span key={tag.id} className={`px-2 ${tag.color_class}`}>
                                {tag.text}
                            </span>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}

const posts = [
    {
        id: 1,
        cover: "/images/working-on-housing-project.jpg",
        title: "How to Sructure your reactJs Application like a Legend ",
        sumary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt nam, nihil earum animi ducimus exercitationem facilis explicabo dicta illum delectus, ipsum cum unde enim deleniti repellat. Ipsum, vitae doloremque.",
        tags: [
            {
                id:1,
                color_class:"bg-sky-600 text-white",
                text:"ReactJS"
            },
            {
                id:2,
                color_class:"bg-yellow-300 text-gray-800",
                text:"JavaScript"
            },
        ]
    },
    {
        id: 2,
        cover: "/images/working-on-housing-project.jpg",
        title: "How to Sructure your reactJs Application like a Legend ",
        sumary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt nam, nihil earum animi ducimus exercitationem facilis explicabo dicta illum delectus, ipsum cum unde enim deleniti repellat. Ipsum, vitae doloremque.",
        tags: [
            {
                id:1,
                color_class:"bg-sky-600 text-white",
                text:"ReactJS"
            },
            {
                id:2,
                color_class:"bg-sky-600 text-white",
                text:"TailwindCSS"
            },
        ]
    },
]


const BlogSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start text-center md:text-left md:justify-between">
                    <div className="text-center space-y-6 max-w-2xl mx-auto md:mx-0 md:text-left">
                        <div className="text-center md:text-left md:max-w-lg space-y-5">
                            <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-sky-700 dark:before:bg-sky-600 text-sky-700 dark:text-sky-500">
                                Our latest news
                            </span>
                            <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">From our latest Blog Post</h2>
                        </div>
                    </div>
                    <div className>
                        <Link href="#" className="px-6 py-3 border border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3">
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    {
                        posts.map(post=>(
                            <BlogCard key={post.id} {...post}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogSection