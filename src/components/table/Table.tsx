import styles from  './../../styles/Table.module.css';

interface TableProps {
  data: {
    head: { [key: string]: any }[];
    body: { [key: string]: any }[];
  };
}

const Table: React.FC<TableProps> = ({ data }) => {
  const { head, body } = data;
  const columnKeys = head.map((item) => Object.keys(item)[0]); // Obtén las claves de los objetos

  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            {columnKeys.map((key, index) => (
              <th key={index}>{head[index][key]}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnKeys.map((key, columnIndex) => (
                <td key={columnIndex}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;