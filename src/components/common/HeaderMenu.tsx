import { Fragment } from "react";

type HeaderMenuItem = {
  name: string;
  sectionId: string;
};

export default function HeaderMenu() {
  const headerItems: HeaderMenuItem[] = [
    {
      name: "Features",
      sectionId: "features",
    },
    {
      name: "Why Stakk?",
      sectionId: "why-stakk",
    },
    {
      name: "Partners",
      sectionId: "partners",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1 flex flex-row justify-center items-center gap-8 md:flex hidden">
      {headerItems.map((headerItem) => (
        <Fragment key={`header-item-${headerItem.name}`}>
          <button
            onClick={() => scrollToSection(headerItem.sectionId)}
            className="hover:opacity-70 duration-300 text-xs cursor-pointer text-secondary hover:text-primary transition-colors"
          >
            {headerItem.name}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
