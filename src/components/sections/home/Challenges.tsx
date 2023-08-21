// import ChallengeCards from '../../challengeCards/ChallengeCards'
import TabsChallenges from '../../tabs/TabsChallenges'
import MenuSlider from './../../../components/menu/menuSlider/MenuSlider'
import SearchBar from './../../../components/searchBar/SearchBar'
import styles from './../../../styles/Sections.module.css'
import Benefits from './Benefits'

const Challenges = () => {
  return (
    <div className={styles.section_challenges}>
      <h2 className={styles.section_title}>Explora nuestros retos en vivo</h2>
      <SearchBar />
      <MenuSlider />
      <TabsChallenges />
      <Benefits />
    </div>
  )
}

export default Challenges