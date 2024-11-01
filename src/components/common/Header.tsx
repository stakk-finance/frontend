import StakkLogoWide from "./LogoWide";

export default function Header() {
  return (
    <div className="w-full justify-center items-center flex">
      <div
        className="min-h-header w-lg border-border-light border p-4 fixed top-4 rounded-2xl backdrop-blur-sm bg-[#777880]/30"
      >
        <StakkLogoWide />
      </div>
    </div>
  );
}
