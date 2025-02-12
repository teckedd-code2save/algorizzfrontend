import Link from "next/link";
import React from "react";
import Image from "next/image";


interface NavProps{
    logo :string,
    children: React.ReactNode;
}
export default function NavRaw({logo,children} : NavProps) {
    return (
        <nav className="flex justify-between items-center p-5 font-bold text-2xl" >
             <Link href="/" className="flex items-center">
                <div className="relative w-40 h-16"> {/* Adjust width and height as needed */}
                    <Image
                        src={logo}
                        alt="Company Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>
            
            {children}
            <div>

            </div>
          
        </nav>
    );
}