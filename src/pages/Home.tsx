import React from "react";
import HeroSlider from "../components/HeroSlider";
import ParallaxSection from "../components/ParallaxSection";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layout,
  Shield,
  Smartphone,
  Award,
  Users,
  Target,
  BarChart as ChartBar,
  CheckCircle,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";
import { fadeIn, fadeInUp, stagger } from '../utils/animation';

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
  },
  {
    icon: Database,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions for your business.",
  },
  {
    icon: Code,
    title: "DevOps",
    description: "Streamlined development and deployment processes.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces.",
  },
];

const stats = [
  { value: "500+", label: "Clients Worldwide", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Target },
  { value: "50+", label: "Industry Awards", icon: Award },
  { value: "10+", label: "Years Experience", icon: ChartBar },
];

const features = [
  "Cutting-edge Technology Stack",
  "Dedicated Support Team",
  "Agile Development Process",
  "Regular Security Audits",
  "Scalable Solutions",
  "Performance Optimization",
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
          .custom-margin {
            margin-bottom: 310px;
          }
        `}
      </style>

      <div className="bg-black text-white">
        <HeroSlider />

        {/* Services Section */}
        <div className="w-full bg-black">
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                {...fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  We provide comprehensive IT solutions to help businesses
                  thrive in the digital age.
                </p>
              </motion.div>

              <motion.div 
                {...stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 p-[40px]"
              >
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    {...fadeIn}
                  >
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      Icon={service.icon}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Transform Business Section */}
        <div className="w-full bg-black">
          <div className="py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  {...fadeIn}
                  className="order-2 lg:order-1"
                >
                  <h2 className="text-4xl font-bold mb-6">
                    Transform Your Business with Modern Technology
                  </h2>
                  <p className="text-gray-400 mb-8">
                    At Eleven Desk Services, we're committed to delivering
                    innovative IT solutions that drive business growth and
                    digital transformation. Our team of experts works tirelessly
                    to ensure your success in the digital landscape.
                  </p>
                  <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
                <motion.div
                  {...fadeIn}
                  className="order-1 lg:order-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    className="rounded-lg shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full bg-white/5">
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full bg-black">
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div {...fadeIn}>
                  <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="text-white w-5 h-5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div {...fadeIn}>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                    alt="Team meeting"
                    className="rounded-lg shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-white/5">
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Transform your business with our cutting-edge technology
                  solutions. Let's build something amazing together.
                </p>
                <button
                  className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Us Today
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
