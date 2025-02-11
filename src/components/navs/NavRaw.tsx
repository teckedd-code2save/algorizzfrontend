import Link from "next/link";
import React from "react";

interface NavProps{
    logo :string,
    children: React.ReactNode;
}
export default function NavRaw({logo,children} : NavProps) {
    return (
        <nav className="flex justify-between items-center p-5 font-bold text-2xl" >
            <Link href="/" className="text-xl font-bold text-blue-900">
                {logo}
            </Link>
            {children}
            <div>

            </div>
          
        </nav>
    );
}