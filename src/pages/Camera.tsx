export default function Camera() {
  return (
    <>
      {/* Header & Camera Switcher Area */}
      <section className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-1">Live Feed</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Precision Vision</h2>
        </div>
        {/* Zone Selector */}
        <div className="relative inline-block w-full md:w-64">
          <div className="bg-surface-container-high rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-surface-container-highest transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">grid_view</span>
              <span className="font-bold text-on-surface">Zone 1: Seedlings</span>
            </div>
            <span className="material-symbols-outlined text-outline">expand_more</span>
          </div>
        </div>
      </section>

      {/* Camera Interface (Bento Style) */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0px_20px_50px_rgba(22,108,68,0.12)] bg-zinc-900 group">
        {/* Video Feed Placeholder */}
        <img
          alt="Hydroponic lettuce rows"
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuLw1CGUMhIUAFmiwPHVOAVZRrZQyJf1oeVsq9lIQ5oMQfXL-hzqJtAVFS293bE9S3NlOCkWL_-RP_tyNYaooTnMgkR5B8Js5hBjb71mDAsviQPEjWZYfwnI2SgMAP3iixFBbqWZhZj0JoSutyfdFpxYtSI45zKe1Bqc0oEMEf0mb6A_Wci-kj3hWJVxcxe_EqOrtnBsu2Hr8Cz8siKCORE23Ol0BsOblmLRmU7SSa4z5eqNfwwc78xI6UjR7i8x8zzT5j5d560Bs"
          referrerPolicy="no-referrer"
        />
        {/* Overlay Elements */}
        {/* Top Right: Health Status */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 items-end">
          <div className="bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 bg-primary-fixed rounded-full animate-pulse"></div>
            <span className="text-sm font-bold tracking-tight">Plant health: Good</span>
          </div>
          <div className="bg-black/40 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-lg text-xs font-mono tracking-tighter">
            REC: 2023-11-24 14:32:05
          </div>
        </div>
        {/* Top Left: Camera Info */}
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
            <span className="material-symbols-outlined text-secondary-fixed">videocam</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 leading-none">Camera 01</p>
              <p className="text-sm font-bold tracking-tight">4K Ultra-Wide Feed</p>
            </div>
          </div>
        </div>
        {/* Bottom Control Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
          <div className="bg-zinc-950/60 backdrop-blur-xl rounded-2xl p-2 flex items-center gap-2 md:gap-4 border border-white/10">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">zoom_in</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">brightness_6</span>
            </button>
            <div className="h-8 w-[1px] bg-white/20 mx-1"></div>
            <button className="botanical-gradient text-white flex items-center gap-2 px-6 py-3 rounded-xl font-bold tracking-tight shadow-xl hover:opacity-90 transition-all active:scale-95">
              <span className="material-symbols-outlined">photo_camera</span>
              <span className="hidden md:inline">Capture Snapshot</span>
            </button>
            <div className="h-8 w-[1px] bg-white/20 mx-1"></div>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">fullscreen</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-error/80 text-white hover:bg-error transition-all active:scale-95">
              <span className="material-symbols-outlined">power_settings_new</span>
            </button>
          </div>
        </div>
      </div>

      {/* Meta Data Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-7 rounded-[1.5rem]">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary">humidity_mid</span>
            <h3 className="font-bold text-on-surface">Ambient Humidity</h3>
          </div>
          <p className="text-4xl font-black text-primary tracking-tighter">64<span className="text-xl opacity-60">%</span></p>
          <div className="mt-4 bg-surface-container-lowest h-2 rounded-full overflow-hidden">
            <div className="flex items-end gap-1 h-3">
              <div className="flex-1 bg-primary h-full opacity-100 rounded-[4px]"></div>
              <div className="flex-1 bg-primary h-full opacity-100 rounded-[4px]"></div>
              <div className="flex-1 bg-primary h-full opacity-100 rounded-[4px]"></div>
              <div className="flex-1 bg-primary h-full opacity-100 rounded-[4px]"></div>
              <div className="flex-1 bg-primary h-full opacity-40 rounded-[4px]"></div>
              <div className="flex-1 bg-primary h-full opacity-20 rounded-[4px]"></div>
              <div className="flex-1 bg-primary h-full opacity-10 rounded-[4px]"></div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low p-7 rounded-[1.5rem]">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary">thermostat</span>
            <h3 className="font-bold text-on-surface">Zone Temp</h3>
          </div>
          <p className="text-4xl font-black text-secondary tracking-tighter">24.5<span className="text-xl opacity-60">°C</span></p>
          <div className="mt-4 flex flex items-end gap-1">
            <div className="h-3 flex-1 bg-secondary rounded-[4px]"></div>
            <div className="h-3 flex-1 bg-secondary rounded-[4px]"></div>
            <div className="h-3 flex-1 bg-secondary/20 rounded-[4px]"></div>
            <div className="h-3 flex-1 bg-secondary/20 rounded-[4px]"></div>
          </div>
        </div>
        <div className="bg-surface-container-low p-7 rounded-[1.5rem]">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-tertiary">potted_plant</span>
            <h3 className="font-bold text-on-surface">Harvest Window</h3>
          </div>
          <p className="text-4xl font-black text-tertiary tracking-tighter">12<span className="text-xl opacity-60"> Days</span></p>
          <p className="text-xs text-on-surface-variant mt-2 font-medium">Estimated via AI visual analysis</p>
        </div>
      </section>
    </>
  );
}
