import Link from 'next/link';
import { useRouter } from 'next/router';



const Header = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    const defaultColor = "text-yellow-100 hover:text-white";
    const activeColor = "text-yellow-100 font-bold border-b-2 border-yellow-300 hover:text-white hover:border-white";
    return (
        <section>
            <div className="bg-[#125561] py-6 md:py-4 md:pt-12">
                <div className="px-4 md:px-0 flex justify-center">
                    <p className="text-5xl md:text-7xl [font-family:'Cinzel',serif] font-medium text-white text-center md:text-left">Alex Alexander</p>
                </div>
            </div>
            <div className="bg-black py-1 flex justify-center gap-20">
                <Link href="/" className={currentPath === '/' ? activeColor : defaultColor}>
                    HOME
                </Link>

                <Link href="/books" className={currentPath === '/books' ? activeColor : defaultColor}>
                    BOOKS
                </Link>

                <Link href="/bio" className={currentPath === '/bio' ? activeColor : defaultColor}>
                    BIO
                </Link>
            </div>
        </section> 
        
     );
}
 
export default Header;