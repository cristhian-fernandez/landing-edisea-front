import styles from './../../../styles/Sections.module.css'
import apiCarrousel from './../../../api/apiCarrousel.json'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDataCarrousel, getMessagesModal } from './../../../redux/actions';
import Modal from '../../modal/Modal';


const Information = () => {
  const dataCarrousel = useSelector((state:any) => state.dataCarrousel);
  const messagesModal = useSelector((state:any) => state.messagesModal);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('Te ayudamos a encontrar tu carrera porque creemos en un mundo donde todos hacen lo que aman y se mueven con propósito.');
  const dispatch:any = useDispatch();
  useEffect(() => {
      dispatch(getDataCarrousel());
      dispatch(getMessagesModal());
  }, [dispatch]);

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messagesModal.length);
    return messagesModal[randomIndex];
  };

  const openModal = () => {
    const randomMessage = getRandomMessage();
    setModalContent(randomMessage);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.section_information}>
      <h2 className={`${styles.section_title} ${styles.underline}`}>Una oportunidad que cambia tu vida</h2>
      <h3 className={styles.section_subtitle}>¿Qué quieres lograr?</h3>
      {
        dataCarrousel && Object.entries(dataCarrousel).length !== 0 && (
          <div className={styles.information_carrousel}>
            <div className={styles.carrousel_data}>
              <div className={styles.carrousel_train}>
                {dataCarrousel.rowOne.map((el:string, index:number) => (
                  <span key={index} onClick={openModal}>{el}</span>
                ))}
              </div>
              {/* Clona los elementos para que aparezcan al final como un tren que va en círculo */}
              <div className={styles.carrousel_train}>
                {dataCarrousel.rowOne.map((el:string, index:number) => (
                  <span key={index + dataCarrousel.rowOne.length} onClick={openModal}>{el}</span>
                ))}
              </div>
            </div>

            <div className={styles.carrousel_data}>
              <div className={styles.carrousel_train_reverse}>
                {apiCarrousel.data.rowTwo.map((el, index) => (
                  <span key={index} onClick={openModal}>{el}</span>
                ))}
              </div>
              <div className={styles.carrousel_train_reverse}>
                {apiCarrousel.data.rowTwo.map((el, index) => (
                  <span key={index + apiCarrousel.data.rowOne.length} onClick={openModal}>{el}</span>
                ))}
              </div>
            </div>

            <div className={styles.carrousel_data}>
              <div className={styles.carrousel_train}>
                {apiCarrousel.data.rowThree.map((el, index) => (
                  <span key={index} onClick={openModal}>{el}</span>
                ))}
              </div>
              <div className={styles.carrousel_train}>
                {apiCarrousel.data.rowThree.map((el, index) => (
                  <span key={index + apiCarrousel.data.rowOne.length} onClick={openModal}>{el}</span>
                ))}
              </div>
            </div>
          </div>
        )
      }
      {modalVisible && <Modal onClose={closeModal} content={modalContent}/>}
    </div>
  );
};

export default Information;


