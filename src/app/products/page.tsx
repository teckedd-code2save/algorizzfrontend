import NavRaw from "@/components/navs/NavRaw";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  description: string;
  url: string;
  domain: Domain[];
  createdAt: string;
  updatedAt: string;
};

enum Domain {
  Tech,
  Ecommerce,
  EHealth,
  Finance,
  AI,
  Management,
  Art,
  Education
}

export default async function Products() {
  // Fetch data from your NestJS backend
  const res = await fetch("http://localhost:8000/algorizz/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products: Product[] = await res.json();

  return (
    <div className="min-h-screen  text-white ">
      <div className="container mx-auto px-4">
        <NavRaw logo="/images/algorizzlogo.svg">
          Products
        </NavRaw>
        {products.length === 0 ? (
          <p className="text-center text-gray-300">
            No product opportunities available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-300 mb-2">
                  <strong>Description:</strong> {product.description}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Link:</strong> {product.url}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Created Date:</strong>{" "}
                  {new Date(product.createdAt).toLocaleDateString()}
                </p>
                {product.updatedAt && (
                  <p className="text-gray-300 mb-2">
                    <strong>Updated Date:</strong>{" "}
                    {new Date(product.updatedAt).toLocaleDateString()}
                  </p>
                )}
                <p className="text-gray-300">{product.description}</p>
                <Link
                  href={`/products/${product.id}`} // Link to a detailed product page
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