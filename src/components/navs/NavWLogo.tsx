import Link from "next/link";
import Image from "next/image";

export default function NavWLogo() {
    return (
        <nav className="flex justify-between items-center p-4 fixed top-0 left-0 z-50 w-full  shadow-md">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <div className="relative w-40 h-16"> {/* Adjust width and height as needed */}
                    <Image
                        src="/images/algorizzlogo.svg"
                        alt="Company Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-4 mx-auto font-medium text-gray-100">
                <Link href="/company" className="px-3 py-2 hover:font-bold hover:text-blue-400 transition-all">
                    Company
                </Link>
                <Link href="/careers" className="px-3 py-2 hover:font-bold hover:text-blue-400 transition-all">
                    Careers
                </Link>
                <Link href="/products" className="px-3 py-2 hover:font-bold hover:text-blue-400 transition-all">
                    Products
                </Link>
                <Link href="/solutions" className="px-3 py-2 hover:font-bold hover:text-blue-400 transition-all">
                    Solutions
                </Link>
            </div>

            {/* Join Us Button */}
            <div>
                <Link href="/team">
                    <h4 className="px-7 py-2 text-sm text-blue-700 font-medium border border-blue-700 rounded-full shadow-lg hover:bg-blue-700 hover:text-gray-900 transition-all cursor-pointer">
                        Join Us
                    </h4>
                </Link>
            </div>
        </nav>
    );
}