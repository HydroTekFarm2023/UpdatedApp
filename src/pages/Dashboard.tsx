import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      {/* Dashboard Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline mb-2">System Monitoring</h2>
          <p className="text-on-surface-variant flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            Live Telemetry Environment A-12
          </p>
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-on-surface-variant block">Last updated: 2 mins ago</span>
          <button className="text-primary font-bold text-sm flex items-center gap-1 mt-1 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-sm">refresh</span> Force Sync
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* pH Level - Key Metric */}
        <div className="bg-surface-container-lowest p-7 rounded-xl shadow-[0px_10px_30px_rgba(22,108,68,0.06)] relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">pH Level</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-primary">Normal Range</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">water_ph</span>
          </div>
          <div className="mb-6">
            <span className="text-6xl font-black tracking-tighter text-on-surface metric-glow font-headline">6.2</span>
          </div>
          <div className="w-full h-12 flex items-end gap-1 px-1">
            <div className="flex-1 bg-primary-container h-1/2 opacity-30 rounded-sm"></div>
            <div className="flex-1 bg-primary-container h-2/3 opacity-40 rounded-sm"></div>
            <div className="flex-1 bg-primary-container h-1/3 opacity-30 rounded-sm"></div>
            <div className="flex-1 bg-primary-container h-3/4 opacity-50 rounded-sm"></div>
            <div className="flex-1 bg-primary-container h-full opacity-100 rounded-sm"></div>
            <div className="flex-1 bg-primary-container h-2/3 opacity-60 rounded-sm"></div>
            <div className="flex-1 bg-primary-container h-4/5 opacity-40 rounded-sm"></div>
          </div>
        </div>

        {/* EC Level */}
        <div className="bg-surface-container-lowest p-7 rounded-xl shadow-[0px_10px_30px_rgba(22,108,68,0.06)] relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">EC Connectivity</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="text-xs font-semibold text-tertiary">Warning: High</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary bg-secondary-container p-2 rounded-lg">electric_bolt</span>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-6xl font-black tracking-tighter text-on-surface font-headline">1.8</span>
            <span className="text-sm font-bold text-on-surface-variant">mS/cm</span>
          </div>
          <div className="w-full h-12 flex items-end gap-1 px-1">
            <div className="flex-1 bg-secondary-container h-4/5 opacity-40 rounded-sm"></div>
            <div className="flex-1 bg-secondary-container h-3/4 opacity-50 rounded-sm"></div>
            <div className="flex-1 bg-secondary-container h-full opacity-80 rounded-sm"></div>
            <div className="flex-1 bg-secondary-container h-1/2 opacity-30 rounded-sm"></div>
            <div className="flex-1 bg-secondary-container h-4/5 opacity-60 rounded-sm"></div>
            <div className="flex-1 bg-secondary-container h-full opacity-100 rounded-sm"></div>
            <div className="flex-1 bg-secondary-container h-2/3 opacity-40 rounded-sm"></div>
          </div>
        </div>

        {/* Water Level */}
        <div className="bg-surface-container-lowest p-7 rounded-xl shadow-[0px_10px_30px_rgba(22,108,68,0.06)] relative overflow-hidden flex flex-col justify-between lg:row-span-2 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Reservoir Status</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-primary">Normal</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary">opacity</span>
          </div>
          <div className="relative w-full aspect-square flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full border-[12px] border-surface-container"></div>
            <div className="absolute inset-0 rounded-full border-[12px] border-secondary border-t-transparent border-l-transparent rotate-[45deg]"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black tracking-tighter text-on-surface font-headline">80%</span>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Capacity</span>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-on-surface-variant">Last Fill</span>
              <span className="text-xs font-bold text-on-surface">6h ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-on-surface-variant">Next Cycle</span>
              <span className="text-xs font-bold text-on-surface">45m</span>
            </div>
          </div>
        </div>

        {/* Water Temp */}
        <div className="bg-surface-container-lowest p-7 rounded-xl shadow-[0px_10px_30px_rgba(22,108,68,0.06)] relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Water Temp</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-primary">Optimal</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary-fixed-dim">device_thermostat</span>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-6xl font-black tracking-tighter text-on-surface font-headline">22</span>
            <span className="text-xl font-bold text-on-surface-variant">°C</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_flat</span> Stable</span>
          </div>
        </div>

        {/* Air Temp */}
        <div className="bg-surface-container-lowest p-7 rounded-xl shadow-[0px_10px_30px_rgba(22,108,68,0.06)] relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Ambient Air</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-primary">Normal</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-tertiary-container">thermostat</span>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-6xl font-black tracking-tighter text-on-surface font-headline">24</span>
            <span className="text-xl font-bold text-on-surface-variant">°C</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="text-xs font-bold flex items-center gap-1 text-tertiary"><span className="material-symbols-outlined text-sm">trending_up</span> Rising</span>
          </div>
        </div>

        {/* Humidity */}
        <div className="bg-surface-container-lowest p-7 rounded-xl shadow-[0px_10px_30px_rgba(22,108,68,0.06)] relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Humidity</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-primary">Ideal</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary-container">humidity_mid</span>
          </div>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-6xl font-black tracking-tighter text-on-surface font-headline">65</span>
            <span className="text-xl font-bold text-on-surface-variant">%</span>
          </div>
          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '65%' }}></div>
          </div>
        </div>

        {/* System Alerts / Status - Wide Card */}
        <div className="bg-surface-container-low p-7 rounded-xl md:col-span-2 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-extrabold tracking-tight text-on-surface font-headline">Live Environment Feed</h3>
            <div className="flex gap-2">
              <span className="bg-surface-container-lowest text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">All Systems</span>
              <span className="bg-surface-container-lowest text-xs font-bold px-3 py-1.5 rounded-full shadow-sm text-tertiary">1 Warning</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between transition-transform active:scale-95 duration-150 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Nutrient Pump A</h4>
                  <p className="text-xs text-on-surface-variant">Operational • Flow rate 2.4L/m</p>
                </div>
              </div>
              <span className="text-xs font-bold text-primary">ACTIVE</span>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between transition-transform active:scale-95 duration-150 cursor-pointer border-l-4 border-tertiary">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">warning</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">EC Conductivity Sensor</h4>
                  <p className="text-xs text-on-surface-variant">Calibrate Required • Deviation +0.2</p>
                </div>
              </div>
              <span className="text-xs font-bold text-tertiary">ACTION</span>
            </div>
          </div>
        </div>

        {/* Quick Action Floating Image/CTA */}
        <div className="relative rounded-xl overflow-hidden min-h-[240px] flex items-end p-7 group">
          <img
            alt="Hydroponic lettuce growing in a modern facility"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB3U1jKGGfwl5IISwGmpTLkP0tIari5hFWEwhrmAzJJElkmjIzjxG8Z9TJJhpmXf_KwggpJSpz7oi74nZNKSIe5mapG1FkQe18VozpE2m0UXmSButht0Z6C-p0ZGDlePJVdhideYwilnkEYFNtze6zC_ADSA8lZ1048qdXtI-eGd3IGBLLGIbxVC-QHju1-jxHAbYF20DX8vekmVng2M2NXOJt6SVhMNqA22AaM6eCGOxTz1CCgop5ATyebgnKqGQyBHwQoYCrvF4"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent"></div>
          <div className="relative z-10 w-full">
            <h3 className="text-white text-xl font-bold font-headline mb-2">Crop Management</h3>
            <Link to="/analytics" className="botanical-gradient text-white w-full py-3 rounded-lg text-sm font-bold shadow-lg shadow-emerald-900/20 active:scale-95 transition-transform duration-150 flex items-center justify-center">
              View Plant Health
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
