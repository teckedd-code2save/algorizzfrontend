import TextBtn from "@/components/buttons/text-btn-icon";
import SimpleError from "@/components/errors/simple-error-page";
import NavMain from "@/components/navs/nav-main";
import BigHeader from "@/components/texts/big-header-text";
import Link from "next/link";
import { apiBaseUrl, routes } from "@/lib/routes";


// Define the Person type based on your User entity
type Person = {
  id: string;
  email: string;
  name?: string | null; // Optional as per your schema (String?)
  title?: string | null; // Optional as per your schema (String?)
  createdAt: string;
  updatedAt: string;
  type: "Executive" | "Manager" | "Customer" | "Applicant"; // Assuming UserType is an enum; adjust if it’s different
  career?: Career[] // Simplified Career relation
};



async function fetchPeople() {
  try {
   const res = await fetch(`${apiBaseUrl}/careers`, {
     cache: 'no-store', // Ensure fresh data
   });

   if (!res.ok) {
     return null;
   }

   return await res.json();
 } catch (error) {
   console.error(`failed:`, error);
    return null;
   }
 }

// Reusable PersonCard component
function PersonCard({ person, className = "", iconStyle = "" }: { person: Person; className?: string; iconStyle?: string }) {
  return (
    <div className={`flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm bg-white ${className}`}>
      <h3 className="text-xl font-semibold text-gray-800">{person.name || "Anonymous Visionary"}</h3>
      <p className="text-md text-gray-600 italic">{person.title || "Team Member"}</p>
      <p className="text-sm text-gray-500 mt-2">
        {person.career && person.career.length > 0
          ? `Contributing expertise in ${person.career[0].title}.`
          : "A key contributor to Serendepify’s mission."}
      </p>
    </div>
  );
}

// Server-side fetch in an async component
export default async function Company() {
  // Fetch team members from the NestJS backend
  const res = await fetchPeople();
    if (res === null) {
      return <SimpleError page="People"></SimpleError>;
    }

  if (!res.ok) {
    return <SimpleError page="Company"></SimpleError>;
  }
  const people: Person[] = await res.json();

  return (
    <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      

      {(() => {  
      const leading = (
                      <Link href={routes.home}>
                        <BigHeader text="Serendepify" className="font-extrabold"></BigHeader>
                      </Link>
                      
                    );
      return <NavMain leading={leading}>
           <BigHeader text="The Narrative." className="text-5xl font-bold" />
         </NavMain>
       })()
          
      }

      {/* Main Content */}
      <div className="w-full h-full px-[250px] pt-16 overflow-y-auto">
        <div className="intro flex flex-col h-auto min-h-[500px] p-2">
          <BigHeader text="Our Essence" className="" />
          <p className="text-lg text-gray-500">
            At Serendepify, we are architects of innovation, seamlessly blending MLOps and DevOps
            solutions to empower a sustainable future. With expertise in software development,
            computer vision, and text-to-speech technologies, we craft intelligent systems that
            redefine possibility. Our mission is to democratize access to cutting-edge tools
            while building solutions that nurture a greener world.
          </p>
        </div>

        <div className="how flex flex-col h-auto min-h-[500px] p-2">
          <BigHeader text="How We Began" className="" />
          <p className="text-lg text-gray-500">
            Serendepify was born from a spark of zeal—a relentless drive to harness technology for
            good. What began as a vision among pioneers has grown into a force for progress,
            rooted in the belief that innovation should serve both humanity and the planet.
          </p>
        </div>

        <div className="why flex flex-col h-auto min-h-[500px] p-2">
          <BigHeader text="Why We Exist" className="" />
          <p className="text-lg text-gray-500">
            In a world accelerating toward technological frontiers, we refuse to stand still.
            Serendepify exists to bridge gaps, break barriers, and deliver solutions that empower
            all—ensuring no one is left behind in the rush of progress.
          </p>
        </div>

        <div className="where flex flex-col h-auto min-h-[500px] p-2">
          <BigHeader text="Where We’re Headed" className="" />
          <p className="text-lg text-gray-500">
            Our journey is just beginning. Serendepify is poised to lead the vanguard of AI and
            software engineering, crafting systems that power a sustainable tomorrow while
            inspiring global impact. We are here to stay, and our sights are set on the horizon.
          </p>
        </div>

        {/* People Section */}
        <div className="people flex flex-col h-auto min-h-[500px] p-2">
          <BigHeader text="Our Visionaries" className="" />
          {people.length === 0 ? (
            <p className="text-lg text-gray-500">
              Our team is growing—stay tuned to meet the brilliant minds shaping Serendepify.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {people.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                  className="hover:shadow-md transition-shadow"
                  iconStyle="object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-row pt-6 gap-8 items-start justify-center h-20 min-h-[120px]">
        <div className="flex flex-col">
          <TextBtn title="Careers" className="" />
        </div>
      </footer>
    </div>
  );
}