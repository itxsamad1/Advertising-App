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

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li>Contact information (name, email, phone number)</li>
              <li>Business information</li>
              <li>Campaign preferences and requirements</li>
              <li>Payment information</li>
              <li>Usage data and analytics</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our advertising services</li>
              <li>Process payments and maintain accounts</li>
              <li>Communicate about your campaigns</li>
              <li>Send important updates and notifications</li>
              <li>Analyze and improve our service performance</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.4 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure. These measures include:
            </p>
            <ul>
              <li>Secure data encryption</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Secure data storage systems</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.5 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.7 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to:
            </p>
            <ul>
              <li>Improve user experience</li>
              <li>Analyze website usage</li>
              <li>Customize content and advertising</li>
              <li>Remember user preferences</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            transition={{ delay: 0.8 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2>7. Contact Us</h2>
            <p>
              For privacy-related inquiries or to exercise your rights, contact us at:
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
          transition={{ delay: 0.9 }}
          className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p>Last updated: March 2024</p>
        </motion.div>
      </div>
    </motion.div>
  );
} 