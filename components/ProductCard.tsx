import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border p-3 hover:shadow-sm transition">
      <div className="aspect-square relative rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="font-medium line-clamp-1">{product.title}</h3>
          <p className="text-sm text-gray-600">₹{product.price}</p>
        </div>
        <button className="text-sm px-3 py-1.5 rounded-full border hover:bg-gray-50">
          Add
        </button>
      </div>
    </div>
  );
}
