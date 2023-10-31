import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ cover, published_at, author, title, sumary }) => {
    return (
        <div className="flex flex-col space-y-5">
            <Image src={cover} alt="illustration" width={1300} height={900} className="w-full rounded aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900" />
            <Link href="#" className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                {title}
            </Link>
            <p className="text-gray-700 dark:text-gray-300">
                {sumary}
            </p>
            <div className="flex items-center gap-x-4">
                <Image src={author.avatar} alt width={800} height={800} className="w-10 h-10 object-cover rounded-full" />
                <div>
                    <p className="text-gray-800 dark:text-gray-50 font-semibold">{author.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {published_at}
                    </p>
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
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
                <div className="flex flex-col md:flex-row gap-y-8 items-center text-center md:text-left md:items-start md:justify-between">
                    <div className="text-center space-y-6 max-w-2xl mx-auto md:mx-0 md:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Our most recent Articles</h1>
                        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur
                        </p>
                    </div>
                    <div className>
                        <Link href="#" className="px-5 py-2.5 border border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3">
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 md:gap-10 lg:grid-cols-3 lg:gap-8">
                    {
                        posts.slice(0, 3).map(post => (
                            <BlogCard key={post.id} {...post} />
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default BlogSection