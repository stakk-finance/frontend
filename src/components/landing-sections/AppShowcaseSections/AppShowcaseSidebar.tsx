import StakkLogo from "@/components/common/Logo";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function AppShowcaseSidebar() {
  return (
    <div className="hidden md:flex h-full w-[50px] border-r border-border bg-background flex-col items-center justify-between shadow-lg">
      <div className="pt-3 flex flex-col gap-3">
        <div className="">
          <StakkLogo />
        </div>
      </div>
      <div className="h-12 w-full flex justify-center items-center p-2">
        <div className="scale-[0.8]">
          <Avatar>
            <AvatarImage src="/images/almadendj_dev.jpg" />
            <AvatarFallback>DJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
