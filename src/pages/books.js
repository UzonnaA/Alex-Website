import Link from 'next/link'

export default function Books() {
  return (
    // Books by Alexander
    <section className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h2 className="text-3xl font-bold mb-4">Books by Alex Alexander</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10 justify-items-center mx-auto">

        {/* Individual Books and Links */}
        <div className="flex flex-col items-center space-y-4">
          
          {/* Book */}
          <Link href="/books/lost-keys">
            <img
              src="/images/lost-keys_cover.jpg"
              alt="The Lost Keys of Mechanism"
              className="md:w-70 shadow-xl hover:scale-105 transition"
            />
          </Link>

          {/* Text Link */}
          <div className="inline-block">
            <a href="https://www.amazon.ca/Lost-Keys-Mechanism-Alexis-Alexander/dp/B0BNTXPR3Z" 
            className='text-blue-400  hover:border-b-1 hover:border-blue-400'
            target="_blank" rel="noopener noreferrer">Amazon</a>
          </div>
          
        </div>




        {/* Individual Books and Links */}
        <div className="flex flex-col items-center space-y-4">
          
          {/* Book */}
          <Link href="/books/seven-arts">
            <img
              src="/images/seven-arts_cover.jpg"
              alt="An Initiated Mechanic&apos;s View of The Seven Liberal Arts and Sciences"
              className="md:w-70 shadow-xl hover:scale-105 transition"
            />
          </Link>

          {/* Text Link */}
          <div className="inline-block">
            <a href="https://www.amazon.ca/Initiated-Mechanics-Seven-Liberal-Sciences/dp/1665571918" 
            className='text-blue-400  hover:border-b-1 hover:border-blue-400'
            target="_blank" rel="noopener noreferrer">Amazon</a>
          </div>
          
        </div>
      </div>

      <div className="py-10 border-b-1 border-gray-600"></div>
      
    </section>
  )
}



{/* <Link href="/books/lost-keys">
        <button className="bg-[#0e3a5b] text-white px-4 py-2 text-sm font-semibold cursor-pointer transition transform 
        duration-100 ease-in-out hover:scale-120">The Lost Keys</button>
      </Link>
      <Link href="/books/seven-arts">
        <button className="bg-[#0e3a5b] text-white px-4 py-2 text-sm font-semibold cursor-pointer transition transform 
        duration-100 ease-in-out hover:scale-120">The Seven Arts</button>
      </Link> */}