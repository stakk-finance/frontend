import AppShowcaseLayout from "./AppShowcaseSections/AppShowcaseLayout";

export default function AppShowcaseSection() {
  return (
    <section className="w-full py-content">
      <div className="w-full lg:w-lg mx-auto rounded-xl border border-border-light/50 h-mainSection backdrop-blur bg-white/[0.08] flex items-center justify-center relative p-1">
        <AppShowcaseLayout />
      </div>
    </section>
  );
}
