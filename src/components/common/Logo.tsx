import Image from "next/image";

type LogoProps = {
  size?: number;
};

export default function StakkLogo({ size }: LogoProps) {
  return (
    <Image
      src={"/images/logo.png"}
      alt="logo"
      height={size ?? 30}
      width={size ?? 30}
    />
  );
}
