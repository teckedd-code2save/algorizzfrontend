import Link from "next/link";

export default function People() {
    return (
        <div className="">
            {/* Title */}
            <div className="flex items-center space-x-2">
                <h4 className="font-semibold  text-lg">The Team</h4>
            </div>

            {/* Avatars */}
            <div className="mt-3 flex -space-x-2 overflow-auto">
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                />
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                 <div className="mt-3">
               
            </div>
            
            </div>

            {/* Link */}
            <Link href="/team" className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    + 2 others
                </Link>
           
        </div>
    );
}