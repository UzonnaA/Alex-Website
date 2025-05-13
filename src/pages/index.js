import Image from "next/image";
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
      {/* Section 1 - Homepage */}
      <div className="bg-[#104953] py-10">

        <div className="max-w-7xl ml-110 flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Section */}
          <div className="md:w-43/100">
            <p className="text-amber-100 text-xl mb-8">The 20th anniversary edition of the #1 New York Times bestselling novel beloved by readers the world over, with a new afterword by Khaled Hosseini</p>
            <p className="text-white text-xl mb-12">Since its publication in 2003, The Kite Runner has become a beloved, one-of-a-kind classic of contemporary literature, touching millions of readers, and launching the career of one of America's most treasured writers.</p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/4 shadow-xl ml-15">
            <img
              src="/images/kite-runner-cover.jpeg" // Place image in /public/images/
              alt="The Kite Runner Book Cover"
              className="border-1 border-red-600"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - Homepage */}
      <div className="bg-amber-50 py-10 flex flex-col items-center">
        <p className="text-2xl max-w-170 text-center mb-2">“Hosseini’s writing makes our hearts ache, our stomachs clench, and our emotions reel.”</p>
        <p className="">—USA Today</p>
      </div>



    </section>
  )
}
