import Link from "next/link";
import BigHeader from "../texts/big-header-text";
import { routes } from "@/lib/routes";

interface NavBarProps{
    children: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    subnav?: React.ReactNode;
}

export default function NavMain({children,leading,trailing,subnav}:NavBarProps) {
    return (
        <nav className="flex flex-col justify-start gap-8 items-center p-4  top-0 left-0 w-full h-auto">
            <div className="flex flex-row justify-between items-center w-full">
                <div>
               {leading ??   (
                      <Link href={routes.home}>
                        <BigHeader text="Serendepify" className="text-2xl font-extrabold"></BigHeader>
                      </Link>
                      
                    )}
                </div>
                

                {/* Navigation Links */}
                {children}

                {/* Trailing Button */}
                <div>
                {trailing}
                </div>           
            </div>  
            {/* if subnav is passed, render it */}
            {subnav && (
                <div className="flex flex-row justify-between items-center w-auto p-1 rounded-full border border-[0.3px] border-gray-500 hover:border-none">
                    {subnav}
                </div>
            )}

        </nav>
    );
}