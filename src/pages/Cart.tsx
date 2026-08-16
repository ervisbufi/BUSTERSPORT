import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-zinc-100 p-6 rounded-full mb-6">
          <ShoppingBag className="w-16 h-16 text-zinc-600" />
        </div>
        <h2 className="text-3xl font-black text-black mb-4">Your cart is empty</h2>
        <p className="text-zinc-600 mb-8 text-center max-w-md">
          Looks like you haven't added any premium accessories to your ride yet.
        </p>
        <Link 
          to="/" 
          className="bg-[#B91C1C] text-white px-8 py-3 rounded font-black uppercase text-sm shadow-lg shadow-[#B91C1C]/20 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-3xl md:text-4xl font-black text-black uppercase italic mb-8 tracking-tighter">
        Your <span className="text-[#B91C1C]">Cart</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, height: 0 }}
                className="bg-white border border-zinc-200 rounded-xl p-4 flex gap-4 sm:gap-6 items-center"
              >
                <Link to={`/product/${item.product.id}`} className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-zinc-100 rounded-lg overflow-hidden">
                  <img onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/111/333?text=Product+Image" }} 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </Link>
                
                <div className="flex-grow flex flex-col py-1 h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="font-bold text-black hover:text-[#B91C1C] transition-colors line-clamp-2">
                          {item.product.name}
                        </h3>
                      </Link>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-500 hover:text-[#B91C1C] transition-colors p-1 cursor-pointer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-zinc-500 text-sm">
                      {item.product.price} ALL each
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50 overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-black text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <div className="font-black text-[#39FF14] sm:text-lg">
                      {item.product.price * item.quantity} ALL
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-zinc-200 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-black uppercase text-black mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-zinc-600">
                <span>Subtotal</span>
                <span>{cartTotal} ALL</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>Shipping</span>
                <span>200 ALL</span>
              </div>
            </div>
            
            <div className="border-t border-zinc-200 pt-4 mb-8">
              <div className="flex justify-between items-center text-black text-xl font-black">
                <span>Total</span>
                <span>
                  {cartTotal + 200} ALL
                </span>
              </div>
            </div>
            
            <Link 
              to="/checkout"
              className="w-full bg-[#39FF14] text-black py-4 rounded font-black text-sm uppercase shadow-lg shadow-[#39FF14]/20 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Proceed to Checkout <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
