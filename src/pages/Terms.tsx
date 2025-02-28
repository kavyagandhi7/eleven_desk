import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";

const Terms = () => {
  return (
    <div className="pt-20 bg-black">
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <h1 className="text-4xl font-bold text-white mb-8">
              Terms and Conditions
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-400">
                Welcome to Eleven Desk Services. These Terms and Conditions
                govern your use of our services and website. By accessing or
                using our services, you agree to be bound by these terms, which
                are in compliance with the laws and regulations of the United
                Arab Emirates, particularly Dubai.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Applicable Laws
              </h2>
              <p className="text-gray-400">
                These terms are governed by and construed in accordance with the
                laws of Dubai and the United Arab Emirates, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>
                  UAE Federal Law No. 1 of 2006 on Electronic Commerce and
                  Transactions
                </li>
                <li>UAE Federal Law No. 5 of 2012 on Combating Cyber Crimes</li>
                <li>
                  Dubai Law No. 2 of 2002 concerning Electronic Commerce and
                  Transactions
                </li>
                <li>
                  UAE Federal Law No. 2 of 2019 concerning the Use of
                  Information and Communication Technology in Healthcare
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Service Terms
              </h2>
              <p className="text-gray-400">
                Our services are provided in accordance with Dubai Department of
                Economic Development (DED) regulations and include:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>IT consultancy and development services</li>
                <li>Software implementation and maintenance</li>
                <li>Data protection and security services</li>
                <li>Cloud computing solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Data Protection and Privacy
              </h2>
              <p className="text-gray-400">
                We comply with UAE Federal Law No. 2 of 2019 on the use of ICT
                in Healthcare and the Dubai International Financial Centre
                (DIFC) Data Protection Law No. 5 of 2020. This includes:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>Protection of personal and sensitive data</li>
                <li>Data storage within UAE territory</li>
                <li>Implementation of appropriate security measures</li>
                <li>Regular security audits and assessments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-gray-400">
                All intellectual property rights are protected under UAE Federal
                Law No. 7 of 2002 concerning Copyright and Related Rights,
                including:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>Software and application source code</li>
                <li>Design elements and documentation</li>
                <li>Trademarks and brand assets</li>
                <li>Custom development work</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Dispute Resolution
              </h2>
              <p className="text-gray-400">
                Any disputes shall be resolved in accordance with Dubai and UAE
                law through:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>Amicable settlement through direct negotiation</li>
                <li>Mediation through Dubai Chamber of Commerce</li>
                <li>Dubai Courts or DIFC Courts, as applicable</li>
                <li>Dubai International Arbitration Centre (DIAC)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Contact Information
              </h2>
              <p className="text-gray-400">
                For any inquiries regarding these terms, please contact us at:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Eleven Desk Services</p>
                <p>Dubai Silicon Oasis</p>
                <p>Dubai, United Arab Emirates</p>
                <p>Email: hr@elevendesk.ae</p>
                <p>Phone: +1 (431) 804-6745</p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
