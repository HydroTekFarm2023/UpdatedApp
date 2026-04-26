import { useState } from 'react';

export default function Control() {
  const [phMode, setPhMode] = useState<'day' | 'night'>('day');

  return (
    <>
      {/* Header Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-2 block">System Status: Active</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">Control Panel</h2>
          </div>
          <div className="flex gap-4 items-center bg-surface-container-low p-2 rounded-2xl">
            <div className="px-6 py-3 bg-surface-container-lowest rounded-xl shadow-sm">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Uptime</p>
              <p className="text-xl font-bold text-primary">14d 02h</p>
            </div>
            <div className="px-6 py-3 bg-surface-container-lowest rounded-xl shadow-sm">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Health</p>
              <p className="text-xl font-bold text-primary">98%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Control Grid (Asymmetric Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* pH Control: Large Card */}
        <div className="md:col-span-7 lg:col-span-8 bg-surface-container-lowest rounded-xl p-[28px] md:p-[32px] flex flex-col justify-between min-h-[340px]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-1">pH Control</h3>
              <p className="text-on-surface-variant text-sm">Automated balancing system</p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-full">
              <button 
                onClick={() => setPhMode('day')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${phMode === 'day' ? 'botanical-gradient text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                Day
              </button>
              <button 
                onClick={() => setPhMode('night')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${phMode === 'night' ? 'botanical-gradient text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                Night
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>
              <div className="relative flex flex-col items-center">
                <span className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface">5.8</span>
                <span className="text-xs font-bold text-primary tracking-widest uppercase mt-2">Current pH</span>
              </div>
            </div>
            <div className="flex-1 w-full flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <button className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-90">
                  <span className="material-symbols-outlined text-primary">remove</span>
                </button>
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Target Value</p>
                  <input className="w-full bg-transparent text-3xl font-bold text-center border-none focus:ring-0 text-on-surface" type="text" defaultValue="6.2" />
                </div>
                <button className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-90">
                  <span className="material-symbols-outlined text-primary">add</span>
                </button>
              </div>
              <div className="h-1.5 w-full bg-surface-container-low rounded-sm overflow-hidden">
                <div className="h-full bg-primary rounded-sm" style={{ width: '58%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* EC Control: Small Side Card */}
        <div className="md:col-span-5 lg:col-span-4 bg-surface-container-lowest rounded-xl p-[28px] md:p-[32px] flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-bold">EC Level</h3>
            <span className="material-symbols-outlined text-on-surface-variant">science</span>
          </div>
          <div className="mb-10 text-center">
            <p className="text-4xl font-bold text-on-surface">1.8 <span className="text-lg font-medium text-on-surface-variant">mS/cm</span></p>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">Target EC</span>
                <span className="text-xs font-bold text-primary">2.0</span>
              </div>
              <input className="w-full h-1.5 bg-surface-container-low appearance-none cursor-pointer accent-primary rounded-sm" type="range" />
            </div>
            <div className="pt-4 space-y-3">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Nutrient Dosing</p>
              <div className="flex gap-2">
                <button className="flex-1 py-3 rounded-xl bg-primary/5 text-primary text-xs font-bold border border-primary/20 hover:bg-primary/10 transition-all">Dose A</button>
                <button className="flex-1 py-3 rounded-xl bg-primary/5 text-primary text-xs font-bold border border-primary/20 hover:bg-primary/10 transition-all">Dose B</button>
              </div>
            </div>
          </div>
        </div>

        {/* Grow Lights */}
        <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-[28px] md:p-[32px]">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full botanical-gradient flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
              </div>
              <h3 className="text-xl font-bold">Grow Lights</h3>
            </div>
            <label className="relative inline-block w-11 h-6">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-surface-container-low">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-2">Schedule</p>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold">18</span>
                <span className="text-sm font-medium text-on-surface-variant pb-1">hrs ON</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-low">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-2">Intensity</p>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold">85</span>
                <span className="text-sm font-medium text-on-surface-variant pb-1">%</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-4">24h Spectrum Timeline</p>
            <div className="h-12 w-full flex gap-1 items-center px-1">
              <div className="h-4 flex-1 bg-surface-container-high rounded-sm"></div>
              <div className="h-6 flex-1 bg-surface-container-high rounded-sm"></div>
              <div className="h-8 flex-1 botanical-gradient rounded-sm"></div>
              <div className="h-10 flex-1 botanical-gradient rounded-sm"></div>
              <div className="h-12 flex-1 botanical-gradient rounded-sm"></div>
              <div className="h-10 flex-1 botanical-gradient rounded-sm"></div>
              <div className="h-8 flex-1 botanical-gradient rounded-sm"></div>
              <div className="h-6 flex-1 bg-surface-container-high rounded-sm"></div>
              <div className="h-4 flex-1 bg-surface-container-high rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Irrigation */}
        <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-[28px] md:p-[32px]">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
              </div>
              <h3 className="text-xl font-bold">Irrigation</h3>
            </div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">Pump 01 Active</span>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Interval (ON)</p>
                <div className="flex items-center bg-surface-container-low rounded-xl px-4 py-3">
                  <input className="bg-transparent border-none w-full focus:ring-0 font-bold text-lg" type="number" defaultValue="15" />
                  <span className="text-xs font-bold text-on-surface-variant">min</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Interval (OFF)</p>
                <div className="flex items-center bg-surface-container-low rounded-xl px-4 py-3">
                  <input className="bg-transparent border-none w-full focus:ring-0 font-bold text-lg" type="number" defaultValue="45" />
                  <span className="text-xs font-bold text-on-surface-variant">min</span>
                </div>
              </div>
            </div>
            <button className="w-full py-4 rounded-xl font-bold text-sm bg-secondary text-white shadow-lg shadow-secondary/20 active:scale-[0.98] transition-transform">
              Manual Flush Now
            </button>
          </div>
        </div>

        {/* Water Temp: Wide Card */}
        <div className="md:col-span-12 bg-surface-container-lowest rounded-xl p-[28px] md:p-[32px] flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Water Temperature</h3>
            <div className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 border-secondary-container relative">
              <span className="text-3xl font-black">22.4°</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Celsius</span>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-secondary/5 blur-xl rounded-full -z-10"></div>
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Target Temperature</p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-on-surface-variant">18°</span>
                <input className="flex-1 h-1.5 bg-surface-container-low appearance-none cursor-pointer accent-secondary rounded-sm" type="range" />
                <span className="text-sm font-bold text-on-surface-variant">26°</span>
              </div>
              <p className="text-center text-lg font-bold">21.0°C</p>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Chiller System</p>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                <span className="font-bold">Active</span>
                <label className="relative inline-block w-11 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Heating Element</p>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl opacity-50">
                <span className="font-bold">Standby</span>
                <label className="relative inline-block w-11 h-6">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
