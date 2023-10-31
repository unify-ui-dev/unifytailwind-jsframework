import Image from "next/image"
import Link from "next/link"



const BlogCard = ({ cover, title, sumary, author, published_at }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-5 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/80 ">
            <div className="w-full lg:w-2/5 lg:h-full">
                <Image src={cover} alt="post cover" width={1300} className="rounded aspect-video lg:aspect-auto lg:h-full w-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col space-y-6">
                <Link href="#" className="text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                </Link>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {sumary}
                </p>
                <div className="flex items-center gap-x-4">
                    <img src={author.avatar} alt width={800} className="w-10 h-10 object-cover rounded" />
                    <div>
                        <p className="text-gray-800 dark:text-gray-50 font-semibold">By {author.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {published_at}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const posts = [
    {
        id: 1,
        cover: "/images/working-on-housing-project.jpg",
        published_at: "2 days ago",
        author: {
            name: "John Doe",
            avatar: "/images/sidebiew.webp"
        },
        title: "The only way to write clean ReactJS Code like a pro",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 2,
        cover: "/images/working-on-housing-project.jpg",
        published_at: "2 days ago",
        author: {
            name: "John Doe",
            avatar: "/images/sidebiew.webp"
        },
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 3,
        cover: "/images/working-on-housing-project.jpg",
        published_at: "2 days ago",
        author: {
            name: "John Doe",
            avatar: "/images/sidebiew.webp"
        },
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 4,
        cover: "/images/working-on-housing-project.jpg",
        published_at: "2 days ago",
        author: {
            name: "John Doe",
            avatar: "/images/sidebiew.webp"
        },
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 5,
        cover: "/images/working-on-housing-project.jpg",
        published_at: "2 days ago",
        author: {
            name: "John Doe",
            avatar: "/images/sidebiew.webp"
        },
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 6,
        cover: "/images/working-on-housing-project.jpg",
        published_at: "2 days ago",
        author: {
            name: "John Doe",
            avatar: "/images/sidebiew.webp"
        },
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 7,
        cover: "/images/working-on-housing-project.jpg",
        published_at: "2 days ago",
        author: {
            name: "John Doe",
            avatar: "/images/sidebiew.webp"
        },
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
]



const BlogSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
                <div className="flex flex-col gap-y-8 items-center md:items-start md:flex-row md:justify-between">
                    <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
                        <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">From our latest Blog Post</h2>
                    </div>
                    <div className>
                        <Link href="#" className="px-5 py-2.5 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-blue-600 dark:text-gray-300 flex items-center gap-x-3">
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {
                        posts.slice(0,4).map(post => (
                            <BlogCard key={post.id} {...post} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogSection