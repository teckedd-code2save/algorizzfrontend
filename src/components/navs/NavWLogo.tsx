import Link from "next/link";

export default function NavWLogo() {
    return (
        <nav className="flex justify-between items-center p-4">
            {/* Company Name */}
            <div className="text-xl font-bold text-gray-900">
                Algorizz
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4 mx-auto">
                <Link href="/dashboard" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    AI
                </Link>
                <Link href="/team" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Robotics
                </Link>
                <Link href="/projects" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    App Dev
                </Link>
                <Link href="/reports" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    ShowCase
                </Link>
            </div>
        </nav>
    );
}