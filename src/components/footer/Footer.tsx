
import { config } from '../../api/apiConfig';
import styles from './../../styles/Footer.module.css';
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from './../icons'


const Footer = () => {
    let urlFacebook = 'https://www.facebook.com/edisea.profesional';
    let urlInstagram = 'https://www.instagram.com/edisea_profesional/';
    let urlTiktok = 'https://www.tiktok.com/@clubedisea';
    let urlWhatsapp = `https://api.whatsapp.com/send?phone=+${config.NUMBER_WHATSHAPP_MESSAGE}&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20los%20retos%20profesionales%20en%20Edisea.`;

    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <h3>Escríbenos</h3>
                <div onClick={() => window.open(urlWhatsapp)}>
                    <span className={styles.phone}>+{config.NUMBER_WHATSHAPP_TEXT}</span>
                </div>
            </div>
            <div className={styles.footer_brands}>
                <div className={styles.brands}>
                    <span onClick={() => window.open(urlFacebook)}><FacebookIcon style={{scale: '0.7'}}/></span>
                    <span onClick={() => window.open(urlInstagram)}><InstagramIcon style={{scale: '0.7'}}/></span>
                    <span onClick={() => window.open(urlTiktok)}><TiktokIcon style={{scale: '0.7'}}/></span>
                    <span><YoutubeIcon style={{scale: '0.7'}}/></span>
                </div>
                <div className={styles.contact_line}></div>
                <div className={styles.copy} >
                    <span>© 2023 | Hecho con 🤍 por Edisea</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;