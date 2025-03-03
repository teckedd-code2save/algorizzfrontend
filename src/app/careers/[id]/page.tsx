export default async function CareerPage({
    params,
  }: {
    params: { id: string };
  }) {
    // Fetch career details based on the ID
    const career = await fetchCareerById(params.id);
  
    if (!career) {
      return <div>Career not found</div>;
    }
  
    return (
      <div className="p-6 max-w-2xl mx-auto border rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">{career.title}</h1>
        <h2 className="text-lg text-gray-700">{career.company}</h2>
        <p className="mt-4 text-gray-600">{career.description}</p>
        <p className="mt-2"><strong>Location:</strong> {career.location}</p>
        <p className="mt-1"><strong>Start Date:</strong> {career.startDate}</p>
        {career.endDate && <p className="mt-1"><strong>End Date:</strong> {career.endDate}</p>}
        <p className="mt-1 text-gray-500 text-sm">Posted on: {new Date(career.createdAt).toLocaleDateString()}</p>
        
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    );
  }
  
  // Function to fetch career details
  async function fetchCareerById(id: string) {
    const res = await fetch(`http://localhost:8000/algorizz/careers/${id}`);
    if (!res.ok) return null;
    return res.json();
  }
  