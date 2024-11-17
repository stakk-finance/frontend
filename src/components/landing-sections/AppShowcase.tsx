import AppShowcaseLayout from "./AppShowcaseSections/AppShowcaseLayout";

export default function AppShowcaseSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start -mt-12 px-4 lg:px-0">
      <div className="w-full lg:w-lg rounded-xl border border-border-light/50 h-mainSection backdrop-blur bg-white/[0.08] flex items-center justify-center relative p-1">
        {/* <div className="hidden sm:block absolute bg-white w-full h-full z-0 opacity-30 blur-3xl -inset-1 rounded-xl animate-gradient bg-gradient-to-r from-[#f12711] via-[#f5af19] to-[#f12711]"> */}
        {/* </div> */}

        <AppShowcaseLayout />
      </div>
    </div>
  );
}
