import imagem from '../../assets/anteriores/outras.jpg';
import imagem1 from '../../assets/anteriores/outras1.jpg';
import imagem2 from '../../assets/anteriores/outras2.jpg';
import imagem3 from '../../assets/anteriores/outras3.jpg';
import imagem4 from '../../assets/anteriores/outras4.jpg';
import imagem5 from '../../assets/anteriores/outras5.jpg';
import {Wrapper, Section, Title, Image} from './lastRunning'


export function LastRunning(){
  return(
   <Wrapper>
    <Title>Veja como foi nossa última corrida</Title>
    <Section>
      <Image src={imagem} alt="Corredores correndo com cadeirante" />
      <Image src={imagem1} alt="Corredores correndo com cadeirante" />
      <Image src={imagem2} alt="Corredores correndo com cadeirante" />
      <Image src={imagem3} alt="Corredores e cadeirante mostrando as medalhas conquistadas" />
      <Image src={imagem4} alt="Corredores na concentração da largada" />
      <Image src={imagem5} alt="Corredores correndo com cadeirante" />
    </Section>
   </Wrapper>
  )};
