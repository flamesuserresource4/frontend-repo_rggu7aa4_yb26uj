import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Portfolio',
    description:
      'A sleek, animated portfolio with 3D interactions and smooth page transitions.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Spline'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Study Planner',
    description:
      'A productivity web app to schedule sessions, track goals, and visualize progress.',
    tech: ['Vite', 'Zustand', 'Chart.js'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Dev Blog',
    description:
      'A minimalist blog engine with markdown support and code highlighting.',
    tech: ['Next.js', 'MDX', 'Prism'],
    links: {
      github: '#',
      demo: '#',
    },
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold text-white sm:text-4xl"
      >
        Featured Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 max-w-2xl text-white/70"
      >
        A curated selection of things I	built recently. Clean code, delightful UX, and learning in public.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ staggerChildren: 0.1 }}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.article
            variants={item}
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={p.links.github}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={p.links.demo}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-black transition hover:-translate-y-0.5"
              >
                <ExternalLink size={16} /> Live demo
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
