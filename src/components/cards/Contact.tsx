import { Mail, Phone } from "lucide-react";
import Link from "next/link";

interface ContactCardProps {
  email: string;
  phone: string;
}

export default function ContactCard({ email, phone }: ContactCardProps) {
  return (
    <div className="">
    {/* Title */}
        <div className="flex items-center space-x-2">
            <h4 className="font-semibold  text-lg">Contact</h4>
        </div>
        <div className="flex flex-col justify-start gap-4 py-4">

        <Link href={`mailto:${email}`} className="flex items-center gap-2 text-sm font-mono">
            <Mail className="w-5 h-5" />
            {email}
        </Link>
        <Link href={`tel:${phone}`} className="flex items-center gap-2 text-sm ">
            <Phone className="w-5 h-5" />
            {phone}
        </Link>
        </div>

    </div>
  );
}
