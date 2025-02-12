import NavRaw from "@/components/navs/NavRaw";
import Link from "next/link";

type User = {
  id: string;
  email: string;
  name: string | null;
  title: string | null;
  password: string;
  createdAt: string;
  updatedAt: string;
  type: string;
};

export default async function Team() {
  // Fetch data from your NestJS backend
  const res = await fetch("http://localhost:8000/algorizz/people");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const users: User[] = await res.json();

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4">
            <NavRaw logo="/images/algorizzlogo.svg">
            The Team
            </NavRaw>        {users.length === 0 ? (
          <p className="text-center text-gray-300">No team members found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {user.name || "Anonymous"}
                </h2>
                <p className="text-gray-300 mb-2">
                  <strong>Title:</strong> {user.title || "No title provided"}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Role:</strong> {user.type}
                </p>
                <Link
                  href={`/team/${user.id}`} // Link to a detailed user page
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}