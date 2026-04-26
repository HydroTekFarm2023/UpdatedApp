import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
  active?: boolean;
}

function NavItem({ to, icon, label, active }: NavItemProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center justify-center px-4 py-1.5 transition-all duration-200 ease-out active:scale-90",
        active
          ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl"
          : "text-zinc-400 dark:text-zinc-500 hover:text-emerald-500 dark:hover:text-emerald-300"
      )}
    >
      <span className={cn("material-symbols-outlined", active && "fill-1")} style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>
        {icon}
      </span>
      <span className="font-sans text-[10px] font-semibold uppercase tracking-widest mt-1">{label}</span>
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* TopAppBar */}
      <header className="bg-emerald-50/80 dark:bg-zinc-950/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm shadow-emerald-900/5">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              alt="Hydrotek Farm Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi9IKIbSLjrUidLeHN6ufMVEOVXIIHbCOWO0S93ZKYgCNvvvmc-tB4iOgKmfwO_0bVUdYrd6-3ABHFS_0F6ZuTqtaMOFuUjNeH56LMgIQIjEwgGHralOm8C97TeOVRPsid3zU3OBGSTLOfbSJxgBBiyONcaeLpg3nL2sFYJy2IZnYIpcJO4N4je923-P6UHVHTmO3R4D46jS1qnUU-UlAkh4iLRaui7Y6g57jT2b3Y6xb2AcH7V1fSOou48xAntB4weg-LS7KpMRU"
            />
            <h1 className="text-emerald-800 dark:text-emerald-100 font-black tracking-tighter font-sans text-lg">Hydrotek Farm</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 dark:text-zinc-400 font-sans text-xs font-semibold uppercase tracking-widest hidden md:block">System Online</span>
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400 hover:opacity-80 transition-opacity cursor-pointer">account_circle</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        {children}
      </main>

      {/* BottomNavBar */}
      <nav className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-2 pb-8 z-50 rounded-t-3xl shadow-[0px_-10px_30px_rgba(22,108,68,0.06)]">
        <NavItem to="/dashboard" icon="sensors" label="Monitoring" active={location.pathname === '/dashboard'} />
        <NavItem to="/control" icon="tune" label="Control" active={location.pathname === '/control'} />
        <NavItem to="/analytics" icon="leaderboard" label="Analytics" active={location.pathname === '/analytics'} />
        <NavItem to="/camera" icon="videocam" label="Camera" active={location.pathname === '/camera'} />
      </nav>

      {/* Web Navigation (Desktop Top Cluster) - Hidden on mobile */}
      <div className="hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 h-16 items-center z-[60] gap-8">
        <Link to="/dashboard" className={cn("text-sm font-bold uppercase tracking-widest transition-colors", location.pathname === '/dashboard' ? "text-emerald-700 underline decoration-2 underline-offset-8" : "text-zinc-500 hover:text-primary")}>Monitoring</Link>
        <Link to="/control" className={cn("text-sm font-bold uppercase tracking-widest transition-colors", location.pathname === '/control' ? "text-emerald-700 underline decoration-2 underline-offset-8" : "text-zinc-500 hover:text-primary")}>Control</Link>
        <Link to="/analytics" className={cn("text-sm font-bold uppercase tracking-widest transition-colors", location.pathname === '/analytics' ? "text-emerald-700 underline decoration-2 underline-offset-8" : "text-zinc-500 hover:text-primary")}>Analytics</Link>
        <Link to="/camera" className={cn("text-sm font-bold uppercase tracking-widest transition-colors", location.pathname === '/camera' ? "text-emerald-700 underline decoration-2 underline-offset-8" : "text-zinc-500 hover:text-primary")}>Camera</Link>
      </div>
    </div>
  );
}
