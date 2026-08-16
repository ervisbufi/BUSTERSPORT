import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ShoppingBag } from 'lucide-react';

export function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-8">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800">
            <Heart className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Save your favorite premium accessories here to view or purchase them later.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-amber-500 text-zinc-950 px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
