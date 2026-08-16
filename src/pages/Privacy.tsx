import { motion } from 'motion/react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At Bruster, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase of our car accessories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and shipping/billing address.</li>
              <li><strong>Payment Information:</strong> Credit card details and payment preferences (processed securely by our payment partners).</li>
              <li><strong>Account Information:</strong> Username, password, and purchase history.</li>
              <li><strong>Communications:</strong> Any feedback, reviews, or support requests you send to us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the collected information for various purposes, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing and fulfilling your orders.</li>
              <li>Providing customer support and responding to inquiries.</li>
              <li>Improving our website, products, and overall user experience.</li>
              <li>Sending promotional communications and updates (you can opt out at any time).</li>
              <li>Preventing fraudulent transactions and ensuring security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our business, such as payment processors, shipping carriers, and marketing platforms, under strict confidentiality agreements. We may also disclose information if required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can modify your browser settings to decline cookies, but this may affect certain functionalities of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
            <p className="leading-relaxed">
              Depending on your location, you may have the right to access, correct, update, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically. Your continued use of the website after any modifications indicates your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:info@brusterautosport.com" className="text-[#B91C1C] hover:underline">info@brusterautosport.com</a> or call us at <a href="tel:+355683591372" className="text-[#B91C1C] hover:underline">+355 68 359 1372</a>.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
