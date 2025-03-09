import NavMain from "@/components/navs/nav-main";
import BigHeader from "@/components/texts/big-header-text";
import Link from "next/link";
import { sampleCareers } from "@/lib/data";
import { apiBaseUrl } from "@/lib/routes";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  // Fetch all career IDs from your API (or mock them)
  try {
    const res = await fetch(`${apiBaseUrl}/careers`);
    if (!res.ok) 
        return sampleCareers.map((career: { id: string }) => ({
            id: career.id,
          }));

    const careers = await res.json();
  
  // Return an array of params objects
  return careers.map((career: { id: string }) => ({
    id: career.id,
  }));

  } catch (error) {
    console.error(`failed:`, error);
    return sampleCareers.map((career: { id: string }) => ({
      id: career.id,
    }));
    
  }
  
}

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
  try {

    const res = await fetch(`${apiBaseUrl}/careers/${id}`);
    if (!res.ok) 
      return sampleCareers.find((career) => career.id === id);
    return res.json();
    
  } catch (error) {
    console.error(`failed:`, error);
    return sampleCareers.find((career) => career.id === id);
    
  }
 
}