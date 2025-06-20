'use client';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const sectionVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

export default function TermsPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using M Tech Solutions' advertising services, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>2. Service Description</h2>
            <p>
              M Tech Solutions provides digital advertising services through our network of SMD screens located across Karachi. Our services include but are not limited to:
            </p>
            <ul>
              <li>Digital advertisement display</li>
              <li>Campaign management</li>
              <li>Performance analytics</li>
              <li>Content design support</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.4 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>3. Advertising Content</h2>
            <p>
              All advertising content must comply with our content guidelines and local regulations. We reserve the right to:
            </p>
            <ul>
              <li>Review and approve all advertising content</li>
              <li>Reject or remove content that violates our guidelines</li>
              <li>Modify display schedules as needed for technical or operational reasons</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.5 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>4. Payment Terms</h2>
            <p>
              Clients agree to pay for services according to the selected plan and pricing structure. Payment terms include:
            </p>
            <ul>
              <li>Upfront payment for advertising campaigns</li>
              <li>No refunds for cancelled campaigns</li>
              <li>Additional charges for content design services if requested</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>5. Limitation of Liability</h2>
            <p>
              M Tech Solutions is not liable for:
            </p>
            <ul>
              <li>Technical malfunctions or display interruptions</li>
              <li>Indirect or consequential damages</li>
              <li>Performance variations in advertising campaigns</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.7 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>6. Privacy and Data</h2>
            <p>
              We collect and process data in accordance with our privacy policy. This includes:
            </p>
            <ul>
              <li>Campaign performance metrics</li>
              <li>Client contact information</li>
              <li>Payment details</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.8 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>7. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of the modified terms.
            </p>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.9 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>8. Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:
            </p>
            <ul>
              <li>Email: mtechsolutions@gmail.com</li>
              <li>Phone: 021-4825828 / 021-4825829</li>
              <li>Address: B-11, Block 15 Al Raee Avenue, Gulshan-e-Iqbal, Karachi, Pakistan</li>
            </ul>
          </motion.section>
        </div>

        <motion.div
          variants={sectionVariants}
          transition={{ delay: 1 }}
          className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p>Last updated: March 2024</p>
        </motion.div>
      </div>
    </motion.div>
  );
} 