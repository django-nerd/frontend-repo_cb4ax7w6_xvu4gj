import { CalendarDays, Building2, User, Bell, BookOpenText } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutFeatures() {
  const features = [
    {
      title: "Program Tracker",
      desc: "View all major open-source programs with deadlines.",
      icon: CalendarDays,
      emoji: "🗓️",
    },
    {
      title: "Organization Explorer",
      desc: "Inspired by GSoCOrganizations.dev to discover orgs.",
      icon: Building2,
      emoji: "🏢",
    },
    {
      title: "Personal Dashboard",
      desc: "Tailored recommendations using your GitHub data.",
      icon: User,
      emoji: "👤",
    },
    {
      title: "Reminders & Notifications",
      desc: "Stay ahead of every application deadline.",
      icon: Bell,
      emoji: "🔔",
    },
    {
      title: "Preparation Resources",
      desc: "Learn from past contributors and mentors.",
      icon: BookOpenText,
      emoji: "🧠",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About Open Source Tracker</h2>
          <p className="mt-4 text-slate-600">
            Our mission is to help developers explore, track, and prepare for open-source programs like GSoC, LFX Mentorship, C4GT, MLH Fellowship, and Outreachy.
            Sign in with GitHub for a personalized experience and integrations with resources like GSoCOrganizations.dev.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>{f.emoji}</span>
                <f.icon className="text-indigo-600" size={22} />
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
