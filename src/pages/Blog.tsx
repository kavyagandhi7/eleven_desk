import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";

const BlogSystem = () => {
  const [currentPage, setCurrentPage] = useState('list');
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch",
      excerpt: "Explore the latest trends in cloud computing and how they shaping the future of business technology.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      author: "Zarul Shaikh",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      tags: ["Cloud Computing", "Technology", "Business"],
      slug: "future-of-cloud-computing-trends",
      content: {
        introduction: "Cloud computing has evolved from a novel concept to the backbone of modern digital infrastructure. As we advance further into the digital age, several transformative trends are reshaping how organizations approach cloud adoption and management.",
        sections: [
          {
            title: "Multi-Cloud and Hybrid Cloud Strategies",
            content: "Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize performance. This approach allows businesses to leverage the best services from multiple cloud providers while maintaining flexibility and redundancy. Hybrid cloud solutions continue to gain traction, enabling seamless integration between on-premises infrastructure and cloud services."
          },
          {
            title: "Edge Computing Integration",
            content: "The convergence of cloud and edge computing is creating new possibilities for real-time data processing. By bringing computation closer to data sources, organizations can reduce latency, improve user experiences, and enable new applications in IoT, autonomous vehicles, and augmented reality."
          },
          {
            title: "AI and Machine Learning as a Service",
            content: "Cloud providers are democratizing AI and ML capabilities through managed services. This trend is making advanced analytics and machine learning accessible to organizations of all sizes, without requiring extensive in-house expertise or infrastructure investments."
          },
          {
            title: "Serverless Computing Evolution",
            content: "Serverless architectures are becoming more sophisticated, with improved cold start times and better integration capabilities. This evolution is enabling developers to focus purely on code while cloud providers handle infrastructure management, scaling, and optimization."
          },
          {
            title: "Enhanced Security and Compliance",
            content: "As cloud adoption grows, so does the focus on security and compliance. New frameworks and tools are emerging to help organizations maintain security postures while leveraging cloud flexibility. Zero-trust security models are becoming standard practice in cloud environments."
          }
        ],
        conclusion: "The future of cloud computing promises even greater innovation and efficiency. Organizations that stay ahead of these trends will be better positioned to leverage cloud technologies for competitive advantage and digital transformation success."
      }
    },
    {
      id: 2,
      title: "Building Secure Applications in the Age of Cyber Threats",
      excerpt: "Learn about best practices for developing secure applications and protecting against modern cyber threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      author: "Dev Kumar",
      date: "Mar 12, 2024",
      readTime: "7 min read",
      tags: ["Security", "Development", "Cybersecurity"],
      slug: "building-secure-applications-cyber-threats",
      content: {
        introduction: "In today's interconnected digital landscape, application security has become more critical than ever. With cyber threats evolving rapidly and becoming increasingly sophisticated, developers must adopt a security-first mindset throughout the development lifecycle.",
        sections: [
          {
            title: "Secure Development Lifecycle (SDL)",
            content: "Implementing a Secure Development Lifecycle ensures security considerations are integrated from the initial design phase through deployment and maintenance. This approach includes threat modeling, security requirements gathering, secure coding practices, and regular security testing throughout development."
          },
          {
            title: "Zero Trust Architecture",
            content: "The traditional perimeter-based security model is no longer sufficient. Zero Trust architecture assumes no implicit trust and verifies every request, regardless of its source. This approach involves implementing strong authentication, authorization, and continuous monitoring at every layer of the application."
          },
          {
            title: "API Security Best Practices",
            content: "APIs are often the most vulnerable attack vectors in modern applications. Implementing proper authentication mechanisms, rate limiting, input validation, and comprehensive logging is essential. OAuth 2.0, API keys, and JWT tokens should be implemented correctly to prevent unauthorized access."
          },
          {
            title: "Container and Cloud Security",
            content: "As applications increasingly run in containerized environments and cloud platforms, new security considerations emerge. Container image scanning, secrets management, network segmentation, and infrastructure as code security become critical components of the overall security strategy."
          },
          {
            title: "Continuous Security Monitoring",
            content: "Security is not a one-time implementation but an ongoing process. Continuous monitoring involves real-time threat detection, vulnerability scanning, security information and event management (SIEM), and automated incident response capabilities."
          },
          {
            title: "DevSecOps Integration",
            content: "Integrating security into DevOps practices (DevSecOps) ensures security checks are automated and performed continuously. This includes automated security testing, compliance checking, and security gate implementations in CI/CD pipelines."
          }
        ],
        conclusion: "Building secure applications requires a comprehensive approach that combines technical measures, process improvements, and cultural changes. By adopting these practices and staying informed about emerging threats, development teams can create robust applications that protect user data and maintain system integrity."
      }
    },
    {
      id: 3,
      title: "The Rise of AI in Enterprise Solutions",
      excerpt: "Discover how artificial intelligence is transforming enterprise software and business operations.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      author: "Faruq Chen",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      tags: ["Artificial Intelligence", "Enterprise", "Digital Transformation"],
      slug: "rise-of-ai-enterprise-solutions",
      content: {
        introduction: "Artificial Intelligence is no longer a futuristic concept but a present reality transforming how enterprises operate. From automating routine tasks to providing deep insights from vast datasets, AI is becoming an integral part of business strategy and operations.",
        sections: [
          {
            title: "AI-Powered Process Automation",
            content: "Intelligent Process Automation (IPA) combines traditional robotic process automation with AI capabilities like natural language processing and machine learning. This enables automation of complex, judgment-based tasks that previously required human intervention, significantly improving efficiency and reducing operational costs."
          },
          {
            title: "Predictive Analytics and Business Intelligence",
            content: "AI-driven predictive analytics is revolutionizing decision-making processes. By analyzing historical data patterns and external factors, enterprises can forecast market trends, customer behavior, and operational needs with unprecedented accuracy. This capability enables proactive rather than reactive business strategies."
          },
          {
            title: "Customer Experience Enhancement",
            content: "AI is transforming customer interactions through intelligent chatbots, personalized recommendations, and predictive customer service. Natural language processing enables more natural and effective communication, while machine learning algorithms provide increasingly accurate personalization at scale."
          },
          {
            title: "Supply Chain Optimization",
            content: "AI algorithms are optimizing supply chain operations by predicting demand fluctuations, identifying potential disruptions, and optimizing inventory levels. Machine learning models can process vast amounts of data from multiple sources to provide real-time insights and recommendations."
          },
          {
            title: "Cybersecurity and Risk Management",
            content: "AI-powered security solutions can detect and respond to threats faster than traditional methods. Machine learning algorithms can identify unusual patterns and behaviors that might indicate security breaches, while AI-driven risk assessment tools help enterprises make more informed decisions."
          },
          {
            title: "Human Resources and Talent Management",
            content: "AI is transforming HR processes from recruitment to performance management. Intelligent screening systems can identify the best candidates, while AI-powered analytics provide insights into employee engagement, retention risks, and career development opportunities."
          }
        ],
        conclusion: "The integration of AI into enterprise solutions is not just about technology adoption—it's about fundamental transformation of how businesses operate. Organizations that successfully implement AI strategies will gain significant competitive advantages in efficiency, innovation, and customer satisfaction."
      }
    },
    {
      id: 4,
      title: "Designing for the Modern Web: UX Best Practices",
      excerpt: "Explore current trends and best practices in web design and user experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
      author: "Sarah Johnson",
      date: "Mar 8, 2024",
      readTime: "4 min read",
      tags: ["UX Design", "Web Development", "User Interface"],
      slug: "modern-web-design-ux-best-practices",
      content: {
        introduction: "Modern web design goes beyond aesthetics—it's about creating intuitive, accessible, and engaging experiences that serve users' needs effectively. As user expectations continue to evolve, designers must stay current with best practices and emerging trends.",
        sections: [
          {
            title: "Mobile-First Design Philosophy",
            content: "With mobile traffic dominating web usage, mobile-first design has become essential. This approach involves designing for mobile devices first, then progressively enhancing for larger screens. It ensures optimal performance and usability across all devices while maintaining design consistency."
          },
          {
            title: "Accessibility and Inclusive Design",
            content: "Creating accessible web experiences benefits all users, not just those with disabilities. Following WCAG guidelines, implementing proper semantic HTML, ensuring sufficient color contrast, and providing alternative text for images are fundamental practices that improve usability for everyone."
          },
          {
            title: "Performance-Driven Design",
            content: "User experience is directly tied to performance. Optimizing images, minimizing HTTP requests, implementing lazy loading, and using efficient CSS and JavaScript are crucial for maintaining fast load times. Core Web Vitals have become important ranking factors that directly impact user satisfaction."
          },
          {
            title: "Micro-Interactions and Animation",
            content: "Thoughtful micro-interactions provide feedback, guide user attention, and create delightful experiences. Subtle animations can communicate state changes, provide visual hierarchy, and make interfaces feel more responsive and engaging without overwhelming users."
          },
          {
            title: "Content-First Approach",
            content: "Effective web design prioritizes content strategy and information architecture. Understanding user goals and organizing content logically ensures that design serves its primary purpose: helping users find and consume information efficiently."
          },
          {
            title: "Dark Mode and Theme Adaptability",
            content: "Providing theme options, particularly dark mode, has become a user expectation. Implementing theme switching requires careful consideration of color schemes, contrast ratios, and user preferences while maintaining brand consistency across themes."
          }
        ],
        conclusion: "Successful modern web design balances aesthetics with functionality, prioritizes user needs, and adapts to changing technologies and user behaviors. By following these best practices, designers can create web experiences that are both beautiful and highly functional."
      }
    },
    {
      id: 5,
      title: "DevOps: Bridging the Gap Between Development and Operations",
      excerpt: "Understanding the importance of DevOps in modern software development.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      author: "Michael",
      date: "Mar 5, 2024",
      readTime: "8 min read",
      tags: ["DevOps", "Software Development", "Operations"],
      slug: "devops-bridging-development-operations",
      content: {
        introduction: "DevOps represents a fundamental shift in how organizations approach software development and deployment. By breaking down silos between development and operations teams, DevOps enables faster, more reliable software delivery while improving collaboration and efficiency.",
        sections: [
          {
            title: "Cultural Transformation",
            content: "DevOps is primarily a cultural movement that emphasizes collaboration, shared responsibility, and continuous learning. It requires breaking down traditional barriers between teams and fostering a culture of trust, transparency, and shared accountability for the entire software lifecycle."
          },
          {
            title: "Continuous Integration and Continuous Deployment",
            content: "CI/CD pipelines are the backbone of DevOps practices. Automated testing, building, and deployment processes ensure code changes are integrated frequently and deployed reliably. This approach reduces integration issues, enables faster feedback loops, and improves overall code quality."
          },
          {
            title: "Infrastructure as Code (IaC)",
            content: "Managing infrastructure through code provides consistency, repeatability, and version control for infrastructure changes. Tools like Terraform, Ansible, and CloudFormation enable teams to provision and manage infrastructure using the same practices applied to application code."
          },
          {
            title: "Monitoring and Observability",
            content: "Comprehensive monitoring and observability are essential for maintaining system reliability. This includes application performance monitoring, log management, distributed tracing, and metrics collection. Proactive monitoring enables teams to identify and resolve issues before they impact users."
          },
          {
            title: "Security Integration (DevSecOps)",
            content: "Security must be integrated throughout the DevOps pipeline rather than being an afterthought. DevSecOps practices include automated security testing, vulnerability scanning, compliance checking, and security gate implementations in CI/CD processes."
          },
          {
            title: "Container Orchestration and Microservices",
            content: "Containerization and microservices architecture align well with DevOps principles. Containers provide consistency across environments, while microservices enable independent deployment and scaling. Orchestration platforms like Kubernetes facilitate automated deployment and management."
          },
          {
            title: "Measurement and Continuous Improvement",
            content: "DevOps success requires measuring key metrics like deployment frequency, lead time, mean time to recovery, and change failure rate. These measurements provide insights for continuous improvement and help teams optimize their processes over time."
          }
        ],
        conclusion: "DevOps is not just about tools and processes—it's about creating a culture of collaboration and continuous improvement. Organizations that successfully implement DevOps practices see significant improvements in deployment frequency, system reliability, and overall business agility."
      }
    },
    {
      id: 6,
      title: "The Impact of 5G on Mobile App Development",
      excerpt: "How 5G technology is revolutionizing mobile application development and user experiences.",
      image: "https://images.unsplash.com/photo-1478432780021-b8d273730d8c?auto=format&fit=crop&q=80",
      author: "Sudhir",
      date: "Mar 3, 2024",
      readTime: "5 min read",
      tags: ["5G", "Mobile Development", "Technology"],
      slug: "5g-impact-mobile-app-development",
      content: {
        introduction: "The advent of 5G technology is ushering in a new era of mobile application development. With dramatically faster speeds, lower latency, and improved connectivity, 5G is enabling previously impossible mobile experiences and opening new possibilities for developers.",
        sections: [
          {
            title: "Enhanced Real-Time Applications",
            content: "5G's ultra-low latency enables real-time applications that were previously impractical on mobile networks. This includes cloud gaming, augmented reality applications, real-time collaboration tools, and live streaming with minimal delay. Developers can now create more responsive and interactive experiences."
          },
          {
            title: "Cloud-Based Mobile Computing",
            content: "With 5G's high bandwidth and low latency, mobile devices can offload computational tasks to the cloud more effectively. This enables resource-intensive applications to run on less powerful devices by leveraging cloud processing power, effectively extending device capabilities."
          },
          {
            title: "IoT and Connected Ecosystems",
            content: "5G facilitates massive IoT deployments with its ability to support many more connected devices per square kilometer. Mobile apps can now interact with extensive IoT ecosystems, enabling smart city applications, industrial IoT solutions, and comprehensive home automation systems."
          },
          {
            title: "Augmented and Virtual Reality",
            content: "AR and VR applications require high bandwidth and low latency to provide immersive experiences. 5G makes mobile AR/VR applications more viable by supporting the data requirements for high-quality visual rendering and real-time interaction with virtual environments."
          },
          {
            title: "Edge Computing Integration",
            content: "5G networks are designed to work with edge computing infrastructure, bringing processing power closer to users. This combination enables mobile applications to access nearby computing resources, reducing latency and improving performance for location-based and real-time applications."
          },
          {
            title: "New Development Paradigms",
            content: "Developers must adapt to new possibilities and considerations that 5G brings. This includes optimizing for variable network conditions, leveraging edge computing capabilities, managing increased data flows, and designing for new interaction patterns enabled by reduced latency."
          }
        ],
        conclusion: "5G technology is not just an incremental improvement—it's a transformational change that enables entirely new categories of mobile applications. Developers who understand and leverage 5G capabilities will be able to create innovative experiences that were previously impossible on mobile platforms."
      }
    }
  ];

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setCurrentPage('detail');
  };

  const handleBackClick = () => {
    setCurrentPage('list');
    setSelectedPost(null);
  };

  // Generate blog list structured data
  const blogListStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Eleven Desk Services Blog",
    "description": "Technology insights, digital transformation guides, and IT industry expertise from Eleven Desk Services",
    "url": "https://elevendesk.ae/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Eleven Desk Services",
      "url": "https://elevendesk.ae",
      "logo": "https://elevendesk.ae/logo.png"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "url": `https://elevendesk.ae/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Eleven Desk Services"
      }
    }))
  };

  // Generate individual blog post structured data
  const getBlogPostStructuredData = (post: any) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "url": `https://elevendesk.ae/blog/${post.slug}`,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eleven Desk Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elevendesk.ae/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://elevendesk.ae/blog/${post.slug}`
    },
    "wordCount": post.content.introduction.length + post.content.sections.reduce((acc: number, section: any) => acc + section.content.length, 0) + post.content.conclusion.length,
    "keywords": post.tags.join(", "),
    "articleSection": "Technology",
    "inLanguage": "en-US"
  });

  const BlogList = () => (
    <>
      <SEO
        title="Technology Blog | Eleven Desk Services - IT Insights & Digital Transformation"
        description="Explore expert insights on cloud computing, cybersecurity, AI, mobile development, and digital transformation from Eleven Desk Services. Stay updated with the latest technology trends and best practices."
        keywords="technology blog, IT insights, cloud computing, cybersecurity, artificial intelligence, mobile development, web development, digital transformation, DevOps, 5G technology, Eleven Desk Services"
        url="/blog"
        type="website"
        structuredData={blogListStructuredData}
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
                Eleven Desk Services Technology Blog
              </h1>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Expert insights and perspectives on technology, innovation, and digital transformation from the Eleven Desk Services team. 
                Stay ahead with the latest trends in cloud computing, cybersecurity, AI, and software development.
              </p>
            </motion.div>

            {/* Featured Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Topics</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {["Cloud Computing", "Cybersecurity", "AI & ML", "Mobile Development", "DevOps", "Web Development"].map((category) => (
                  <span
                    key={category}
                    className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-600/30 hover:bg-blue-600/30 transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-600/80 text-white px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2">Read More</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );

  const BlogDetail = ({ post }: { post: any }) => (
    <>
      <SEO
        title={`${post.title} | Eleven Desk Services Blog`}
        description={post.excerpt}
        keywords={`${post.tags.join(", ")}, Eleven Desk Services, technology blog, IT insights`}
        url={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        structuredData={getBlogPostStructuredData(post)}
      />
      
      <div className="pt-20 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li>/</li>
              <li className="text-gray-300">{post.title}</li>
            </ol>
          </nav>

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleBackClick}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </motion.button>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: any, index: number) => (
                <span
                  key={index}
                  className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-600/30"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium text-white">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                {post.content.sections.length} sections
              </div>
            </div>

          </motion.header>

          {/* Article Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {/* Introduction */}
            <div className="bg-white/5 rounded-xl p-8 mb-12 border-l-4 border-blue-500">
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                {post.content.introduction}
              </p>
            </div>

            {/* Content Sections */}
            {post.content.sections.map((section: any, index: number) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="bg-white/3 rounded-xl p-8 border border-white/10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.section>
            ))}

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {post.content.conclusion}
              </p>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-white/5 rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{post.author}</h4>
                  <p className="text-gray-400">Technology Writer & Industry Expert at Eleven Desk Services</p>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Related Articles from Eleven Desk Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    onClick={() => handlePostClick(relatedPost)}
                    className="bg-white/5 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Get More Tech Insights from Eleven Desk Services
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for expert technology insights, industry trends, and digital transformation tips.
              </p>
            </motion.div>
          </motion.main>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'list' ? (
        <BlogList />
      ) : (
        <BlogDetail post={selectedPost} />
      )}
    </div>
  );
};

export default BlogSystem;