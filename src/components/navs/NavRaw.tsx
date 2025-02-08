import Link from "next/link";

export default function NavRaw() {
    return (
        <nav className="flex justify-center space-x-4">
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
                Products
            </Link>
        </nav>
    );
}