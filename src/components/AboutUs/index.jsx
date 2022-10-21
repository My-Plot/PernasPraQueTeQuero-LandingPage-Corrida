import quemsomos from '../../assets/quemsomos1.jpg';
import {Wrapper, Content, Imagem, Title} from './aboutUs.js'


export function AboutUs(){
  return(
   <Wrapper>
    <Content>
      <Title>Quem somos</Title>
      <p>Pernas, para que te quero! é uma ação de inclusão social de crianças e adultos em cadeiras de rodas. Para isso, utilizamos a corrida de rua como forma de gerar pertencimento a essas pessoas com deficiência. A Ação é realizada dentro de uma corrida de rua já organizada e apoiada pela Secretaria de Esporte Lazer do município, com parceria de uma organização social. Os participantes nas cadeiras de rodas são conduzidos por equipes de corredores que se revezam entre si.</p><br />
      <p>Pernas, para que te quero! é uma ação de inclusão social de crianças e adultos em cadeiras de rodas. Para isso, utilizamos a corrida de rua como forma de gerar pertencimento a essas pessoas com deficiência.</p>
    </Content>
    <Imagem src={quemsomos} alt="" />
   </Wrapper>
  )};
