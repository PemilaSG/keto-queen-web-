import { Star } from 'lucide-react';

interface ProductProps {
  name: string;
  weight: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

export default function ProductCard({ name, weight, price, rating, reviews, image }: ProductProps) {
  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-500 text-sm">{weight}</p>
      <div className="flex items-center gap-1 my-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
        ))}
        <span className="text-xs text-gray-400 ml-1">({reviews})</span>
      </div>
      <p className="font-bold text-xl mb-4">{price}</p>
      <button className="w-full bg-emerald-700 text-white py-2 rounded hover:bg-emerald-800">
        Add to Cart
      </button>
    </div>
  );
}