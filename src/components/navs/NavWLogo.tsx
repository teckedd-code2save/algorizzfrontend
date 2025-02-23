import Link from "next/link";
import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";

interface NavBarProps{
    children: React.ReactNode;
    leading?: React.ReactNode;
}

export default function NavWLogo({children,leading}:NavBarProps) {
    return (
        <nav className="flex justify-between items-center p-4 pr-2 fixed top-0 left-0 z-50 w-full  shadow-md">
            {leading}

            {/* Navigation Links */}
           {children}

            {/* Trailing Button */}
            <div>
                <Link href="/team" className="flex flex-row items-center mr-3 ">
                  <TextBtn title="Join Us"></TextBtn>
                </Link>
            </div>
        </nav>
    );
}