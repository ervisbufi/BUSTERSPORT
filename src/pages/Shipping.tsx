import { motion } from 'motion/react';

export function Shipping() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
        <div className="space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Order Processing Time</h2>
            <p className="leading-relaxed">
              All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Shipping Rates & Delivery Estimates</h2>
            <p className="leading-relaxed mb-4">
              Shipping charges for your order will be calculated and displayed at checkout. Estimated delivery delays are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Standard Shipping:</strong> 3-5 business days</li>
              <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
              <li><strong>Overnight Shipping:</strong> 1-2 business days (Orders must be placed before 12:00 PM)</li>
            </ul>
            <p className="leading-relaxed mt-4 italic text-sm">
              *Delivery delays can occasionally occur due to weather or unforeseen carrier issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Shipment Confirmation & Order Tracking</h2>
            <p className="leading-relaxed">
              You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Customs, Duties, and Taxes</h2>
            <p className="leading-relaxed">
              Bruster is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Damages</h2>
            <p className="leading-relaxed">
              Bruster is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. International Shipping Policy</h2>
            <p className="leading-relaxed">
              We currently ship within the domestic region and to select international countries. If you do not see your country listed at checkout, please contact our support team to verify if we can arrange a special shipment for your car accessories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. In-Store Pickup</h2>
            <p className="leading-relaxed">
              If you are local, you may select in-store pickup at checkout. Your order will be prepared and ready for pick up within 1-2 business days. We will send you an email when your items are ready along with pickup instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p className="leading-relaxed">
              For any questions regarding your shipment, please contact us at <a href="mailto:info@brusterautosport.com" className="text-[#B91C1C] hover:underline">info@brusterautosport.com</a> or call us at <a href="tel:+355683591372" className="text-[#B91C1C] hover:underline">+355 68 359 1372</a> with your order number.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
