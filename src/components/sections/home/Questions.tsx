import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccordionList } from "../../../redux/actions";
import AccordionList from "../../accordion/accordionList/AccordionList";
import styles from "../../../styles/Sections.module.css"

const Questions = () => {
  const accordionList = useSelector((state:any) => state.accordionList);
  const dispatch:any = useDispatch();
  useEffect(() => {
    dispatch(getAllAccordionList());
  }, [dispatch]);

  return (
    <div className={styles.section_benefits}>
      {/* <div>Titulo</div> */}
      <h2 className={`${styles.section_title} ${styles.underline}`}>¿Tienes dudas? ¡Las respondemos!</h2>
      <AccordionList items={accordionList} />
    </div>
  )
}

export default Questions