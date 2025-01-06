import Link from 'next/link'

export default function Hero(){
    return(
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold animate-fade-in">
            A software developer passionate about crafting innovative
            and user-friendly web applications.
          </h1>
          {/*<p className="mt-6 text-lg md:text-2xl animate-slide-in-up">
            A software developer passionate about crafting innovative
            and user-friendly web applications.
          </p>*/}
          <Link
            href="#projects"
            className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition animate-bounce"
          >
            Explore My Work
          </Link>
        </div>
    )
}