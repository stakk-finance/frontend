import StakkLogoWide from "./LogoWide";

export default function Header() {
  return (
    <div
      className="w-full min-h-header border-border border-b px-4 flex justify-center items-center py-3"
    >
      <div className="max-w-xl flex-1 flex flex-row justify-start">
        <StakkLogoWide />
      </div>
    </div>
  );
}
