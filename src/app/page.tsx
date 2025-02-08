import Contact from "@/components/cards/Contact";
import People from "@/components/cards/People";
import NavWLogo from "@/components/navs/NavWLogo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <NavWLogo />
      </nav>
      
      {/* Main Content */}
      <main className="flex flex-col flex-1 items-center justify-center bg-gray-50 mt-16 p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the home of pure algorithmic Rizz</h1>
        <p className="text-lg text-gray-600 mt-4">Bringing you cutting-edge AI and tech insights with style.</p>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 flex gap-6 items-center justify-center shadow-inner border-t border-gray-200 flex-nowrap">
        <div className="flex items-center gap-2 text-gray-700 hover:underline">
          <People />
        </div>
        <Link className="flex items-center gap-2 text-gray-700 hover:underline" href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
          About
        </Link>
        <div className="flex items-center gap-2 text-gray-700 ">
        <Contact email="contact@example.com" phone="+1234567890" />
        </div>
       
      </footer>
    </div>
  );
}
