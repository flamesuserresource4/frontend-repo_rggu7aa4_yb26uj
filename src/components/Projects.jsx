import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HighlightsHub',
    description:
      "An intelligent Streamlit app that pulls out the 3 most impactful moments from any video with VideoDB's AI scene analysis, then generates clips with auto-subtitles.",
    tech: ['Python', 'Streamlit', 'VideoDB', 'FFmpeg'],
    links: {
      github: 'https://github.com/mohan182004/HighlightHub',
      demo: '',
    },
  },
  {
    title: 'AskMyPDF',
    description:
      'Upload one or more PDFs and ask questions in natural language. Get instant answers and summaries powered by LLMs.',
    tech: ['React', 'Python', 'LLM', 'Vector DB'],
    links: {
      github: 'https://github.com/mohan182004/AskMyPDF',
      demo: '',
    },
  },
  {
    title: 'Serenade',
    description:
      'Open-source local music player, downloader, and audio visualizer built with Electron + React. Winner at FOSS Hack 2025.',
    tech: ['Electron', 'React', 'Node.js'],
    links: {
      github: 'https://github.com/crowaltz24/serenade',
      demo: 'https://youtu.be/vaxG7x0cvm8',
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
        A few things I’ve built recently — focused on intelligent tools and delightful interfaces.
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
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-black transition hover:-translate-y-0.5"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
