import NavRaw from "@/components/navs/NavRaw";
import Link from "next/link";

type Career = {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string | null;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export default async function Products() {
  // Fetch data from your NestJS backend
  const res = await fetch("http://localhost:8000/algorizz/careers");
  if (!res.ok) {
    throw new Error("Failed to fetch careers");
  }
  const careers: Career[] = await res.json();

  return (
    <div className="min-h-screen  text-white ">
      <div className="container mx-auto px-4">
        <NavRaw logo="/images/algorizzlogo.svg">
          Products
        </NavRaw>
        {careers.length === 0 ? (
          <p className="text-center text-gray-300">
            No career opportunities available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career) => (
              <div
                key={career.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {career.title}
                </h2>
                <p className="text-gray-300 mb-2">
                  <strong>Company:</strong> {career.company}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Location:</strong> {career.location}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Start Date:</strong>{" "}
                  {new Date(career.startDate).toLocaleDateString()}
                </p>
                {career.endDate && (
                  <p className="text-gray-300 mb-2">
                    <strong>End Date:</strong>{" "}
                    {new Date(career.endDate).toLocaleDateString()}
                  </p>
                )}
                <p className="text-gray-300">{career.description}</p>
                <Link
                  href={`/careers/${career.id}`} // Link to a detailed career page
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}