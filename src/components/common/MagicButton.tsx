import { Button } from "../ui/button";

export default function MagicButton() {
  return (
    <div className="group relative inline-block">
      <div className="hidden sm:block absolute -inset-0.5 rounded-xl blur-sm opacity-50 animate-gradient bg-gradient-to-r from-[#e96443] via-primary to-[#e96443] 
              group-hover:-inset-1 group-hover:blur-lg transition duration-300 ease-in-out" />
      <Button variant={"secondary"} className="relative bg-background">Launch App</Button>
    </div>
  );
}
