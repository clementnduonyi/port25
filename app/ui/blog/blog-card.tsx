export default function BlogCard(){
    return(
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Recent Blogs</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {/* Example Blog */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img
                    src="https://example.com/blog1.jpg"
                    alt="How I Built My Portfolio"
                    className="rounded-t-lg object-cover h-48 w-full"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">How I Built My Portfolio</h3>
                        <p className="mt-2 text-gray-600">
                            Discover how I created my professional portfolio using Next.js and Tailwind CSS.
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                            Read More
                        </a>
                    </div>
              </div>
            </div>
        </div>
    )
}