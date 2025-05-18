import { useEffect, useState } from "react";


const quotes = [
  {
    text: "A unique read that encourages individuals to seek answers in a more grounded yet practical way.",
    author: "—The Moving Words",
  },
  {
    text: "The Lost Keys of Mechanism offers a great reference guide to many enlightenment seekers.",
    author: "—The Moving Words",
  },
  {
    text: "Through patience, Alexis T. Alexander explains the importance of symbolism, process, and how meanings can get lost.",
    author: "—The Moving Words",
  },
  {
    text: "The book includes illustrations that help readers visualize the fundamental aspects of Mechanism.",
    author: "—The Moving Words",
  },
];

export function QuoteRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(false);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-amber-300 py-10 flex flex-col items-center transition-all overflow-hidden">
        <p
        className={`text-2xl max-w-3xl text-center mb-2 px-4 transition-all duration-500 ease-in-out transform ${
            fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
        >
        &ldquo;{quotes[index].text}&rdquo;
        </p>
        <p
        className={`text-gray-500 transition-all duration-500 ease-in-out transform ${
            fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
        >
        {quotes[index].author}
        </p>
    </div>
    );
}