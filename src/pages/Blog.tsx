import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import { Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Cloud Computing: Trends to Watch",
      excerpt:
        "Explore the latest trends in cloud computing and how they shaping the future of business technology.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      author: "Kavya Gandhi",
      date: "Mar 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Building Secure Applications in the Age of Cyber Threats",
      excerpt:
        "Learn about best practices for developing secure applications and protecting against modern cyber threats.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      author: "David Kumar",
      date: "Mar 12, 2024",
      readTime: "7 min read",
    },
    {
      title: "The Rise of AI in Enterprise Solutions",
      excerpt:
        "Discover how artificial intelligence is transforming enterprise software and business operations.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      author: "Alex Chen",
      date: "Mar 10, 2024",
      readTime: "6 min read",
    },
    {
      title: "Designing for the Modern Web: UX Best Practices",
      excerpt:
        "Explore current trends and best practices in web design and user experience.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
      author: "Sarah Johnson",
      date: "Mar 8, 2024",
      readTime: "4 min read",
    },
    {
      title: "DevOps: Bridging the Gap Between Development and Operations",
      excerpt:
        "Understanding the importance of DevOps in modern software development.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      author: "Michael Torres",
      date: "Mar 5, 2024",
      readTime: "8 min read",
    },
    {
      title: "The Impact of 5G on Mobile App Development",
      excerpt:
        "How 5G technology is revolutionizing mobile application development and user experiences.",
      image:
        "https://images.unsplash.com/photo-1478432780021-b8d273730d8c?auto=format&fit=crop&q=80",
      author: "Emily Wong",
      date: "Mar 3, 2024",
      readTime: "5 min read",
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
            <h1 className="text-5xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights and perspectives on technology, innovation, and digital
              transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-colors"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <button className="text-white hover:text-gray-300 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
