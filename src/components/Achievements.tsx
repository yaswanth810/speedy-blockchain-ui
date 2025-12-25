import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Runner Up – National Level Blockchain Hackathon",
    description:
      "Secured top recognition and cash award for building a secure Crypto Payment Gateway using Ethereum Testnet, Alchemy APIs, Ethers.js, and MetaMask.",
    period: "Nov 2024 – Dec 2024",
  },
  {
    icon: Award,
    title: "3rd Place – Binance Blockchain Yatra",
    description:
      "Secured 3rd place in the live blockchain quiz at Visakhapatnam among ~200+ attendees. Awarded a Binance gift hamper.",
    period: "July 2025",
  },
  {
    icon: Medal,
    title: "3rd Prize – Piston Cup 2025 Hackathon",
    description:
      "Won 3rd prize among 85+ teams at VIIT for building the EduTrust blockchain certificate verification platform.",
    period: "2025",
  },
];

const certifications = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "April 2025",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "April 2025",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 px-4 relative" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// RECOGNITION"}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Hackathons & Awards</h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="card-glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-muted-foreground font-mono text-xs mb-1">
                      {achievement.period}
                    </p>
                    <h4 className="text-foreground font-semibold mb-2 leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Certifications</h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-glass rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <span className="text-accent font-mono text-lg font-bold">Py</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-foreground font-semibold">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-glass rounded-xl p-5 mt-6"
            >
              <h4 className="text-foreground font-semibold mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Team Collaboration", "Hackathon Experience", "Communication", "Problem Solving"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-lg text-sm border border-border"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
