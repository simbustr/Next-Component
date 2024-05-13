import React, { useState } from "react";

type DynamicAccordionProps = {
  title?: string;
  content?: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
};

const DynamicAccordionItem = ({ title, content, isOpen, onClick }: DynamicAccordionProps) => {
  return (
    <div>
      <div className="accordion-item cursor-pointer" onClick={onClick}>
        <div className="py-4 font-medium border-b ">{title}</div>
        {isOpen && (
          <div className="accordion-content pb-4 pt-4">{content}</div>
        )}
      </div>
    </div>
  );
};

export default DynamicAccordionItem;
