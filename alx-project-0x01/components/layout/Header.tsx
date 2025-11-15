import Link from "next/link";
import index from "@/pages/users";

const Header: React.FC = () => {
    return(
        <header className="bg-blue-600 text-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h3><Link href="/">Daily Contents</Link></h3>
                <nav>
                    <ul className="flex space-x-6">
                        <li className="hover:underline"><Link href="/">Posts</Link></li>
                        <li className="hover:underline"><Link href="/">Users</Link></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    )
}

export default Header;