import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="text-center">
        <h1 className="text-3xl font-semibold">Welcome to your Pilot Store</h1>
        <p className="text-gray-600 mt-2">
          Edit products, styling, and add checkout later.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
