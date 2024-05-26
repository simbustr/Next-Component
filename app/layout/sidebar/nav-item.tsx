import React from "react";

type NavbarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

const SideBarItem = ({ title, path, icon }: NavbarItem) => {
  return (
    <div>
      <div className={`my-1 p-3 rounded flex items-cente bg-gray-200`}>
        {icon && <span className="mr-2">{icon}</span>}
        <a href={path} className="text-sm font-semibold">
          {title}
        </a>
      </div>
    </div>
  );
};

export default SideBarItem;
