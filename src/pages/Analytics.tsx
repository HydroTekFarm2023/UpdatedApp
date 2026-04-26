import { useState } from 'react';

export default function Analytics() {
  const [timeFilter, setTimeFilter] = useState<'24h' | '7d' | '30d'>('24h');

  return (
    <>
      {/* Editorial Header Section */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-semibold tracking-widest text-[10px] uppercase mb-2 block">System Performance</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface leading-none">Analytics Overview</h2>
          </div>
          {/* Time Filters: Segmented Control */}
          <div className="bg-surface-container-high p-1.5 rounded-xl flex items-center gap-1 shadow-inner">
            <button 
              onClick={() => setTimeFilter('24h')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${timeFilter === '24h' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant hover:bg-surface-container-lowest/50'}`}
            >
              24h
            </button>
            <button 
              onClick={() => setTimeFilter('7d')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${timeFilter === '7d' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant hover:bg-surface-container-lowest/50'}`}
            >
              7d
            </button>
            <button 
              onClick={() => setTimeFilter('30d')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${timeFilter === '30d' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant hover:bg-surface-container-lowest/50'}`}
            >
              30d
            </button>
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Hero Comparison Chart: Multi-Metric Overlay */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-7 shadow-[0px_10px_30px_rgba(22,108,68,0.06)] relative overflow-hidden">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-1">Nutrient Correlation</h3>
              <p className="text-sm text-on-surface-variant">Overlaying EC (mS/cm) and Water Temp (°C)</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">EC Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Temp</span>
              </div>
            </div>
          </div>
          {/* Modern Data Viz Simulation */}
          <div className="h-64 w-full relative flex items-end justify-between px-2 gap-4">
            {/* Vertical Grid Lines (Subtle) */}
            <div className="absolute inset-0 flex justify-between pointer-events-none">
              <div className="w-px h-full bg-outline-variant/10"></div>
              <div className="w-px h-full bg-outline-variant/10"></div>
              <div className="w-px h-full bg-outline-variant/10"></div>
              <div className="w-px h-full bg-outline-variant/10"></div>
              <div className="w-px h-full bg-outline-variant/10"></div>
              <div className="w-px h-full bg-outline-variant/10"></div>
            </div>
            {/* SVG Chart Overlay Simulation */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* EC Line (Primary) */}
              <path d="M0 180 Q 100 120, 200 150 T 400 80 T 600 100 T 800 50" fill="none" stroke="#166c44" strokeLinecap="round" strokeWidth="3"></path>
              {/* Temp Line (Secondary) */}
              <path d="M0 120 Q 150 160, 300 130 T 500 150 T 800 110" fill="none" opacity="0.6" stroke="#006780" strokeDasharray="8 4" strokeLinecap="round" strokeWidth="2"></path>
            </svg>
            {/* Time Markers */}
            <div className="absolute -bottom-6 w-full flex justify-between text-[10px] font-bold text-outline uppercase tracking-tighter">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
          </div>
        </div>

        {/* Side Metric Lens: pH Intensity */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-container-lowest rounded-xl p-7 shadow-[0px_10px_30px_rgba(22,108,68,0.06)] flex-1 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Acidity Index</span>
            <h3 className="text-sm font-medium text-on-surface-variant mb-6">Current pH Level</h3>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full scale-150"></div>
              <span className="text-7xl font-black tracking-tighter text-on-surface metric-glow relative">6.2</span>
            </div>
            <div className="mt-8 flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full">
              <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-xs font-bold text-primary uppercase">Optimal Range</span>
            </div>
          </div>
          {/* Quick Insight Card */}
          <div className="botanical-gradient rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined">lightbulb</span>
              <h4 className="font-bold tracking-tight">AI Insight</h4>
            </div>
            <p className="text-sm leading-relaxed opacity-90 font-medium">
              Photosynthesis efficiency peaked at 14:30. Consider increasing EC by 0.2 mS/cm for the next dark cycle to support root respiration.
            </p>
          </div>
        </div>

        {/* Small Detail Metric Cards */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-7 shadow-[0px_10px_30px_rgba(22,108,68,0.06)] overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">device_thermostat</span>
            </div>
            <span className="text-xs font-bold text-on-surface-variant">+1.2° vs yesterday</span>
          </div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Avg Temperature</h4>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-black tracking-tight">24.5°</span>
            <span className="text-lg font-medium text-on-surface-variant mb-1">Celsius</span>
          </div>
          {/* Micro-chart */}
          <div className="mt-6 flex items-end gap-1 h-12">
            <div className="flex-1 bg-surface-container-high rounded-[4px] h-1/2"></div>
            <div className="flex-1 bg-surface-container-high rounded-[4px] h-3/4"></div>
            <div className="flex-1 bg-primary-container rounded-[4px] h-2/3"></div>
            <div className="flex-1 bg-primary rounded-[4px] h-full"></div>
            <div className="flex-1 bg-primary rounded-[4px] h-5/6"></div>
            <div className="flex-1 bg-primary-container rounded-[4px] h-1/2"></div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-7 shadow-[0px_10px_30px_rgba(22,108,68,0.06)] overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">water_drop</span>
            </div>
            <span className="text-xs font-bold text-error">-5% Consumption</span>
          </div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Root Hydration</h4>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-black tracking-tight">88.2</span>
            <span className="text-lg font-medium text-on-surface-variant mb-1">% RH</span>
          </div>
          {/* Micro-chart */}
          <div className="mt-6 flex items-end gap-1 h-12">
            <div className="flex-1 bg-secondary rounded-[4px] h-full"></div>
            <div className="flex-1 bg-secondary rounded-[4px] h-5/6"></div>
            <div className="flex-1 bg-secondary-container rounded-[4px] h-3/4"></div>
            <div className="flex-1 bg-secondary-container rounded-[4px] h-1/2"></div>
            <div className="flex-1 bg-surface-container-high rounded-[4px] h-1/4"></div>
            <div className="flex-1 bg-surface-container-high rounded-[4px] h-2/3"></div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-7 shadow-[0px_10px_30px_rgba(22,108,68,0.06)]">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">System Status</h4>
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-surface-container">
              <span className="text-sm font-medium">Nutrient Pump A</span>
              <span className="text-xs font-bold text-primary">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-surface-container">
              <span className="text-sm font-medium">CO2 Injector</span>
              <span className="text-xs font-bold text-on-surface-variant">STANDBY</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Ventilation Unit</span>
              <span className="text-xs font-bold text-primary">60% SPEED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Section: Editorial Visual */}
      <section className="mt-12">
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
          <img
            alt="Sustainable Hydroponic Farm"
            className="w-full h-full object-cover filter brightness-75 transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM__H0M-Qx55oAhqdYbyz6Iv5HGOmBQ5CG0hZA3j9Pek8wOXrKiUUBeWgj2hKAYU7mNpKBMWOA484y04mD9zxiuuBwp7Ce7LG4yGoF8uJPXS9TBjdHo1GhTpNJVFa9cbWUL3Qjfu05LUuz9C4-yk0bUdVHzQQK7fIrCCvQsYblONexjriu_RkIPubOabDBmnMG8JTME2MG8Fd4uAJAz9WAjb5pw7bR4hnDl9x-_ujFp7pWv9p7MfGZfBtdsJFk1GVQvRe029raHGs"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div>
              <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-1">Live Camera Feed</p>
              <h3 className="text-white text-3xl font-black tracking-tighter">Sector 04 — Vertical Grow</h3>
            </div>
            <button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm shadow-xl hover:bg-emerald-50 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">videocam</span>
              View Stream
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
