import Banner from "../../components/banner/Banner"
import ButtonPreInscription from "../../components/button/ButtonPreInscription"
import Countdown from "../../components/countdown/Countdown"

const Soon = () => {
  return (
    <>
      <Banner soon={true}/>
      <Countdown />
      <ButtonPreInscription titleButton={'Formulario Pre Inscripción'}/>
    </>
  )
}

export default Soon