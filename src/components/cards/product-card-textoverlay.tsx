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

    export default function ProductCardTextOverlay({ product, className = "", iconStyle = "" }: ProductCardProps) {
        return (
          <div className={`relative w-full h-96 rounded-lg overflow-hidden ${className}`} key={product.id}>
            {/* Background Image */}
            <Image
              src={product.url}
              alt={`${product.title} Image`}
              fill
              className="object-cover"
              priority // Preload this image since it's above the fold
            />
      
            {/* Gradient Overlay (fading upward, dark at bottom) */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      
            {/* Text Content Overlay - Positioned at Bottom */}
            <div className="relative z-10 flex flex-col justify-end p-6 text-white h-full gap-2">
              <div className="flex flex-row justify-between items-center w-full">
                <h2 className="font-bold text-2xl">{product.title}</h2>
                <TextBtn
                    title="Read More"
                    className={`${iconStyle} hidden group-hover:block text-[#5754AD]`}
                />              
              </div>
              <h3 className="font-thin text-gray-200 text-md">{product.description}</h3>
      
              {/* Domains */}
              <div className="flex flex-row flex-wrap justify-end gap-3 mt-2">
                {product.domain.map((domain, index) => (
                  <span
                    key={index} // Use index since domain is a string; add a unique ID if available
                    className=" rounded-lg px-4 py-1 font-bold text-sm bg-white/10"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
}