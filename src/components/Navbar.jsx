import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600" />
          <span className="text-xl font-semibold tracking-tight text-slate-900">Open Source Tracker</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#programs" className="hover:text-slate-900">Programs</a>
          <a href="#organizations" className="hover:text-slate-900">Organizations</a>
          <a href="#resources" className="hover:text-slate-900">Resources</a>
          <a href="#community" className="hover:text-slate-900">Community</a>
          <a href="#login" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-colors">
            <Github size={18} />
            <span>Login with GitHub</span>
          </a>
        </nav>
        <div className="md:hidden">
          <a href="#login" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm">
            <Github size={18} />
            <span>Login</span>
          </a>
        </div>
      </div>
    </header>
  );
}
