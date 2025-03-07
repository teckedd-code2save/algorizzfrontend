import NavMain from "@/components/navs/nav-main";
import BigHeader from "@/components/texts/big-header-text";
import Link from "next/link";

type Params = Promise<{ id: string }>;

// Define the props type explicitly for clarity
export default async function CareerPage({ params }: { params: Params }) {
  // Fetch career details based on the ID
  const { id } = await params; 
  const career = await fetchCareerById(id);

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <div className="p-6 w-screen h-screen mx-auto">
      <NavMain
        leading={<Link href="/careers" className="font-bold">All Careers</Link>}
        trailing={<></>}
      >
        <BigHeader text={career.title} className="text-3xl font-bold" />
      </NavMain>

      <div className="flex flex-col mt-8 max-w-md h-auto items-center mx-auto">
        <h2 className="text-lg text-gray-700">{career.company}</h2>
        <p className="mt-4 text-gray-600">{career.description}</p>
        <p className="mt-2">
          <strong>Location:</strong> {career.location}
        </p>
        <p className="mt-1">
          <strong>Start Date:</strong> {career.startDate}
        </p>
        {career.endDate && (
          <p className="mt-1">
            <strong>End Date:</strong> {career.endDate}
          </p>
        )}
        <p className="mt-1 text-gray-500 text-sm">
          Posted on: {new Date(career.createdAt).toLocaleDateString()}
        </p>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}

// Function to fetch career details
async function fetchCareerById(id: string) {
  const res = await fetch(`http://localhost:8000/algorizz/careers/${id}`);
  if (!res.ok) return null;
  return res.json();
}