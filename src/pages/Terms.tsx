import { motion } from 'motion/react';

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Bruster. These Terms of Service govern your use of our website and the purchase of our products. By accessing our website or purchasing our products, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Products and Availability</h2>
            <p className="leading-relaxed">
              We strive to display our products, including car accessories and enhancements, as accurately as possible. However, we do not guarantee that product descriptions, colors, or other content are accurate, complete, reliable, current, or error-free. All products are subject to availability, and we reserve the right to limit the quantities of any products or services that we offer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Pricing and Payments</h2>
            <p className="leading-relaxed">
              All prices are listed in the applicable currency and are subject to change without notice. We reserve the right to refuse or cancel any orders placed for products listed at the incorrect price. Payment must be received in full before products are shipped.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Shipping and Delivery</h2>
            <p className="leading-relaxed">
              We aim to process and ship orders promptly. Shipping times and costs vary depending on the destination and the shipping method selected. Bruster is not responsible for delays caused by the shipping carrier or customs clearance processes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Returns and Refunds</h2>
            <p className="leading-relaxed">
              We want you to be completely satisfied with your purchase. If you are not satisfied, you may return the product in its original condition within our designated return period for a refund or exchange, subject to our Return Policy. Certain items, such as custom-made or clearance products, may be non-returnable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Bruster or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, Bruster shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the purchase of our products. Our total liability shall not exceed the amount paid by you for the applicable product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Bruster operates, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website or purchase of products following any changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:info@brusterautosport.com" className="text-[#B91C1C] hover:underline">info@brusterautosport.com</a> or call us at <a href="tel:+355683591372" className="text-[#B91C1C] hover:underline">+355 68 359 1372</a>.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
