import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Languages", items: ["Python", "Java", "Solidity", "JavaScript"] },
  { category: "Web3 & Blockchain", items: ["Hardhat", "Ethers.js", "MetaMask", "IPFS", "Alchemy APIs"] },
  { category: "Frameworks", items: ["React.js", "Flask", "FastAPI", "Tailwind CSS"] },
  { category: "Tools & DB", items: ["MySQL", "PostgreSQL", "Git", "VS Code"] },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// ABOUT ME"}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-glass rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing Master of Information Technology at Vignan Institute of 
                Information Technology with a GPA of 8.3. Previously completed Diploma in 
                Computer Engineering with a GPA of 8.47.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in building decentralized applications, smart contracts, and 
                blockchain-based verification systems. Passionate about Web3 technologies 
                and creating secure, transparent solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "3+" },
                { label: "Hackathons", value: "3" },
                { label: "Certifications", value: "2" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="card-glass rounded-xl p-4 text-center"
                >
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + groupIndex * 0.1 }}
                className="card-glass rounded-xl p-5"
              >
                <h4 className="text-primary font-mono text-sm mb-3">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
