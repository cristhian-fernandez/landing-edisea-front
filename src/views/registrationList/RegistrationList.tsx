import { useEffect, useState} from "react";
import Table from "../../components/table/Table";
import styles from  './../../styles/PageStyles.module.css';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import dbConnected from './../../dataBase/firebase';
const db = getFirestore(dbConnected)

const RegistrationList = () => {

  const [bodyData, setBodyData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'User'));
        const data:any = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data()); // Agrega cada documento como un objeto a la matriz data
        });
        setBodyData(data); // Actualiza el estado con los datos de Firebase
      } catch (error) {
        console.error('Error al obtener datos de Firebase:', error);
      }
    };

    fetchData(); // Llama a la función para obtener los datos
  }, []);

  // const bodyData = [
  //   { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Julio Mendoza', 
  //     'country':'Perú', 'phone' : '51975040300', 'email': 'julio_mendoza@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': 'anthony01', 'payment': '35.00' },
  //   { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Jesus Rolando Sanchez   Silva', 
  //     'country':'Perú', 'phone' : '51975040300', 'email': 'jesus_sanchezsilva@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': '', 'payment': '35.00' },
  //   { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Julio Mendoza', 
  //     'country':'Perú', 'phone' : '51975040300', 'email': 'julio_mendoza@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': 'anthony01', 'payment': '35.00' },
  //   { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Julio Mendoza', 
  //     'country':'Perú', 'phone' : '51975040300', 'email': 'julio_mendoza@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': 'anthony02', 'payment': '35.00' },
  // ];

  const bodyDataWithId = bodyData.map((record:any, index) => {
    return { ...record, 'idRegistration': index + 1 };
  });
  
  const headData = [
    { 'idRegistration': 'Orden'},
    { 'date': 'Fecha'},
    { 'hour': 'Hora'},
    { 'name': 'Nombres'},
    { 'country': 'País'},
    { 'phone': 'Celular'},
    { 'email': 'Email'},
    { 'career': 'Carrera'},
    { 'challenge': 'Reto'},
    { 'coupon': 'Cupon'},
    { 'payment': 'Pago'},
  ]
  const dataTable = {
    head: headData,
    body: bodyDataWithId,
  };

  return (
    <div>
      <h1 className={styles.title}>Lista de Inscritos</h1>
      <Table data={dataTable} />
    </div>
  )
}

export default RegistrationList