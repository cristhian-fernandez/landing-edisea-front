import { useState, useEffect } from 'react';
import styles from  './../../../styles/Menu.module.css';
import { ArrowRight, ArrowLeft } from './../../icons';

const MenuSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleNames, setVisibleNames] = useState(5);
  const [selectedCareer, setSelectedCareer] = useState(0);

  const handleCareer = (id: any) => {
    console.log(`Carrera seleccionada: ${id}`);
    setSelectedCareer(id);
  };

  const handleSlide = (direction: any) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > careersData.data.careers.length - visibleNames) {
      newIndex = careersData.data.careers.length - visibleNames;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setVisibleNames(2);
      } else if (screenWidth < 950) {
        setVisibleNames(3);
      } else if (screenWidth < 1050) {
        setVisibleNames(4);
      } else {
        setVisibleNames(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.slider_container}>
      <button className={styles.slider_button} onClick={() => handleSlide(-1)}>
        <ArrowLeft/>
      </button>
      <div className={styles.slider_careers}>
        {careersData.data.careers.slice(currentIndex, currentIndex + visibleNames).map((career) => (
          <div
            key={career.id}
            className={`${styles.career} ${selectedCareer === career.id ? styles.selected_career : ''}`}
            onClick={() => handleCareer(career.id)}
          >
            {career.name}
          </div>
        ))}
      </div>
      <button className={styles.slider_button} onClick={() => handleSlide(1)}>
        <ArrowRight />
      </button>
    </div>
  );
}

export default MenuSlider

const careersData = {
  data: {
    careers: [
      {
        id: 0,
        name: "Mostrar todos",
        active: true
      },
      {
          id: 1,
          name: "Psicología",
          active: true
      },
      {
          id: 2,
          name: "Arquitectura",
          active: true
      },
      {
          id: 3,
          "name": "Derecho",
          "active": true
      },
      {
          id: 4,
          name: "Ing. Industrial",
          active: true
      },
      {
          id: 5,
          name: "Ing. Sistemas",
          active: false
      },
      {
          id: 6,
          name: "Marketing",
          active: false
      },
      {
          id: 7,
          name: "Administración",
          active: false
      },
      {
          id: 8,
          name: "Economía",
          active: false
      }
    ],
  },
};