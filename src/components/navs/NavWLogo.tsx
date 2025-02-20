import Link from "next/link";
import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";

export default function NavWLogo() {
    return (
        <nav className="flex justify-between items-center p-4 pr-2 fixed top-0 left-0 z-50 w-full  shadow-md">
            {/* Logo */}
            <Link href="/" className="flex items-center">
               <Image src="/images/algorizz-logo.svg" className="object-cover" width={200} height={200} alt="Algorizz Logo" />
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-4 mx-auto font-medium text-gray-100">
                <Link href="/company" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                    Company
                </Link>
                <Link href="/careers" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                    Careers
                </Link>
                <Link href="/products" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                    Products
                </Link>
                <Link href="/solutions" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                    Solutions
                </Link>
            </div>

            {/* Join Us Button */}
            <div>
                <Link href="/team" className="flex flex-row items-center mr-3 ">
                  <TextBtn title="Join Us"></TextBtn>
                </Link>
            </div>
        </nav>
    );
}