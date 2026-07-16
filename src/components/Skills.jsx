import { motion } from "framer-motion";
import { Box, Clapperboard, Gamepad2, Grid3x3, Layers, PenTool } from "lucide-react";
import Section from "./Section.jsx";
import { skills } from "../data/content.js";

const ICONS = { Grid3x3, PenTool, Box, Gamepad2, Clapperboard, Layers };

export default function Skills() {
  return (
    <Section id="skills" kicker="Toolkit" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-6 transition-shadow duration-300 hover:shadow-neon-sm"
            >
              <span className="mb-4 inline-flex rounded-xl border border-neon/30 p-3 text-neon transition-colors duration-300 group-hover:bg-neon group-hover:text-void">
                <Icon size={20} />
              </span>
              <p className="font-semibold text-ink">{s.name}</p>
              <p className="mt-1 text-sm text-muted">{s.note}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
