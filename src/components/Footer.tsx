import { CarFront, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <img src="/images/LOGO.jpg" alt="Bruster Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mb-4 text-sm max-w-sm">
              Premium car accessories for driving enthusiasts. Upgrade your ride with our high-quality interior, exterior, and electronic enhancements.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-[#B91C1C] transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
            <div className="space-y-2 text-sm text-neutral-300">
              <p className="text-white font-bold uppercase tracking-widest text-xs mb-2">Contact Support</p>
              <a href="mailto:info@brusterautosport.com" className="block hover:text-[#B91C1C] transition-colors">info@brusterautosport.com</a>
              <a href="tel:+355683591372" className="block hover:text-[#B91C1C] transition-colors">+355 68 359 1372</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#B91C1C] transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-[#B91C1C] transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-[#B91C1C] transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-[#B91C1C] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-[#B91C1C] transition-colors">Refund Policy</Link></li>
              <li><Link to="/shipping" className="hover:text-[#B91C1C] transition-colors">Shipping Info</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-900 mt-12 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} Bruster Car Accessories. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
