import ButtonBanner from '../button/ButtonBanner';
import styles from './../../styles/Banner.module.css';
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_picture}>
        <picture >
          <source
            media="(min-width: 1366px)"
            srcSet="https://www.crehana.com/static/img/crehana-lives/banner-1920.png?fm=webp&fit=crop&dpr=1 1x, https://www.crehana.com/static/img/crehana-lives/banner-1920.png?fm=webp&fit=crop&dpr=2 2x"
            type="image/webp"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="https://www.crehana.com/static/img/crehana-lives/banner-1440.png?fm=webp&fit=crop&dpr=1 1x, https://www.crehana.com/static/img/crehana-lives/banner-1440.png?fm=webp&fit=crop&dpr=2 2x"
            type="image/webp"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://www.crehana.com/static/img/crehana-lives/banner-1024.png?fm=webp&fit=crop&dpr=1 1x, https://www.crehana.com/static/img/crehana-lives/banner-1024.png?fm=webp&fit=crop&dpr=2 2x"
            type="image/webp"
          />
          <source
            srcSet="https://www.crehana.com/static/img/crehana-lives/banner-320.png?fm=webp&fit=crop&dpr=1 1x, https://www.crehana.com/static/img/crehana-lives/banner-320.png?fm=webp&fit=crop&dpr=2 2x"
            media="(max-width: 600px)"
            type="image/webp"
          />
          <img
            className=""
            srcSet="https://www.crehana.com/static/img/crehana-lives/banner-320.png?fit=crop&dpr=1 1x, https://www.crehana.com/static/img/crehana-lives/banner-320.png?fit=crop&dpr=2 2x"
            src="https://www.crehana.com/static/img/crehana-lives/banner-320.png?fit=crop"
            alt="Crehana Live!"
            decoding="async"
          />
        </picture>
      </div>
      <div className={styles.banner_description}>
        <div className={styles.banner_title}>
          <h1>Retos Profesionales</h1>
          <div className={styles.banner_live}><span className={styles.live__icon}></span>LIVE</div>
        </div>
        <h2>Una nueva manera de definir tu carrera antes de entrar a la universidad</h2>
        <ButtonBanner titleButton={'Ver todos nuestros retos'}/>
      </div>
    </div>
  )
}
export default Banner;