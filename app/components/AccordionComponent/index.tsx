import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionComponent = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="accordion">
        <button onClick={toggleAccordion}>{title}</button>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    </div>
  );
};

export default AccordionComponent;
