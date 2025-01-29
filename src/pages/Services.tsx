import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import {
  Code,
  Database,
  Globe,
  Layout,
  Shield,
  Smartphone,
  Cloud,
  Cpu,
  Bot,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies, focusing on scalability and performance.",
      features: [
        "React & Next.js",
        "Progressive Web Apps",
        "E-commerce Solutions",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android Apps", "React Native", "Flutter Development"],
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS & Azure", "Cloud Migration", "Serverless Architecture"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and data.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
      ],
    },
    {
      icon: Code,
      title: "DevOps",
      description:
        "Streamlined development and deployment processes for faster delivery.",
      features: [
        "CI/CD Pipeline",
        "Container Orchestration",
        "Infrastructure as Code",
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that enhance user engagement.",
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: Cloud,
      title: "Cloud Consulting",
      description: "Expert guidance on cloud strategy and implementation.",
      features: ["Cloud Strategy", "Cost Optimization", "Performance Tuning"],
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Connected device solutions for the modern world.",
      features: ["IoT Architecture", "Device Management", "Data Analytics"],
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that drive business innovation.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
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
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors"
              >
                <service.icon className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-gray-400 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
