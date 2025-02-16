import Link from "next/link";
import Image from "next/image";

export default function NavWLogo() {
    return (
        <nav className="flex justify-between items-center p-4 pr-2 fixed top-0 left-0 z-50 w-full  shadow-md">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <div className="relative w-40 h-16 hidden"> {/* Adjust width and height as needed */}
                    <Image
                        src="/images/algorizzlogo.svg"
                        alt="Company Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h4 className="font-bold text-3xl">Algorizz</h4>
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
                  <h4 
                  className="px-8 py-3 text-sm text-blue-700 bg-white font-bold h-full rounded-sm shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-400 ease-in-out cursor-pointer">
                    Join Us
                  </h4>
                </Link>
            </div>
        </nav>
    );
}