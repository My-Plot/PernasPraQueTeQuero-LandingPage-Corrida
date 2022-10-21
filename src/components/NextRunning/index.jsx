import { Section, TextImage, Imagem, Title, Text } from "./nextRunning";
import foto from "../../assets/fotoInstPloy2.jpg";

export function NextRunning() {
  return (
    <Section>
      <TextImage>
        <Title>PROXIMA CORRIDA</Title>
        <Imagem
          src={foto}
          alt="Imagem de uma cadeira de rodas com o ploy dois"
        />
      </TextImage>

      <Text>
        <p>
          Nossa próxima corrida acontecerá no dia 13 de novembro de 2022 no
          Parque Iguaçu em Curitiba, localizado na avenida Cândido Jartmann.
        </p>
        <br />
        <p>
          Nesta 18º etapa do Pernas para que te quero, 3 a 5 corredores se
          revezam conduzindo um cadeirante.
        </p>
        <br />
        <p>
          As adesões ocorrerão entre
          10/10/2022 até 28/10/2022 e todos os participantes de todas as modalidades receberão
          kits com camisetas e as cadeiras de rodas serão adaptadas com
          dispositivo de terceira roda e manipula estendida que ofereceram maior
          segurança. Fique tranquilo, fazemos um match das equipes, mas se você
          quer correr com alguém, é só avisar. 
        </p>
      </Text>
    </Section>
  );
}
