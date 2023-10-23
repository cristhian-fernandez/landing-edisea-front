import { useState } from "react";
import styles from './../../../styles/AccordionList.module.css';
import { ArrowBottom } from "../../icons";

interface AccordionListItem {
  title: string;
  description: string;
}

interface AccordionListProps {
  items: AccordionListItem[];
}

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.accordion_item} ${index === openIndex ? styles.active : ''}`}>
          <div className={styles.accordion_title} onClick={() => toggleAccordion(index)}>
            {item.title}
            <span className={`${styles.icon} ${index === openIndex ? styles.icon_up : styles.icon_down}`}><ArrowBottom fill={index === openIndex ? 'var(--white-color)' : 'var(--first-color)'} style={{paddingBottom: '4px', scale: '1.1'}}/></span>
          </div>
          {index === openIndex && <div className={styles.accordion_content}>{item.description}</div>}
        </div>
      ))}
    </div>
  )
}

export default AccordionList