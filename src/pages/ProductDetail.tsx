import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  if (!product) {
    return (
      <div className="flex-grow flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-black">Product not found</h2>
        <Link to="/" className="text-[#B91C1C] hover:text-[#B91C1C]/80 underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>
      
      <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-zinc-100 rounded-xl overflow-hidden relative"
          >
            <img onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/111/333?text=Product+Image" }} 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl md:text-4xl font-black italic uppercase text-black mb-4 tracking-tighter">
              {product.name}
            </h1>
            
            <div className="text-3xl font-black text-black mb-6">
              {product.price} ALL
            </div>
            
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              {product.description}
            </p>
            
            <div className="space-y-4 mb-10 text-sm text-zinc-600">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#39FF14]" /> 
                <span>In Stock & Ready to Ship</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-zinc-500 hover:text-black transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-black">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-zinc-500 hover:text-black transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-1 py-3 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isAdded 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {isAdded ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
              
              <Link to="/checkout" className="block text-center w-full bg-black text-white hover:bg-[#B91C1C] py-3 rounded font-black text-sm uppercase transition-colors mt-4">
                Buy it Now
              </Link>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}
