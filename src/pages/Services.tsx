import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import SEO from "../components/SEO";
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

  // Structured data for services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Eleven Desk Services - IT Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Eleven Desk Services",
      "url": "https://elevendesk.ae",
      "logo": "https://elevendesk.ae/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://linkedin.com/company/elevendesk",
        "https://twitter.com/elevendesk"
      ]
    },
    "description": "Eleven Desk Services is a leading IT company providing comprehensive technology solutions including web development, mobile apps, cloud solutions, cybersecurity, and digital transformation services.",
    "serviceType": [
      "Web Development",
      "Mobile App Development", 
      "Cloud Solutions",
      "Cybersecurity Services",
      "DevOps Services",
      "UI/UX Design",
      "AI & Machine Learning",
      "IoT Solutions"
    ],
    "areaServed": [
      {
        "@type": "Place",
        "name": "Dubai, UAE"
      },
      {
        "@type": "Place", 
        "name": "Ahmedabad, India"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title="IT Services Dubai & Ahmedabad | Eleven Desk Services - Leading IT Company"
        description="Eleven Desk Services - Premier IT company offering web development, mobile apps, cloud solutions, cybersecurity & digital transformation in Dubai, UAE and Ahmedabad, India. Expert IT services for businesses worldwide."
        keywords="Eleven Desk Services, IT company Dubai, IT services Ahmedabad, web development UAE, mobile app development, cloud solutions, cybersecurity services, digital transformation, software development company, IT consulting Dubai, technology solutions India"
        url="/services"
        structuredData={structuredData}
      />
      
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
                Eleven Desk Services - Premier IT Company Solutions
              </h1>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Leading IT company providing comprehensive technology solutions in Dubai, UAE and Ahmedabad, India. 
                Eleven Desk Services delivers expert web development, mobile apps, cloud solutions, and digital transformation services.
              </p>
            </motion.div>

            {/* Services Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 rounded-lg p-8 mb-16 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Eleven Desk Services as Your IT Company Partner?
              </h2>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                As a trusted IT company, Eleven Desk Services combines innovation with expertise to deliver 
                cutting-edge technology solutions. Our team of skilled professionals ensures your business 
                stays ahead in the digital landscape with scalable, secure, and efficient IT services.
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
                  <service.icon className="w-12 h-12 text-blue-400 mb-6" />
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
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with Eleven Desk Services?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Partner with our experienced IT company to accelerate your digital transformation. 
                Contact Eleven Desk Services today for a free consultation and discover how our 
                comprehensive IT solutions can drive your business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;