import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function CTASection() {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm text-center"
        >
          <p className="text-sm font-medium text-indigo-700">Join 1,000+ developers tracking open-source opportunities!</p>
          <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Get Started with GitHub
          </h3>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Sign in to build your personal dashboard, star organizations, set reminders, and never miss a deadline.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#login" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-6 py-3 font-semibold shadow hover:bg-slate-800">
              <Github size={18} /> Get Started with GitHub
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-50">
              Explore Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
