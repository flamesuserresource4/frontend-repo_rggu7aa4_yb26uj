import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold text-white sm:text-4xl"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 grid gap-8 md:grid-cols-2"
      >
        <p className="text-white/80">
          I'm Mohan Chaturvedi, a curious tech student focused on crafting intuitive interfaces and learning by
          building. I enjoy mixing clean design with interactive experiences — from web apps to playful 3D scenes.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Framer Motion', 'Python'].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 shadow-inner shadow-black/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
