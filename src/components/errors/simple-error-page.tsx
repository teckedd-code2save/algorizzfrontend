import Link from "next/link";
import BigHeader from "../texts/big-header-text";

interface SimpleErrorProps{
  page:string
}

export default function SimpleError ({page}:SimpleErrorProps){

    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-3">
        <BigHeader text={`Failed to fetch | ${page} | page. Likely due to connectivity issue`} className="font-extrabold"></BigHeader>
        <div className="flex flex-row gap-4"><Link href="/" className="text-blue-500">Go back home</Link> <span className="text-4xl">Or</span> <Link href="/" className="text-blue-500">Contact Site Owners</Link> </div>
      </div>);
}