import ProductCard from "@/components/cards/product-card";
import NavRaw from "@/components/navs/NavRaw";
import NavWLogo from "@/components/navs/NavWLogo";
import ArrowIcon from "@/components/svgs/arrow-icon-svg";
import BigHeader from "@/components/texts/big-header-text";
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
  console.log(products)

  return (
    <div className="h-screen  w-screen text-white ">
        
        {(() => {                    
                    const leading = (
                      <div className="flex flex-row gap-5  items-center">
                        <Link href="/" className="rotate-180">
                          <ArrowIcon></ArrowIcon>
                        </Link>
                        <BigHeader text="Products"></BigHeader>

                      </div>
                    );

                  return <NavWLogo leading={leading}>
                   <div className="flex space-x-4 mx-auto font-medium text-gray-100">
                      <Link href="/company" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          I.Commerce
                      </Link>
                      <Link href="/careers" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Fintech
                      </Link>
                      <Link href="/products" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          E.Health
                      </Link>
                      <Link href="/solutions" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Management
                      </Link>
                      <Link href="/solutions" className="px-3 py-2 hover:font-bold hover:text-[#5754AD] transition-all">
                          Art
                      </Link>
                    </div>
                  </NavWLogo>
                })()
          
             }
              {
              products.length === 0 ? (
                <p className="text-center text-gray-300">
                  No product opportunities available at the moment.
                </p>
              ) : 
              (
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  gap-5 justify-around mt-20 p-5">
                {            
                products.map((product) => (
                  <div key={product.id} className="w-full">
                    <ProductCard product={product} iconStyle="bg-[#5754AD] rounded-full p-3" className="justify-start border border-[0.8px] border-[#2D2D2D] rounded-md bg-gradient-to-r  from-[#5754AD] to-white from-[#5754AD]">

                    </ProductCard>

                  </div>
                ))}
              </div>
              )}
      </div>
  );
}