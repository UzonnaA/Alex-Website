import Link from 'next/link'

const Header = () => {
    return (
        <section>
            <div className="flex justify-center bg-[#125561] text-7xl py-4 pt-12 [font-family:'Cinzel',serif] font-medium text-white">Alex Alexander</div>
            <div className="bg-black py-1 flex justify-center gap-20">
                <Link href="/" className="text-yellow-100 hover:text-white">
                    HOME
                </Link>

                <Link href="/books" className="text-yellow-100 hover:text-white">
                    BOOKS
                </Link>

                <Link href="/bio" className="text-yellow-100 hover:text-white">
                    BIO
                </Link>
            </div>
        </section> 
        
     );
}
 
export default Header;