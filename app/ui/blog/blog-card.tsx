import { fetchBlogs } from '@/app/lib/data'
import Image from 'next/image'


export default async function BlogCard(){
    const blogs = await fetchBlogs()
    return(
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Recent Blogs</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {/* Blog */}
                {blogs.map((blog) => {
                    return(
                        <div key={blog._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Image
                            src={blog.coverImageUrl}
                            alt="How I Built My Portfolio"
                            className="rounded-t-lg object-cover h-48 w-full"
                            width={50}
                            height={60}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                            <p className="mt-2 text-gray-600">
                                {blog.content}
                            </p>
                            <a
                                href="#"
                                className="mt-4 inline-block text-blue-600 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    )
                    
                })}
                
            </div>
        </div>
    )
}