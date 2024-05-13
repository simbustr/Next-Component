import React from "react";

const CheckboxComponent = () => {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"/>
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Accept terms and conditions </label>
    </div>
  );
};

export default CheckboxComponent;
