import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl shadow-lg shadow-black/20"
    >
      <ul className="flex items-center gap-6 text-sm font-medium text-white">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
