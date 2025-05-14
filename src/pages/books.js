import Link from 'next/link'

export default function Books() {
  return (
    <section className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">Books</h1>
      <p className="text-lg">
        Alex Alexander is....
      </p>
      <Link href="/books/lost-keys">
        <button className="bg-[#0e3a5b] text-white px-4 py-2 text-sm font-semibold cursor-pointer transition transform 
        duration-100 ease-in-out hover:scale-120">The Lost Keys</button>
      </Link>
      <Link href="/books/seven-arts">
        <button className="bg-[#0e3a5b] text-white px-4 py-2 text-sm font-semibold cursor-pointer transition transform 
        duration-100 ease-in-out hover:scale-120">The Seven Arts</button>
      </Link>
    </section>
  )
}