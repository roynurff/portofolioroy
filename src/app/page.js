"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Palette,
  Database,
  Figma,
  ChartSpline,
  Cpu,
  Terminal,
  Server,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Send,
  MapPin,
  Calendar,
  Award,
  Zap,
  Heart,
  Coffee,
  Sparkles,
  Users,
  Briefcase,
  Globe,
  Trophy,
  Instagram,
} from "lucide-react";
import Squares from '@/components/Squares';
import FloatingLines from "@/components/FloatingLines";
import Lanyard from "@/components/Lanyard";
import ProfileCard from '@/components/ProfileCard'

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      alert("Message sent! I'll get back to you soon 🚀");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const skills = [
    { icon: Code, name: "React & Next.js", level: 80, color: "text-cyan-400" },
    { icon: Code, name: "CodeIgniter", level: 85, color: "text-pink-400" },
    { icon: Database, name: "Node.js & APIs", level: 80, color: "text-green-400" },
    { icon: Figma, name: "Figma", level: 85, color: "text-purple-400" },
    { icon: ChartSpline, name: "Data Analysist", level: 82, color: "text-amber-400" },
    { icon: Cpu, name: "Machine & Deep Learning Basics", level: 75, color: "text-blue-400" },
    { icon: Terminal, name: "Python", level: 78, color: "text-yellow-400" },
    { icon: GitBranch, name: "Git & Version Control", level: 85, color: "text-orange-400" },
  ];

  const projects = [
    {
      title: "Web E-Learning",
      description:
        "Web E-Learning For Education School Learning Massage with interactive UI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "TailwindCSS", "JavaScript"],
      github: "https://github.com/roynurff/project-web-elearning",
      demo: "https://example.com",
      featured: false,
    },
    {
      title: "Supermining Game",
      description:
        "Game Like a Mario Bros with usefull interaction.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Python", "Pygame"],
      github: "https://github.com/roynurff/supermining",
      demo: "https://example.com",
      featured: false,
    },
    {
      title: "Jajanin",
      description:
        "Colorful website app design with intuitive navigation and delightful micro-interactions.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
      tech: ["Figma", "Prototyping", "UI Design", "HTML/CSS", "JavaScript"],
      github: "https://github.com/roynurff/jajaninn",
      demo: "https://example.com",
      featured: false,
    },
    {
      title: "Tech Dev Service Website",
      description:
        "Website Development services, Mobile App, IoT System, Data Analysis, Machine Learning, Deep Learning, Quality Assurance for Software.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["Laravel", "PHP", "JavaScript"],
      github: "https://github.com",
      demo: "https://nexuscode.my.id/",
      featured: true,
    },
    {
      title: "Mobile Quiz App",
      description:
        "Mobile Quiz app with answer question and traditional UI.",
      image: "https://plus.unsplash.com/premium_photo-1679957333039-285fb913aa2b?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Flutter", "C++", "HTML"],
      github: "https://github.com/roynurff/MobileQuiz",
      demo: "https://example.com",
      featured: false,
    },
    {
      title: "Note Activity App",
      description:
        "Note Activity app with Tracking Activity.",
      image: "https://images.unsplash.com/photo-1600783245891-f275a1575d93?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Flutter", "C++", "HTML"],
      github: "https://github.com/roynurff/noteactivity",
      demo: "https://example.com",
      featured: false,
    },
  ];

  const stats = [
    {
      icon: Users, // pastikan FaUsers udah di-import
      label: "Total Users",
      value: "27",
    },
    {
      icon: Briefcase, // pastikan juga di-import
      label: "Projects Completed",
      value: "19",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: "1",
    },
    {
      icon: Award,
      label: "Awards Won",
      value: "2",
    },
  ];
  

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
        <div className="absolute inset-0">
          <Squares 
            speed={0.5} 
            squareSize={40}
            direction='diagonal'
            borderColor='#ffff' // blue color
            hoverFillColor='#ffff' // purple color
          />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <Lanyard position={[0, 0, -20]} gravity={[0, -40, 0]} />
        </div>
      

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-8 inline-block"
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-5xl">
                    
                    <img 
                    src="dino.svg"
                    alt="Logo dino"
                    className="w-20 h-20"/>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-dashed border-blue-500/30 rounded-full"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold mb-6"
            >
              Hi, I'm
                a
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-4"
            >
              Software Developer & Data Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-gray-500 max-w-2xl mx-auto mb-8"
            >
              Craft software that runs solid and transform data into insights that matter. Not just building things, but making them smart.✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-full font-semibold transition-all"
              >
                Let's Talk
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/CV.pdf"
                target="_blank"
                rel="noopenner noreferrer"
                className="border border-gray-700 text-gray-400 hover:bg-gray-800 px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex justify-center gap-6"
            >
              {[
                { Icon: Github, href: "https://github.com/roynurff", label: "GitHub", target: "_blank" },
                { Icon: Linkedin, href: "https://linkedin.com/in/roynurf", label: "LinkedIn", target: "_blank"},
                { Icon: Mail, href: "mailto:roy1coc@gmail.com", label: "Email" },
                { Icon: Instagram, href: "https://instagram.com/roynurff", label: "Instagram", target: "_blank"},
              ].map(({ Icon, href, label, target }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-blue-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all"
                >
                  <Icon className="mx-auto mb-3 text-blue-400" size={32} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
              <ProfileCard
                      name="Roy Nurfaza"
                      title="Software & Data Enthusiast"
                      handle="roynurff"
                      status="Online"
                      contactText="Contact Me"
                      avatarUrl="/ow.png"
                      miniavatarUrl="/ow.png"
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={false}
                      onContactClick={() => console.log('Contact clicked')}
                    />
                {/* <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 border-4 border-dashed border-blue-500/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-dashed border-purple-500/30 rounded-full"
                /> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">
                Creative Mind, Technical Heart
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Hi there! I'm Roy, a software and data enthusiast who enjoys 
                building clean, intuitive, and purposeful digital experiences. 
                I combine thoughtful design with practical engineering to create work that not only looks good but also works smoothly.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not exploring new technologies or refining interfaces, I’m usually diving into data projects, learning new tools, 
              or enjoying a quiet moment with a cup of coffee while sketching out ideas.☕
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={18} className="text-blue-400" />
                  <span>Surabaya, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} className="text-purple-400" />
                  <span>Available for work</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Sparkles className="text-yellow-400" size={20} />
                  What I Love
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Clean UI",
                    "Smooth Animations",
                    "Problem Solving",
                    "Data",
                    "Machine Learning",
                    "Deep Learning",
                    "Coffee",
                    "Minimalism",
                    "Dark Mode",
                  ].map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl">
                      <Icon className={skill.color} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <span className="text-sm text-gray-500">{skill.level}% proficiency</span>
                    </div>
                  </div>
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`absolute h-full bg-gradient-to-r ${
                        index === 0
                          ? "from-cyan-500 to-blue-500"
                          : index === 1
                          ? "from-pink-500 to-purple-500"
                          : index === 2
                          ? "from-green-500 to-emerald-500"
                          : "from-purple-500 to-pink-500"
                      } rounded-full`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {[
                "React",
                "Next.js",
                "CodeIgniter",
                "PHP",
                "Python",
                "TensorFlow",
                "CNN",
                "AI/ML",
                "JavaScript",
                "TailwindCSS",
                "Node.js",
                "MySQL",
                "NoSQL",
                "Figma",
                "Git",
                "Framer Motion",
                "Firebase",
                "Vercel",
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all"
                >
                  <span className="text-sm text-gray-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work that I'm proud of
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Sparkles size={12} />
                      Featured
                    </div>
                  )}

                  {/* Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.2 }}
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.2 }}
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gray-800/50 text-blue-400 rounded-full border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/roynurff?tab=repositories"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full font-semibold transition-all"
            >
              View All Projects
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
            {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's create something awesome together! 🚀
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:roy1coc@gmail.com"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group"
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-white font-medium">roy1coc@gmail.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/roynurff"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group"
                  >
                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <Github className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">GitHub</div>
                      <div className="text-white font-medium">@roynurff</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/roynurf"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group"
                  >
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <Linkedin className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">LinkedIn</div>
                      <div className="text-white font-medium">Roy Nurfaza</div>
                    </div>
                  </motion.a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities
                    to be part of your visions. Drop me a message! ✉️✉️✉️
                  </p>
                </div>
              </div>

              {/* Availability Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for Freelance</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting new projects. Expected response time: 6-12 hours.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Input Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="roynur"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="roynur@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                    placeholder="Tell me about your project or something interesting or discussion with me"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>)}

