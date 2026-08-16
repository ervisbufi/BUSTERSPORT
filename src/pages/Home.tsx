import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Trophy } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data';
import { ProductCard } from '../components/ProductCard';

const HERO_IMAGE = "/images/Aventador.jpg";

export function Home() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(initialSearch.toLowerCase()) || 
                            product.description.toLowerCase().includes(initialSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, initialSearch]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {!initialSearch && activeCategory === 'All' && (
        <>
          <section className="relative w-full aspect-video md:aspect-auto md:h-[600px] flex items-start justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <motion.img
                src={HERO_IMAGE}
                alt="Performance car in dark"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover object-bottom"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 text-center px-4 w-full mx-auto mt-8 md:mt-12"
            >
              <h1 
                className="text-3xl md:text-5xl font-bold text-black md:text-white uppercase mb-3 md:mb-4 tracking-tight drop-shadow-xl whitespace-nowrap"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="relative inline-block">K<span className="absolute -bottom-1 md:-bottom-1.5 left-0 w-full h-1.5 md:h-2 bg-[#B91C1C]"></span></span>ING <span className="text-lg md:text-2xl mx-2 align-middle">OF THE</span> <span className="text-black md:text-white">R<span className="relative inline-block">I<span className="absolute -top-1.5 md:-top-2 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#B91C1C] rounded-full"></span></span>NG</span>
              </h1>
            </motion.div>
          </section>
        </>
      )}

      {/* Products Section */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {initialSearch ? (
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-black mb-2">Search Results</h2>
            <p className="text-zinc-400">Showing results for "{initialSearch}"</p>
          </div>
        ) : (
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase text-black mb-8 tracking-tighter">
              Our <span className="text-[#39FF14]">Collection</span>
            </h2>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded font-black uppercase text-[10px] transition-colors cursor-pointer tracking-widest ${
                    activeCategory === cat 
                      ? 'bg-[#B91C1C] text-white shadow-lg shadow-[#B91C1C]/20' 
                      : 'bg-white border border-zinc-200 text-zinc-600 hover:text-black hover:border-zinc-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-zinc-200">
            <p className="text-xl text-zinc-400">No products found matching your criteria.</p>
            <button 
              onClick={() => {
                window.location.href = '/';
              }}
              className="mt-6 text-[#B91C1C] hover:text-[#B91C1C]/80 font-medium underline cursor-pointer"
            >
              Clear search and filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Features */}
      {!initialSearch && activeCategory === 'All' && (
        <section className="bg-zinc-50 py-12 border-t border-zinc-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="bg-[#B91C1C]/10 p-3 rounded-full text-[#B91C1C]">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Fast Shipping</h4>
                  <p className="text-sm text-zinc-400">Free delivery over 3000 ALL</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="bg-[#39FF14]/10 p-3 rounded-full text-[#39FF14]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Secure Checkout</h4>
                  <p className="text-sm text-zinc-400">100% protected payments</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="bg-[#B91C1C]/10 p-3 rounded-full text-[#B91C1C]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Premium Quality</h4>
                  <p className="text-sm text-zinc-400">Top-tier accessories</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
