import Challenges from "../../components/sections/home/Challenges";
import Banner from "../../components/banner/Banner";
import Information from "../../components/sections/home/Information";

const Home = (): JSX.Element => {
  return(
    <>
      <Banner />
      <Information />
      <Challenges />
      <h1>Home</h1>
    </>
  )
}

export default Home;