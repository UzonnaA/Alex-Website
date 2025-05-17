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

      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Official author site of Alex Alexander, writer of The Lost Keys of Mechanism and An Initiated Mechanic's View of the Seven Liberal Arts and Sciences." />

        <meta property="og:title" content="Alex Alexander – Author" />
        <meta property="og:description" content="Explore the esoteric teachings and books of Alex Alexander, focused on Mechanism and the Seven Liberal Arts." />
        <meta property="og:url" content="https://alexalexander.top" />
        <meta property="og:type" content="website" />

        <title>Alex Alexander – Author</title>
      </head> 






      {/* Homepage - Section 1  */}
      <div className="bg-[#e5edfc] py-10">

        <div className="max-w-7xl flex flex-col text-center items-center gap-12 px-2
        md:ml-110 md:flex-row md:text-left">
          
          {/* Text Section */}
          <div className="md:w-43/100 space-y-8">
            <p className="text-[var(--mainBlue)] font-bold text-xl ">Discover the hidden wisdom behind the rites of Mechanism.</p>
            <p className="text-black text-lg ">This book, titled <span className="font-bold">The Lost Keys of Mechanism</span>, is written for initiated Mechanics. It has been prepared in the spirit of brotherhood — in the spirit of friendship, truth, and love — with the purpose of shedding light on the esoteric or hidden teachings found within some of the rituals of Mechanism.</p>

            <Link href="/books">
              <button className="bg-[var(--mainBlue)] text-white px-4 py-2 text-sm font-semibold cursor-pointer transition transform 
              duration-100 ease-in-out hover:scale-105">LEARN MORE</button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/4 shadow-xl md:ml-15">
            {/* <img
              src="/images/lost-keys_cover.jpg" // Place image in /public/images/
              alt="The Lost Keys of Mechanism"
              className=""
            /> */}
            <div className="">
              <Image
                src="/images/lost-keys_cover.jpg"
                alt="The Lost Keys of Mechanism"
                width={1000}
                height={1463}
                className=""
              />
            </div>

            
          </div>
        </div>
      </div>

      {/* Homepage - Section 2 */}
      <div className="bg-amber-300 py-10 flex flex-col items-center">
        <p className="text-2xl max-w-170 text-center mb-2 px-2">&ldquo;A unique read that encourages individuals to seek answers in a more grounded yet practical way&rdquo;</p>
        <p className="text-gray-500">—The Moving Words</p>
      </div>

      {/* Homepage - Section 3 */}
      <div className="bg-white py-15 px-2">

        <div className="max-w-7xl md:ml-95 flex flex-col md:flex-row items-center gap-12">

          {/* Image Section */}
          <div className=" shadow-xl md:ml-15">
            {/* <img
              src="/images/alex-portrait.jpg" // Place image in /public/images/
              alt="Alex Alexander Portrait"
              className=""
            /> */}

            <div className="">
              <Image
                src="/images/alex-portrait.jpg"
                alt="Alex Alexander"
                width={384}
                height={512}
                className=""
              />
            </div>
          </div>
          
          {/* Text Section */}
          <div className="md:w-43/100">
            <p className="text-[var(--mainBlue)] text-2xl mb-1 [font-family:'Cinzel',serif] font-bold">About Alex Alexander</p>
            <p className="text-black text-xl mb-3">A Canadian author and philosophical thinker whose work explores the symbolic teachings and esoteric wisdom of the Mechanics Lodge. Drawing from decades of experience as both an initiated Mechanic and a hands-on engineer, his books uncover hidden knowledge and connect ancient educational traditions to modern spiritual and intellectual growth.</p>
            <Link href="/bio">
              <button className="bg-[var(--mainBlue)] text-white px-4 py-2 text-sm font-semibold cursor-pointer transition transform 
              duration-100 ease-in-out hover:scale-105">FULL BIO</button>
            </Link>

          </div>

          
        </div>
      </div>



    </section>
  )
}
