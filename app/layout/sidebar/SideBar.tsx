import React from "react";
import SideBarItem from "./nav-item";
import { usePathname } from "next/navigation";

type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

type SideBarProps = {
  items: SideNavItem[];
};

const SideBar = ({ items }: SideBarProps) => {

    const pathname = usePathname();

  return (
    <div>
      {items.map((item, index) => (
        <SideBarItem
        
          key={index}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default SideBar;
