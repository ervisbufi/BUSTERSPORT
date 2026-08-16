import { Link } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
  key?: string;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const toggleWishlist = (e: MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const openQuickView = (e: MouseEvent) => {
    e.preventDefault();
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-white border border-zinc-200 rounded-xl overflow-hidden flex flex-col group"
      >
        <Link to={`/product/${product.id}`} className="relative h-64 sm:h-72 overflow-hidden bg-zinc-50 block group">
          <img onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/111/333?text=Product+Image" }} 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100 p-2"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <button 
              onClick={openQuickView}
              className="bg-white/95 text-zinc-900 hover:text-[#B91C1C] px-4 py-2 rounded-full font-bold uppercase text-[10px] tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
            >
              <Eye className="w-4 h-4" />
              Quick View
            </button>
          </div>

          <button
            onClick={toggleWishlist}
            className="absolute top-2 left-2 z-30 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-[#B91C1C] text-[#B91C1C]' : 'text-zinc-600'}`} 
            />
          </button>
        </Link>
        
        <div className="p-4 flex flex-col flex-grow">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-bold text-zinc-900 hover:text-[#B91C1C] transition-colors line-clamp-2 mb-3">
              {product.name}
            </h3>
          </Link>
          
          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-black text-black">{product.price} ALL</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="bg-black text-white hover:bg-[#B91C1C] p-2 rounded transition-colors flex items-center justify-center uppercase text-[10px] font-bold"
              title="Add to Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      <QuickViewModal 
        product={product} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </>
  );
}
