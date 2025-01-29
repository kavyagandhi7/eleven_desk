import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import { Award, Users, Target, Rocket } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Worldwide" },
    { icon: Award, value: "50+", label: "Industry Awards" },
    { icon: Target, value: "98%", label: "Client Satisfaction" },
    { icon: Rocket, value: "10+", label: "Years Experience" },
  ];

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
              About Eleven Desk Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leading the digital transformation journey with innovation and
              excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-400 mb-6">
                Founded by Kavya Gandhi, Eleven Desk Services has been at the
                forefront of technological innovation since its inception. Our
                journey began with a vision to transform how businesses leverage
                technology in the digital age.
              </p>
              <p className="text-gray-400">
                Today, we're proud to be trusted by organizations worldwide,
                delivering cutting-edge IT solutions that drive growth and
                innovation. Our commitment to excellence and customer
                satisfaction has made us a leader in the industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-lg p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Innovation
                </h3>
                <p className="text-gray-400">
                  Pushing boundaries and embracing new technologies to deliver
                  cutting-edge solutions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Excellence
                </h3>
                <p className="text-gray-400">
                  Maintaining the highest standards in everything we do.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-gray-400">
                  Building trust through transparency and ethical practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
