import { Fragment } from "react";

type HeaderMenuItem = {
  name: string;
  link?: string;
}

export default function HeaderMenu() {
  const headerItems: HeaderMenuItem[] = [
    {
      name: "Home",
    },
    {
      name: "Features"
    },
    {
      name: "How It works"
    },
    {
      name: "FAQs"
    },
    {
      name: "Contact"
    }
  ]

  return (
    <div className="flex-1 flex flex-row justify-center items-center gap-8">
      {headerItems.map(headerItem => (
        <Fragment key={`header-item-${headerItem.name}`}>
          <span className="hover:opacity-70 duration-300 text-xs cursor-pointer">{headerItem.name}</span>
        </Fragment>
      ))}
    </div>
  );
}
