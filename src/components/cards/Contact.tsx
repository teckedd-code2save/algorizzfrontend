import { Mail, Phone } from "lucide-react";
import Link from "next/link";

interface ContactCardProps {
  email: string;
  phone: string;
}

export default function ContactCard({ email, phone }: ContactCardProps) {
  return (
    <div className="p-4  rounded-lg shadow-sm">
    {/* Title */}
        <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-slate-900  text-lg">Contact</h4>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <Link href={`mailto:${email}`} className="flex items-center gap-2 text-blue-500 hover:underline">
            <Mail className="w-5 h-5" />
            {email}
        </Link>
        <Link href={`tel:${phone}`} className="flex items-center gap-2 text-blue-500 hover:underline">
            <Phone className="w-5 h-5" />
            {phone}
        </Link>
        </div>

    </div>
  );
}
