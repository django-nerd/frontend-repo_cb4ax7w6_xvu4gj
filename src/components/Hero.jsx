import { Github, Globe, Laptop, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700">
              <Rocket size={14} /> New: Track GSoC, LFX, C4GT and more
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Explore and Track Every Open Source Program — GSoC, LFX, C4GT & More!
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Personalized dashboard powered by GitHub — discover organizations, track deadlines, and prepare smarter.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#login"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:bg-slate-800 transition"
              >
                <Github size={18} /> Login with GitHub
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-50 transition"
              >
                <Globe size={18} /> Explore Programs
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-slate-500">
              <span className="inline-flex items-center gap-2"><Github size={18}/> GitHub</span>
              <span className="inline-flex items-center gap-2"><Laptop size={18}/> Developer-first</span>
              <span className="inline-flex items-center gap-2"><Globe size={18}/> Open Source</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 p-2">
              <div className="h-full w-full rounded-xl bg-white shadow-xl grid grid-cols-2 gap-2 p-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-white border border-slate-200" />
                <div className="rounded-lg bg-gradient-to-br from-violet-100 to-white border border-slate-200" />
                <div className="col-span-2 rounded-lg bg-gradient-to-br from-sky-100 to-white border border-slate-200" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:block">
              <div className="rounded-xl bg-white border border-slate-200 shadow p-3 text-sm text-slate-700">
                Preview: Dashboard, Org Explorer, Timeline
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
