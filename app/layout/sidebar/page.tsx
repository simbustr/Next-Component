import React from "react";
import SideBarItem from "./SideBar";

type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

const SideBarPage = () => {
  const sideNavItems: SideNavItem[] = [
    { title: "Home", path: "/" },
    { title: "InputComponent", path: "/pages/InputComponent" },
    { title: "ButtonComponent", path: "/pages/ButtonComponent" },
   
  ];

  return (
    <div>
      <SideBarItem items={sideNavItems} />
    </div>
  );
};

export default SideBarPage;
