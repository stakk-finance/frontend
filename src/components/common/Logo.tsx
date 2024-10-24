import Image from "next/image";

export default function StakkLogo() {
  return (
    <Image src={'/images/logo.png'} alt="logo" height={30} width={30} />
  );
}
