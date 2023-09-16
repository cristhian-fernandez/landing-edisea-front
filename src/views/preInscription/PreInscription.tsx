import { useState } from 'react';
import styles from './../../styles/PreInscription.module.css';
import stylesLoader from './../../styles/Loader.module.css';

const PreInscription = () => {
  const [loading, setLoading] = useState(true);
  const handleIframeLoad = () => {
    setLoading(false);
  };
  return (
    <div>
      {loading && <div className={styles.container_loader}>
        <div className={stylesLoader.loader_content}>
            <h2>Cargando ...</h2>
            <span className={stylesLoader.loader}></span>
        </div>  
      </div>}
      <iframe  
        src="https://airtable.com/embed/appKGIOYJh5qNmzHd/shrS6Ng64c54c1PxQ?backgroundColor=purple" frameBorder="0" 
        width="100%" 
        className={styles.iframe_preinscription}
        onLoad={handleIframeLoad} 
      >  
      </iframe>
    </div>
  )
}

export default PreInscription