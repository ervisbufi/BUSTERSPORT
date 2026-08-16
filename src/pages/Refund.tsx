import { motion } from 'motion/react';

export function Refund() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <div className="space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Return Window</h2>
            <p className="leading-relaxed">
              We offer a 30-day return policy for most of our car accessories. If 30 days have gone by since your purchase was delivered, unfortunately, we cannot offer you a refund or exchange.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility for Returns</h2>
            <p className="leading-relaxed mb-4">
              To be eligible for a return, your item must meet the following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The item must be unused and in the same condition that you received it.</li>
              <li>It must not have been installed or modified in any way.</li>
              <li>It must be in the original packaging, including all accessories, manuals, and hardware.</li>
              <li>You must provide a receipt or proof of purchase.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Non-Returnable Items</h2>
            <p className="leading-relaxed mb-4">
              Several types of goods are exempt from being returned:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom-made or personalized car accessories.</li>
              <li>Items that have already been installed or show signs of wear.</li>
              <li>Gift cards and clearance items.</li>
              <li>Electronic components that have been opened or plugged in.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Return Process</h2>
            <p className="leading-relaxed">
              To initiate a return, please contact our support team at <a href="mailto:info@brusterautosport.com" className="text-[#B91C1C] hover:underline">info@brusterautosport.com</a>. Provide your order number and the reason for the return. If your return is approved, we will provide you with instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Refunds</h2>
            <p className="leading-relaxed">
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment within a certain amount of days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Exchanges</h2>
            <p className="leading-relaxed">
              We only replace items if they are defective or damaged upon arrival. If you need to exchange an item for the exact same product, please send us an email at <a href="mailto:info@brusterautosport.com" className="text-[#B91C1C] hover:underline">info@brusterautosport.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Shipping Costs for Returns</h2>
            <p className="leading-relaxed">
              You will be responsible for paying for your own shipping costs for returning your item. Original shipping costs are non-refundable. If you receive a refund, the cost of original shipping will be deducted from your refund. We recommend using a trackable shipping service or purchasing shipping insurance for higher value items, as we cannot guarantee that we will receive your returned item.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Late or Missing Refunds</h2>
            <p className="leading-relaxed">
              If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you've done all of this and you still have not received your refund, please contact us.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
