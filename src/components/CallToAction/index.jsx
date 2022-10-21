import cadeirante from "../../assets/icons/cadeirante.png";
import corredor from "../../assets/icons/corredor.png";
import staff from "../../assets/icons/staff.png";
import doador from "../../assets/icons/doador.png";
import {
  Wrapper,
  Section,
  Title,
  Images,
  Participant,
  Button,
} from "./callToAction";

export function CallToAction() {
  return (
    <Wrapper>
      <Title>Participe desta ação</Title>

      <Section>
        <Participant>
          <Images src={cadeirante} alt="Ilustração de um cadeirante" />
          <p style={{marginTop: '1.5rem'}}>
            Venha participar desta emoção e sentir o vento na cara e a sensação
            de liberdade que a corrida de rua proporciona. o sorriso no rosto
            vira naturalmente.
          </p>
          <a href='http://pernas.iluria.com/pd-925578-participacao-de-cadeirantes-em-corridas-de-rua-gratuito-cadastre-se.html?ct=15a963&p=1&s=1' target='_blank' ><Button>INSCREVA-SE</Button></a>
        </Participant>
        <Participant>
          <Images src={corredor} alt="Ilustração de um corredor" />
          <p style={{marginTop: '2rem'}}>
            Corredores conduzirão um cadeirante. Proporcione esta
            emoção aos cadeirantes. Eles poderão sentir o vento no rosto e a
            sensação de liberdade que a corrida de rua proporciona.
          </p>
          <a href='http://pernas.iluria.com/pd-92574c-corredores-de-rua-no-pernas-pra-que-te-quero-curitiba.html?ct=15a963&p=1&s=1' target='_blank' ><Button>INSCREVA-SE</Button></a>
        </Participant>
        <Participant>
          <Images src={staff} alt="Ilustração de um staff" />
          <p style={{marginTop: '3rem'}}>
            Viva a experiencia de participar da organização no dia da corrida. A
            emoção é contagiante.
          </p>
          <a href='http://pernas.iluria.com/pd-92575e-staff-venha-ajudar-a-acao-de-inclusao-acontecer.html?ct=15a963&p=1&s=1' target='_blank' ><Button>INSCREVA-SE</Button></a>
        </Participant>
        <Participant>
          <Images src={doador} alt="Ilustração de um doador" />
          <p style={{marginTop: '1.5rem'}}>
            Faça parte desta história emocionante que propicia o sorriso no
            rosto de corredores e cadeirantes. Contribua com quanto vale e ajude
            a espalhar sorrisos.
          </p>
          <a href='http://pernas.iluria.com/pd-8f09dd-contribua-quanto-vale.html?ct=15a963&p=1&s=1' target='_blank' ><Button>DOE AGORA</Button></a>
        </Participant>
      </Section>
    </Wrapper>
  );
}
