
import styles from './../../styles/Footer.module.css';
import { FacebookIcon, InstagramIcon, WhatsappIcon, TiktokIcon, YoutubeIcon } from './../icons'


const Footer = () => {
    let urlFacebook = 'https://www.facebook.com/edisea.profesional';
    let urlInstagram = 'https://www.instagram.com/edisea_profesional/';
    let urlTiktok = 'https://www.tiktok.com/@clubedisea';
    let urlWhatsapp = `https://api.whatsapp.com/send?phone=+51942753436&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20los%20retos%20profesionales%20en%20Edisea.`;

    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <h3>Escríbenos</h3>
                <div onClick={() => window.open(urlWhatsapp)}>
                    <span><WhatsappIcon /></span>
                    <span className={styles.phone}>+51 942 753 436</span>
                </div>
            </div>
            <div className={styles.footer_brands}>
                <div className={styles.brands}>
                    <span onClick={() => window.open(urlFacebook)}><FacebookIcon /></span>
                    <span onClick={() => window.open(urlInstagram)}><InstagramIcon /></span>
                    <span onClick={() => window.open(urlTiktok)}><TiktokIcon /></span>
                    <span><YoutubeIcon /></span>
                </div>
                <div className={styles.copy} >
                    <span>Copyright © 2022 | Desarrollado por Edisea</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;