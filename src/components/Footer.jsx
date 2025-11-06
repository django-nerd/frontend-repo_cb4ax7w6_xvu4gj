import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600">
              © 2025 Open Source Tracker
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-700">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#programs" className="hover:text-slate-900">Programs</a>
            <a href="#organizations" className="hover:text-slate-900">Organizations</a>
            <a href="#resources" className="hover:text-slate-900">Docs</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 inline-flex items-center gap-2">
              <Github size={16} /> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 inline-flex items-center gap-2">
              <Twitter size={16} /> Twitter
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 inline-flex items-center gap-2">
              <MessageCircle size={16} /> Discord
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
