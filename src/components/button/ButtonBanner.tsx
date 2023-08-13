import styles from './../../styles/Button.module.css';
const ButtonBanner = (props: any) => {
// function ButtonBanner(props) {
    const refSeccion = () => {
        // if(props.referencia) { props.referencia.current.scrollIntoView()}
        console.log('hizo click')
    }
    return (
        <div>
            <button className={styles.button} onClick={refSeccion}>
                {props.titleButton}
            </button>  
        </div>
    );
}

export default ButtonBanner;