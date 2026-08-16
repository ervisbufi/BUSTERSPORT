import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { MouseEvent, useEffect } from 'react';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white border border-zinc-200 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full text-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-zinc-100 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/111/333?text=Product+Image" }}
              />
              <div className="absolute top-4 left-4 bg-[#B91C1C] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                {product.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-zinc-900 mb-2 leading-tight">{product.name}</h2>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-[#B91C1C]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-zinc-500 text-sm font-medium">({product.reviews} reviews)</span>
              </div>

              <p className="text-3xl font-black text-[#39FF14] mb-6">{product.price} ALL</p>
              
              <p className="text-zinc-600 mb-8 line-clamp-5 leading-relaxed text-sm">
                {product.description}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="flex-1 bg-black text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-[#B91C1C] transition-colors uppercase text-xs tracking-wider"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex-1 bg-zinc-100 text-zinc-900 border border-zinc-200 font-bold py-3 px-6 rounded flex items-center justify-center hover:bg-zinc-200 transition-colors uppercase text-xs tracking-wider"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
