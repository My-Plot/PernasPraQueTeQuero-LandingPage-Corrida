import { Section, Title, InputButton, Input, Button } from './newsLetter'


export function NewsLetter(){
  return(
   <Section>
    <Title>RECEBA NOVIDADES</Title>
    <InputButton>
    <Input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
    <Button>CADASTRAR</Button>
    </InputButton>
    
   </Section>
  )};
