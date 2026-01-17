
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="w-full border-b bg-white">
            <nav className="container mx-auto flex h-16 items-center justify-between px-4">

                <Link href="/" className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-black text-white font-bold">
                        M
                    </span>
                    <span className="text-xl font-semibold tracking-wide text-gray-900">
                        Mini<span className="text-gray-600">Mart</span>
                    </span>
                </Link>


                {/* Nav Links */}
                <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/items"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Items
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/addItems"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Add Items
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/login"
                            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
