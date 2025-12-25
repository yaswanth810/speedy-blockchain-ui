import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EduTrust",
    subtitle: "Blockchain Certificate Verification Platform",
    description:
      "A blockchain-based certificate system using ERC-721 NFTs, IPFS storage, QR verification, and CID-based authenticity checks. Features smart contracts for minting, revocation, scholarship escrow, and academic record management.",
    tech: ["Solidity", "Hardhat", "React", "TypeScript", "IPFS", "ERC-721"],
    period: "Feb 2025 - Apr 2025",
    color: "primary",
  },
  {
    title: "AI-Powered Scam Detection",
    subtitle: "Machine Learning Security System",
    description:
      "Built a machine learning pipeline to detect scam texts and websites with over 94% accuracy using NLP and Scikit-learn. Integrated with a responsive UI and fraud analytics dashboard.",
    tech: ["Python", "NLP", "Scikit-learn", "Flask", "Bootstrap"],
    period: "Jan 2025 - Mar 2025",
    color: "accent",
  },
  {
    title: "Crypto Payment Gateway",
    subtitle: "Alchemy + Testnet Integration",
    description:
      "A testnet-based crypto payment gateway using Alchemy APIs with real-time transaction simulation, wallet connection, payment validation, and gas optimization.",
    tech: ["Alchemy APIs", "Ethers.js", "React", "MetaMask"],
    period: "Nov 2024 - Dec 2024",
    color: "primary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 relative" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// PORTFOLIO"}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="card-glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <p className="text-muted-foreground font-mono text-xs mb-2">
                        {project.period}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className={`text-sm mt-1 ${project.color === "accent" ? "text-accent" : "text-primary"}`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="glass" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-mono border ${
                          project.color === "accent"
                            ? "border-accent/30 text-accent bg-accent/10"
                            : "border-primary/30 text-primary bg-primary/10"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
