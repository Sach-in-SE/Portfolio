import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myPhoto from "../data/WhatsApp Image 2025-04-04 at 00.36.39.jpeg";
import { Download } from "lucide-react";

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/199BpCbiU_vhDp6zhmxflAFq1gQV7nLjV/view?usp=drivesdk",
      "_blank"
    );
  };

  return (
    <section id="about" className="py-20 bg-material-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            {/* Futuristic Profile Circle */}
            <div className="relative w-64 h-64 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-material-dark-primary via-material-dark-secondary to-material-dark-primary animate-gradient-spin" />
              <div className="absolute inset-1 rounded-full bg-material-dark-surface" />
              <div className="absolute inset-2 rounded-full overflow-hidden bg-material-dark-elevated">
                <img
                  src={myPhoto}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Dots */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-material-dark-primary rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 45}deg) translate(120px) rotate(-${
                      i * 45
                    }deg)`,
                  }}
                />
              ))}
            </div>
            <div className="flex-1">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-material-dark-primary">
                About Me
              </motion.h2>
              <div className="space-y-4 text-material-dark-onBg/90">
                <p>
                  I'm a passionate full-stack developer specializing in building
                  web and mobile applications. With expertise in React,
                  TypeScript, and Node.js, I focus on creating performant and
                  accessible user interfaces.
                </p>
                <p>
                  My journey in software development began during my computer
                  science studies, where I discovered my passion for creating
                  elegant solutions to complex problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through technical articles and conference talks.
                </p>
                <motion.button
                  onClick={handleDownloadResume}
                  className="mt-6 px-6 py-3 bg-material-dark-primary text-material-dark-onBg rounded-lg flex items-center gap-2 hover:bg-material-dark-primary/90 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </div>

          <div className="mb-16" id="skills">
            <h3 className="text-2xl font-bold mb-6 text-material-dark-primary">
              Skills & Technologies
            </h3>
            <div className="pb-11" id="skill">
              <p className="font-thin text-center text-xl md:text-2xl p-5 text-white">
                The skill, tools and technology I use:
              </p>
              <div className="flex flex-wrap gap-5 overflow-visible justify-center">
                {[
                  { id: 1, class: "fa-brands fa-java", color: "#007396" },
                  { id: 2, class: "fa-brands fa-js", color: "#F7DF1E" },
                  { id: 3, class: "fa-brands fa-html5", color: "#E34F26" },
                  { id: 4, class: "fa-brands fa-css3-alt", color: "#1572B6" },
                  { id: 5, class: "fa-brands fa-python", color: "#3776AB" },
                  { id: 6, class: "fa-solid fa-c", color: "#777BB4" },
                  { id: 7, class: "fa-brands fa-react", color: "#61DAFB" },
                  { id: 8, class: "fa-brands fa-bootstrap", color: "#7952B3" },
                  { id: 9, class: "fa-brands fa-node", color: "#339933" },
                  { id: 10, class: "fa-brands fa-git", color: "#F05032" },
                  { id: 11, class: "fa-brands fa-github", color: "#ffffff" },
                  { id: 12, class: "fa-solid fa-database", color: "#777BB4" },
                ].map((skill,index) => (
                  <motion.div
                    key={skill.id}
                    className={`${skill.class} text-3xl md:text-6xl md:m-2`}
                    style={{ color: skill.color }}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
