import React from "react";

type BadgeComponentProps = {
  label?: string;
  className?: string;
  variant?: "solid" | "outline";
};

const BadgeComponent = ({ label, className, variant }: BadgeComponentProps) => {
  const getVariantClass = () => {
    switch (variant) {
      case "solid":
        return "border";
        break;

      case "outline":
        return "bg";
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={`inline-block px-2 py-1 rounded-full text-sm font-semibold cursor-pointer ${className} ${getVariantClass()}`}
    >
      {label}
    </div>
  );
};

export default BadgeComponent;
