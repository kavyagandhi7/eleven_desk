import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import { Briefcase, Mail, Bell } from "lucide-react";

const Careers = () => {
  return (
    <div className="pt-20 bg-black">
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Build your career with a company that values innovation and growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Innovation
                </h3>
                <p className="text-gray-400">
                  Work with cutting-edge technologies and contribute to
                  innovative solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Growth</h3>
                <p className="text-gray-400">
                  Continuous learning opportunities and career development
                  paths.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Culture</h3>
                <p className="text-gray-400">
                  Inclusive workplace with a focus on work-life balance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* No Current Openings Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/5 rounded-lg p-12 mb-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                No Current Openings
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                We don't have any open positions at the moment, but we're always growing and looking for talented individuals to join our team.
              </p>
              
            </div>

            {/* Contact for Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Working With Us?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Even though we don't have current openings, we'd love to hear from passionate professionals. 
                Reach out to us at{" "}
                <a 
                  href="mailto:hr@elevendesk.ae" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  hr@elevendesk.ae
                </a>{" "}
                and tell us about yourself.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                  Full Stack Development
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                  UI/UX Design
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                  DevOps
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                  Project Management
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Careers;