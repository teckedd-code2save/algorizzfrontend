import Link from "next/link";

export default function NavWLogo() {
    return (
        <nav className="flex justify-between items-center p-4 fixed top-0 left-0 z-50 w-full">
            {/* Company Name */}
            <Link className="text-xl font-bold text-blue-900" href="/">
                Algorizz
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-4 mx-auto font-medium text-white">
                <Link href="/company" className=" px-3 py-2  hover:font-medium hover:font-thin">
                    Company
                </Link>
                <Link href="/careers" className="  px-3 py-2 hover:font-medium hover:font-thin">
                    Careers
                </Link>
                <Link href="/projects" className=" px-3 py-2 hover:font-medium hover:font-thin">
                    Products
                </Link>
                <Link href="/reports" className=" py-2 hover:font-medium hover:font-thin">
                    Solutions
                </Link>
            </div>
            <div>
            <h4 className="px-7 py-2 text-blue-500 font-thin border border-medium border-blue-600 rounded-full shadow-lg font-bold">
                    Join Us
            </h4>
            </div>
        </nav>
    );
}