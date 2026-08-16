import { motion } from 'motion/react';

export function About() {
  return (
    <div className="flex-grow bg-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-black text-black uppercase italic mb-6 tracking-tighter">
            About <span className="text-[#B91C1C]">Bruster</span>
          </h1>
          
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
            <p>
              Welcome to Bruster Auto Sport, your ultimate destination for premium car accessories. Founded by driving enthusiasts for driving enthusiasts, we believe that every vehicle deserves to reflect the passion and personality of its owner.
            </p>
            
            <p>
              Our mission is simple: to provide the highest quality automotive enhancements that merge cutting-edge technology with sleek, aggressive aesthetics. Whether you're looking for interior comfort, exterior styling, or performance-inspired details, our carefully curated collection ensures your ride stands out on the road.
            </p>
            
            <p>
              At Bruster, we don't just sell car parts—we deliver an upgraded driving experience. We meticulously test our products to guarantee they meet the rigorous standards of modern car culture, offering unparalleled durability and style.
            </p>
            
            <p className="font-bold text-black pt-4">
              Unleash your ride. Upgrade with Bruster.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
