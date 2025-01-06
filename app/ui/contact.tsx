export default function Contact(){
    return(
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Let’s Work Together!</h2>
            <p className="mt-4 text-lg">
              Interested in collaborating or hiring me? Reach out, and let&apos;s build something amazing!
            </p>
            <a
              href="mailto:john.doe@example.com"
              className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
        </div>
    )
}