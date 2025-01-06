
export default function ProjectCard(){
  return(
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Featured Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Example Project */}
        <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="https://example.com/project1.jpg"
            alt="E-Commerce Platform"
            className="rounded-t-lg object-cover h-48 w-full"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">E-Commerce Platform</h3>
            <p className="mt-2 text-gray-600">
              A scalable e-commerce platform with modern design.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}