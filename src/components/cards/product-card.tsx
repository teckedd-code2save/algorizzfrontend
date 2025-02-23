import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";



interface ProductCardProps {
  className?: string;
  iconStyle?: string;
  product: Product;
}

type Product = {
    id: string;
    title: string;
    description: string;
    url: string;
    domain: Domain[];
    createdAt: string;
    updatedAt: string;
  };

export default function ProductCard({ product,className,iconStyle }: ProductCardProps) {

  return (
        <div key={product.id} className={`flex flex-col gap-4  p-1 pb-2 ${className}`}>
      
            <div className="relative w-full h-80 self-start rounded-sm overflow-hidden">
                <Image
                src={product.url}
                alt="Product Image"
                fill // Fill the parent container
                className="card_img object-cover rounded-lg"
                priority // Preload this image since it's above the fold
                />
            </div>
            {/* Text */}
            <div className="card_body flex flex-col justify-center w-full gap-2 p-2">
                <div className="flex flex-row justify-between w-full gap-2">
                <h2 className="font-bold text-white text-lg">{product.title}</h2>
                <TextBtn title="Read More" className={iconStyle}></TextBtn>
                </div>
                

                <h3 className="font-thin text-gray-300 text-md">{product.description}</h3>
            </div>
            <div className="w-full flex flex-flow flex-wrap justify-end gap-3 p-2">
                {            
                product.domain.map((domain) => (
                    <h3 key={domain} className="text-[#5754AD] border border-[#5754AD] rounded-lg px-4 py-1 font-bold">
                     {domain}
                    </h3>

                ))}
              </div>
        </div>
  );
}
