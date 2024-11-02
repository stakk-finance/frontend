export default function AppShowcaseSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start -mt-12 px-4 lg:px-0">
      <div className="w-full lg:w-lg rounded-xl border border-border-light/50 h-mainSection backdrop-blur bg-white/[0.08] flex items-center justify-center relative p-2">
        <div className="absolute bg-white w-full h-full z-0 opacity-30 blur-xl -inset-0.5 rounded-xl animate-gradient bg-gradient-to-r from-[#e96443] via-primary to-[#e96443]">
        </div>
        <div className="w-full h-full rounded-xl flex justify-center items-center bg-background z-20 px-6 text-center">
          This is where we put samples of our app
        </div>
      </div>
    </div>
  );
}
