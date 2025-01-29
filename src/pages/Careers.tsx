import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      description:
        "Looking for an experienced full-stack developer with React and Node.js expertise.",
      requirements: [
        "Minimum 5 years of experience",
        "Strong knowledge of React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Excellent problem-solving skills",
      ],
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description:
        "Seeking a creative UI/UX designer to join our product team.",
      requirements: [
        "Minimum 3 years of experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio showcasing web and mobile designs",
        "Experience with design systems",
      ],
    },
    {
      title: "DevOps Engineer",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $160k",
      description:
        "Join our DevOps team to build and maintain our cloud infrastructure.",
      requirements: [
        "Minimum 4 years of experience",
        "Strong knowledge of AWS/Azure services",
        "Experience with Docker and Kubernetes",
        "CI/CD pipeline expertise",
      ],
    },
    {
      title: "Product Manager",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $150k",
      description:
        "Looking for a product manager to lead our product development initiatives.",
      requirements: [
        "Minimum 5 years of experience",
        "Strong technical background",
        "Excellent communication skills",
        "Agile methodology expertise",
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

          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {position.title}
                  </h3>
                  <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Apply Now
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-5 h-5 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-5 h-5 mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="w-5 h-5 mr-2" />
                    {position.salary}
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{position.description}</p>
                <div>
                  <h4 className="text-white font-bold mb-4">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
