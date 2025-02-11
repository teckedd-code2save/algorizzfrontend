import NavRaw from "@/components/navs/NavRaw";

export default function Company() {
  return (
    <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Fixed Navigation Bar */}
        <NavRaw logo="Algorizz">
          Company
        </NavRaw>

      {/* Main Content */}
      <main className="flex-1 pt-16"> {/* Add padding-top to avoid content overlap with the fixed nav */}
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to the Company Page</h1>
      </main>
    </div>
  );
}