import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, CreditCard, Truck, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'link' | 'cod'>('link');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const total = cartTotal + 200;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-[#39FF14]/20 p-6 rounded-full mb-6 text-[#39FF14]"
        >
          <CheckCircle className="w-16 h-16" />
        </motion.div>
        <h2 className="text-3xl font-black text-black mb-4">Order Confirmed!</h2>
        <p className="text-zinc-600 mb-8 text-center max-w-md">
          Thank you for your purchase, {formData.firstName}. Your order has been successfully placed and is being processed.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#B91C1C] text-white shadow-lg shadow-[#B91C1C]/20 px-8 py-3 rounded font-black uppercase text-sm transition-colors cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  useEffect(() => {
    if (cart.length === 0 && !isSuccess) {
      navigate('/cart');
    }
  }, [cart.length, isSuccess, navigate]);

  if (cart.length === 0 && !isSuccess) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-3xl md:text-4xl font-black text-black uppercase italic mb-8 tracking-tighter">
        Checkout
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Contact Info */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h2 className="text-xl font-black uppercase text-black mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-600 mb-1">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-600 mb-1">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-600 mb-1">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-600 mb-1">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h2 className="text-xl font-black uppercase text-black mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-600 mb-1">Street Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-600 mb-1">City</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-600 mb-1">State / Province</label>
                  <input required type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-600 mb-1">ZIP / Postal Code</label>
                  <input required type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-2.5 text-black focus:outline-none focus:border-[#B91C1C] text-sm" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h2 className="text-xl font-black uppercase text-black mb-4">Payment Method</h2>
              <div className="space-y-4">
                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${paymentMethod === 'link' ? 'border-[#B91C1C] bg-[#B91C1C]/5' : 'border-zinc-300 bg-zinc-50 hover:border-zinc-400'}`}>
                  <input type="radio" name="payment" value="link" checked={paymentMethod === 'link'} onChange={() => setPaymentMethod('link')} className="hidden" />
                  <CreditCard className={`w-6 h-6 mr-4 ${paymentMethod === 'link' ? 'text-[#B91C1C]' : 'text-zinc-400'}`} />
                  <div className="flex-grow">
                    <div className="font-bold text-black">External Pay Link</div>
                    <div className="text-sm text-zinc-600">Pay securely via our payment partner</div>
                  </div>
                </label>
                
                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-[#B91C1C] bg-[#B91C1C]/5' : 'border-zinc-300 bg-zinc-50 hover:border-zinc-400'}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="hidden" />
                  <Truck className={`w-6 h-6 mr-4 ${paymentMethod === 'cod' ? 'text-[#B91C1C]' : 'text-zinc-400'}`} />
                  <div className="flex-grow">
                    <div className="font-bold text-black">Pay on Delivery</div>
                    <div className="text-sm text-zinc-600">Pay with cash or card when your order arrives</div>
                  </div>
                </label>
              </div>

              {paymentMethod === 'link' && (
                <div className="mt-4 p-4 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-600 flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" />
                  <p>You will be redirected to our secure payment gateway to complete your purchase after clicking "Place Order".</p>
                </div>
              )}
            </div>

          </form>
        </div>

        {/* Order Summary Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-zinc-200 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-black uppercase text-black mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map(item => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-zinc-100 rounded border border-zinc-200 flex-shrink-0 overflow-hidden relative">
                    <img onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/111/333?text=Product+Image" }} src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-2 -right-2 bg-zinc-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">{item.quantity}</span>
                  </div>
                  <div className="flex-grow py-1 flex flex-col justify-between">
                    <h4 className="text-sm font-medium text-zinc-700 line-clamp-2">{item.product.name}</h4>
                    <span className="text-sm font-black text-[#39FF14]">{item.product.price * item.quantity} ALL</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-zinc-200 pt-4 space-y-3 mb-6">
              <div className="flex justify-between text-sm text-zinc-400">
                <span>Subtotal</span>
                <span>{cartTotal} ALL</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-400">
                <span>Shipping</span>
                <span>200 ALL</span>
              </div>
            </div>
            
            <div className="border-t border-zinc-200 pt-4 mb-8">
              <div className="flex justify-between items-center text-black text-xl font-black">
                <span>Total</span>
                <span>{total} ALL</span>
              </div>
            </div>
            
            <button 
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className="w-full bg-[#39FF14] text-black shadow-lg shadow-[#39FF14]/20 py-4 rounded font-black uppercase text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? 'Processing...' : paymentMethod === 'cod' ? 'Confirm the Order' : `Pay ${total} ALL`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
