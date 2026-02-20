export default function Loading() {
  return (
    <section className="bg-[#1a0a2e] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-[#c084fc] animate-spin" />
        <p className="text-white/40 text-sm tracking-widest uppercase">Loading...</p>
      </div>
    </section>
  );
}