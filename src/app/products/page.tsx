import TextBtn from "@/components/buttons/text-btn-icon";
import ProductCardTextOverlay from "@/components/cards/product-card-textoverlay";
import NavMain from "@/components/navs/nav-main";
import Link from "next/link";
import SimpleError from "@/components/errors/simple-error-page";
import { routes } from "@/lib/routes";


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

    return <SimpleError page="Products"></SimpleError>;
  }
  const products: Product[] = await res.json();
  console.log(products)

  return (
    <div className="h-screen  w-screen text-white ">
        
        {(() => {                    
                   

                    const subnav = (
                      <div className="flex space-x-4 mx-auto font-medium text-gray-100">
                        <Link href={routes.products} className="px-3 py-1 hover:text-sm  hover:rounded-full hover:border-[0.4px]  transition-all">
                            Lingua Flow
                        </Link>
                        <Link href={routes.products} className="px-3 py-1 hover:text-sm  hover:rounded-full hover:border-[0.4px]  transition-all">
                            Inventory Vision
                        </Link>
                        <Link href={routes.products}className="px-3 py-1 hover:text-sm  hover:rounded-full hover:border-[0.4px]  transition-all">
                            eHealth
                        </Link>
                        <Link href={routes.products} className="px-3 py-1 hover:text-sm  hover:rounded-full hover:border-[0.4px]  transition-all">
                            Education
                        </Link>
                        <Link href={routes.products} className="px-3 py-1 hover:text-sm  hover:rounded-full hover:border-[0.4px]  transition-all">
                            Finance
                        </Link>
                    </div>
                    );

                  return <NavMain trailing={(<></>)} subnav={subnav}>
                    <></>
                    {/* <BigHeader text="Products" className="text-5xl font-bold"></BigHeader> */}
              
                  </NavMain>
                })()
          
             }
              {
              products.length === 0 ? (
                <p className="text-center text-gray-300">
                  No product opportunities available at the moment.
                </p>
              ) : 
              (
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  gap-5 justify-around  pt-[50px] px-[130px] overflow-y-auto">
                {            
                products.map((product) => (
                  <div key={product.id} className="w-full">
                    <ProductCardTextOverlay product={product} iconStyle="bg-[#5754AD] rounded-full p-3" className="justify-start border border-[0.8px] border-[#2D2D2D] rounded-md bg-gradient-to-r  from-[#5754AD] to-white from-[#5754AD]">

                    </ProductCardTextOverlay>

                  </div>
                ))}
              </div>
              )}
              <footer className="w-full flex flex-row pt-6 gap-8 items-start justify-center h-20 min-h-[120px]">
                <div className="flex flex-col">
                  <TextBtn title="Careers" className="" />
                </div>
               </footer>
      </div>
  );
}