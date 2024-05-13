import React, { useState } from 'react';
import DynamicAccordionItem from './index';

type AccordionListProps = {
  items?: { title: string; content: string; }[];
};

const Accordion = ({ items }: AccordionListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <ul className="accordion-list">
        {items?.map((story, index) => {
          return (
            <li className="accordion-list__item" key={index}>
              <DynamicAccordionItem
                {...story}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
