import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/images/LOGO.jpg" 
              alt="BRUSTER AUTOSPORT" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] transition-all placeholder-zinc-500 text-sm"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#B91C1C] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Desktop Nav Icons */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/wishlist" className="relative text-zinc-300 hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#B91C1C] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-[#B91C1C]/20"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </Link>
            <Link to="/cart" className="relative text-zinc-300 hover:text-white transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#39FF14] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-[#39FF14]/20"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/wishlist" className="relative text-zinc-300 hover:text-white">
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B91C1C] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-[#B91C1C]/20">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-zinc-300 hover:text-white">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#39FF14] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-[#39FF14]/20">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-300 hover:text-white p-1"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search & Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-zinc-800 bg-black overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded py-3 pl-4 pr-10 focus:outline-none focus:border-[#B91C1C]"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
