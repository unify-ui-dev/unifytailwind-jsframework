import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ cover, published_date, author, title, sumary }) => {
    return (
        <div className="rounded-md flex flex-col bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/60 dark:shadow-none border border-gray-200/70 dark:border-gray-800/80 p-4">
            <div className="relative">
                <Image src={cover} alt="illustration" width={1300} height={800} className="w-full rounded aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900" />
                <div className="absolute inset-x-2 bottom-2 px-3 py-1.5 rounded-sm bg-gray-800/80 backdrop-filter backdrop-blur-sm">
                    <p className="font-semibold text-gray-100">By {author}</p>
                    <p className="text-sm text-gray-300">{published_date}</p>
                </div>
            </div>
            <Link href="#" className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                {title}
            </Link>
            <p className="text-gray-700 dark:text-gray-300 line-clamp-2 my-4">
                {sumary}
            </p>
            <div className="flex flex-1 items-end">
                <Link href="#" className="flex items-center gap-x-2 text-blue-600 dark:text-blue-500">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
const posts = [
    {
        id: 1,
        cover: "/images/working-on-housing-project.jpg",
        published_date: "2022, 10, 20",
        author: "John Doe",
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 2,
        cover: "/images/working-on-housing-project.jpg",
        published_date: "2022, 10, 20",
        author: "John Doe",
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 3,
        cover: "/images/working-on-housing-project.jpg",
        published_date: "2022, 10, 20",
        author: "John Doe",
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 4,
        cover: "/images/working-on-housing-project.jpg",
        published_date: "2022, 10, 20",
        author: "John Doe",
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 5,
        cover: "/images/working-on-housing-project.jpg",
        published_date: "2022, 10, 20",
        author: "John Doe",
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 6,
        cover: "/images/working-on-housing-project.jpg",
        published_date: "2022, 10, 20",
        author: "John Doe",
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
    {
        id: 7,
        cover: "/images/working-on-housing-project.jpg",
        published_date: "2022, 10, 20",
        author: "John Doe",
        title: "You're probably fetching data in the wrong way",
        sumary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum "
    },
]
const BlogSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Our most recent Articles</h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae
                        aspernatur mollitia quos consectetur voluptatibus pariatur
                    </p>
                    <div className="flex justify-center">
                        <Link href="#" className="px-5 py-2.5 rounded-md border border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3">
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        posts.slice(0,6).map(post=>(
                            <BlogCard key={post.id} {...post}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default BlogSection