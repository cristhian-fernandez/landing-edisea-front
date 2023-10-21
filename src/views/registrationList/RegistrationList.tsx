import Table from "../../components/table/Table";
import styles from  './../../styles/PageStyles.module.css';

const RegistrationList = () => {

  const bodyData = [
    { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Julio Mendoza', 
      'country':'Perú', 'phone' : '51975040300', 'email': 'julio_mendoza@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': 'anthony01', 'payment': '35.00' },
    { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Jesus Rolando Sanchez   Silva', 
      'country':'Perú', 'phone' : '51975040300', 'email': 'jesus_sanchezsilva@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': '', 'payment': '35.00' },
    { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Julio Mendoza', 
      'country':'Perú', 'phone' : '51975040300', 'email': 'julio_mendoza@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': 'anthony01', 'payment': '35.00' },
    { 'date': '19/10/2023', 'hour': '07:36 PM', 'name': 'Julio Mendoza', 
      'country':'Perú', 'phone' : '51975040300', 'email': 'julio_mendoza@gmail.com', 'career': 'Psicologia', 'challenge': 'Reto de Psicología', 'coupon': 'anthony02', 'payment': '35.00' },
  ];

  const bodyDataWithId = bodyData.map((record, index) => {
    return { ...record, 'idRegistration': index + 1 };
  });
  
  const headData = [
    { 'idRegistration': 'Código'},
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