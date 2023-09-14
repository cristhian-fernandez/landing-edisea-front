import Challenges from "../../components/sections/home/Challenges";
import Banner from "../../components/banner/Banner";
import Information from "../../components/sections/home/Information";
import Cta from "../../components/sections/home/Cta";

const Home = (): JSX.Element => {
  return(
    <>
      <Banner soon={false}/>
      <Information />
      <Challenges />
      <Cta />
    </>
  )
}

export default Home;