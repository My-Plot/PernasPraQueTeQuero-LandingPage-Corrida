import {
  HeroText,
  Wrapper,
  Image,
  HeroTextInner,
  Button, Calendary
} from "./hero.js";
import imgHero from "../../assets/hero.jpg";
import calendary from "../../assets/calendario.svg";

export function Hero() {
  return (
    <Wrapper>
      <div>
        <Image
          src={imgHero}
          alt="Foto de corredores correndo e empurrando cadeirante."
        />
      </div>


      <HeroText>
        <Calendary src={calendary} alt="Calendário com a data da corrida" />
       
        <HeroTextInner>
          <h2>CORRIDA DE RUA PARA PESSOAS EM</h2>
          <h1>
            <strong>CADEIRA DE RODAS</strong>
          </h1>
          <p>CONDUZIDAS POR CORREDORES AMADORES</p>
          <a
            href="http://pernas.iluria.com/garanta-sua-participacao-ct-15a963"
            target="_blank"
          >
            <Button>QUERO PARTICIPAR</Button>
          </a>
        </HeroTextInner>
      </HeroText>
    </Wrapper>
  );
}
