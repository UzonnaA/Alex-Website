import Image from "next/image";
import Link from 'next/link'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section>
      {/* Homepage - Section 1  */}
      <div className="bg-[#e5edfc] py-10">

        <div className="max-w-7xl flex flex-col text-center items-center gap-12 px-2
        md:ml-110 md:flex-row md:text-left">
          
          {/* Text Section */}
          <div className="md:w-43/100">
            <p className="text-[var(--mainBlue)] font-bold text-xl mb-8">This is some default text that will change in the future!</p>
            <p className="text-black text-lg mb-12">This is some optional default text that can also be filled!</p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/4 shadow-xl md:ml-15">
            <img
              src="/images/lost-keys_cover.jpg" // Place image in /public/images/
              alt="The Lost Keys of Mechanism"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Homepage - Section 2 */}
      <div className="bg-amber-300 py-10 flex flex-col items-center">
        <p className="text-2xl max-w-170 text-center mb-2 px-2">“Alexander&apos;s work is just amazing. Truly inspiring. Some other text that sounds good for now!”</p>
        <p className="">—Somebody</p>
      </div>

      {/* Homepage - Section 3 */}
      <div className="bg-white py-15 px-2">

        <div className="max-w-7xl md:ml-95 flex flex-col md:flex-row items-center gap-12">

          {/* Image Section */}
          <div className=" shadow-xl md:ml-15">
            <img
              src="/images/alex-portrait.jpg" // Place image in /public/images/
              alt="Alex Alexander Portrait"
              className=""
            />
          </div>
          
          {/* Text Section */}
          <div className="md:w-43/100">
            <p className="text-[var(--mainBlue)] text-2xl mb-1 [font-family:'Cinzel',serif] font-bold">About Alex Alexander</p>
            <p className="text-black text-xl mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, fuga tempora. Accusamus adipisci doloribus cum voluptas itaque, voluptates vel nobis ab, repellat quas at officiis tempora sit, totam enim dicta.</p>
            <Link href="/bio">
              <button className="bg-[var(--mainBlue)] text-white px-4 py-2 text-sm font-semibold cursor-pointer transition transform 
              duration-100 ease-in-out hover:scale-120">FULL BIO</button>
            </Link>

          </div>

          
        </div>
      </div>



    </section>
  )
}
