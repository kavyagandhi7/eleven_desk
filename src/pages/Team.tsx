import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Kavya Gandhi",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "Visionary leader with over 15 years of experience in IT industry.",
    },
    {
      name: "Alex Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      bio: "Technology expert specializing in cloud architecture and AI.",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "Award-winning designer with a passion for user experience.",
    },
    {
      name: "Michael Torres",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Full-stack developer with expertise in modern web technologies.",
    },
    {
      name: "Emily Wong",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Strategic thinker focused on delivering value to clients.",
    },
    {
      name: "David Kumar",
      role: "Security Expert",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      bio: "Cybersecurity specialist with CISSP certification.",
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
            <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the experts behind Eleven Desk Services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
