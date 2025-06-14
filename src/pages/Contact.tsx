import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Ahmedabad, India", "Ajman, United Arab Emirates"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 70483 07014", "+1 (431) 804-6745"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@elevendesk.ae", "hr@elevendesk.ae"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
      ],
    },
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
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors"
                  >
                    <info.icon className="w-10 h-10 text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {info.title}
                    </h3>
                    <ul className="space-y-3">
                      {info.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-gray-300 text-base leading-relaxed"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
