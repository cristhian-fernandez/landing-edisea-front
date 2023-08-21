import { useState } from "react";
import ChallengeCards from "../challengeCards/ChallengeCards";
import styles from "./../../styles/Tabs.module.css"
import { useDispatch } from "react-redux";
import { searchChallenges, searchWords, selectCareer } from "../../redux/actions";

const TabsChallenges = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const dispatch:any = useDispatch();

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
    dispatch(selectCareer(0));
    dispatch(searchWords(''));
    dispatch(searchChallenges(''));
  };

  return (
    <div className={styles.tabs_container}>
      <div className={styles.tab_titles}>
        <div
          className={`${styles.tab_title} ${selectedTab === 0 ? styles.active : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Lo nuevo en Edisea
        </div>
        <div
          className={`${styles.tab_title} ${selectedTab === 1 ? styles.active : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Próximos retos
        </div>
      </div>
      <div className={styles.tab_content}>
        {selectedTab === 0 ? <ChallengeCards tabsChallenge = {0} /> : <ChallengeCards tabsChallenge = {1}/>}
      </div>
    </div>
  );
}

export default TabsChallenges