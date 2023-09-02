import { useDispatch, useSelector } from "react-redux";
import { ChallengesProps } from "../../types"
import styles from './../../styles/PayChallengeCards.module.css'
import { addToCart } from "../../redux/actions";

const PayChallengeCard = ({idChallenge, name, urlImagen, nameCareer, challengeDate}: ChallengesProps) => {
  const cartStorage = JSON.parse(window.localStorage.getItem('cart') || '[]');
  const dispatch = useDispatch();

  
  const challengeCart = cartStorage.find((challenge: ChallengesProps) => challenge.idChallenge === idChallenge);
  const onClickAddCart = (e: any) => {
    e.preventDefault();
    const addChallengeCart = {
        idChallenge: idChallenge,
        name: name,
        nameCareer: nameCareer,
        cantidad: 1
    }
    if (!challengeCart) {
      dispatch(addToCart(addChallengeCart));
    }
  }

  // const cart = useSelector((state:any) => state.cart);

  // console.log('cart:::', cart)
  return (
    <>
      {
        idChallenge ? (
          <div className={styles.challenge_card}>
            <div className={styles.challenge_image}>
              <img src={urlImagen} alt={name}  />
              <span className={styles.challenge_name_career}>{nameCareer}</span>
              <span className={styles.challenge_date}>{String(challengeDate)}</span>
            </div>
            <div className={styles.challenge_card_body}>
              <p className={styles.challenge_name}>{name}</p>
              <button className={`${styles.challenge_button} ${challengeCart ? styles.challenge_added_button : styles.challenge_add_button}`} onClick={onClickAddCart}>{challengeCart ? 'AGREGADO' : 'AGREGAR'}</button>
            </div>
          </div>
        ) : ''
      }
    </>
  )
}

export default PayChallengeCard