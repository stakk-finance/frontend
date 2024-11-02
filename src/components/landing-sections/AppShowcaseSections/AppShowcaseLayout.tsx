import AppShowcaseSidebar from "./AppShowcaseSidebar"

export default function AppShowcaseLayout() {
  return (
    <div className="w-full h-full rounded-xl flex flex-row justify-start items-center bg-tranparent z-20 text-center overflow-hidden bg-background-darker border-border border">
      <AppShowcaseSidebar />

      <div className="flex-1 bg-transparent h-full flex justify-center items-center">
        ONGOING: The dashboard panel is currently being cooked... (dev cooking)
      </div>
    </div>
  );
}
