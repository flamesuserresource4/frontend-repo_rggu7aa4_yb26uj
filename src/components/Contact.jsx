import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold text-white sm:text-4xl"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 max-w-2xl text-white/70"
      >
        I'm always excited to collaborate, learn, and build. Feel free to reach out.
      </motion.p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="mailto:chaturvedimohan99@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5"
        >
          <Mail size={18} /> chaturvedimohan99@gmail.com
        </a>
        <a
          href="https://github.com/mohan182004"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mohan-chaturvedi-5578b8251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>

      <p className="mt-12 text-xs text-white/50">© {new Date().getFullYear()} Mohan Chaturvedi — Crafted with React, Tailwind, and a sprinkle of motion.</p>
    </section>
  );
};

export default Contact;
