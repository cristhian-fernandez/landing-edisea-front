import styles from './../../styles/Button.module.css';
const ButtonBanner = (props: any) => {
    const refSeccion = () => {
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