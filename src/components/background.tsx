
'use client';

export function Background() {
  return (
    <div
      className="fixed inset-0 -z-50 h-full w-full bg-background transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-grid-slate-900/[0.05]"></div>
    </div>
  );
}
