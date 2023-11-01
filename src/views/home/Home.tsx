// import Challenges from "../../components/sections/home/Challenges";
// import Banner from "../../components/banner/Banner";
// import Information from "../../components/sections/home/Information";
import Cta from "../../components/sections/home/Cta";
import ChallengeProfessional from "../../components/sections/home/ChallengeProfessional";
import Questions from "../../components/sections/home/Questions";
import { Helmet } from 'react-helmet-async';
import { config } from "../../api/apiConfig";

const Home = (): JSX.Element => {
  return(
    <>
      <Helmet>
        <title>{config.PAGE_TITLE}</title>
        <meta name={config.PAGE_NAME} content={config.PAGE_CONTENT} />
        <meta name="keywords" content={config.PAGE_KEYWORDS} />
        <meta property="og:title" content={config.SOCIAL_NETWORKS_TITLE} />
        <meta property="og:description" content={config.SOCIAL_NETWORKS_DESCRIPTION} />
        <meta property="og:image" content={config.SOCIAL_NETWORKS_IMAGE} />
      </Helmet>
      {/* <Banner soon={false}/> */}
      <ChallengeProfessional />
      {/* <Information />*/}
      {/* <Challenges /> */}
      <Questions />
      <Cta /> 
    </>
  )
}

export default Home;