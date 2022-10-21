import { Section, Calls, Button, Number, Title, Span } from "./helpUs";

export function HelpUs() {
  return (
    <Section>
      <Title>COMO NOS AJUDAR</Title>

      <Calls>
        <Number>1</Number>
        <Span>/</Span>
        <a
          href="http://pernas.iluria.com/pd-8f09dd-contribua-quanto-vale.html?ct=15a963&p=1&s=1" 
          target='_blank'
        >
          <Button>DOE AGORA</Button>
        </a>

        <Number>2</Number>
        <Span>/</Span>
        <a
          href="http://pernas.iluria.com/garanta-sua-participacao-ct-15a963"
          target="_blank"
        >
          <Button>PARTICIPE</Button>
        </a>
      </Calls>
    </Section>
  );
}
