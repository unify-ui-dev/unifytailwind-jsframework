import "./component.css"



const BlogCard = ({ cover, title, tags}) => {
    return (
        <div className="bg-white h-full dark:bg-gray-950 border border-gray-100 dark:border-gray-900 duration-300 ease-linear hover:border-gray-200 dark:hover:border-gray-800 p-0.5 flex flex-col group">
            <img alt="banner image" className="w-full aspect-video object-cover relative" src={cover} width={1263} height={1291} />
            <div className="px-4 lg:px-6 py-5 lg:py-8">
                <a className="text-gray-900 dark:text-white font-semibold text-2xl lg:text-3xl" href="#">{title}</a>
                <div className="flex flex-wrap gap-x-2 w-full gap-y-3 pt-5">
                    {
                        tags.map((tag, index)=>(
                            <span key={`tag${index}`} className="bg-gray-100 dark:bg-gray-900 text-blue-600 dark:text-gray-200 px-2">
                                {tag}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const posts = [
    {
        id: 1,
        cover: "/images/working-on-housing-project.jpg",
        title: "How to Sructure your reactJs Application like a Legend ",
        tags:[
            "ReactJs","WebDesign", "Web Development"
        ]
    },
    {
        id: 2,
        cover: "/images/working-on-housing-project.jpg",
        title: "How to Sructure your reactJs Application like a Legend ",
        tags:[
            "ReactJs","WebDesign", "Web Development"
        ]
    },
    {
        id: 3,
        cover: "/images/working-on-housing-project.jpg",
        title: "How to Sructure your reactJs Application like a Legend ",
        tags:[
            "ReactJs","WebDesign", "Web Development"
        ]
    },
    {
        id: 4,
        cover: "/images/working-on-housing-project.jpg",
        title: "How to Sructure your reactJs Application like a Legend ",
        tags:[
            "ReactJs","WebDesign", "Web Development"
        ]
    },
]


const BlogSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
                <div className="flex md:justify-between">
                    <div className="text-center space-y-6 max-w-2xl mx-auto md:mx-0 md:text-left">
                        <div className="text-center md:text-left md:max-w-lg space-y-5">
                            <span className="rounded-lg bg-blue-100 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-800 dark:text-gray-100">Blog</span>
                            <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">From our latest Blog Post</h2>
                        </div>
                    </div>
                    <div className>
                        <a href="#" className="px-6 py-3 border border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3">
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 rounded-t-lg">
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