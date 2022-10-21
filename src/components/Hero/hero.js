import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #232931;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 60vw;
  height: 100%;

  @media (max-width: 375px) {
    width: 100vw;
  }
`;

export const HeroText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232931;
  color: var(--quaternary-color);
  width: 50vw;
  transform: skewX(-20deg);
  margin-left: -10rem;

  @media (max-width: 768px) {
    margin-left: -6rem;
  }

  @media (max-width: 375px) {
    width: 100vw;
    transform: skewX(0deg);
    margin: auto;
  }
`;

export const HeroTextInner = styled.div`
  flex-direction: column;
  text-align: center;
  width: 30vw;
  font-size: 1.4rem;
  transform: skewX(20deg);

  @media (max-width: 1440px) {
    width: 40vw;
    margin-top: 5rem;
    margin-left: 2rem;
  }

  @media (max-width: 1024px) {
    width: 40vw;
    font-size: 1rem;
    margin-left: 4rem;
    margin-top: 8rem;
  }

  @media (max-width: 768px) {
    width: 40vw;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    transform: skewX(0deg);
    width: 100%;
    margin: 1rem 0;
  }
`;

export const Button = styled.button`
  background-color: #4ecca3;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  margin-top: 5rem;
  width: 12vw;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  @media (max-width: 1440px) {
    width: 20vw;
  }

  @media (max-width: 1024px) {
    width: 20vw;
  }

  @media (max-width: 768px) {
    width: 20vw;
    padding: 0.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 375px) {
    width: 50vw;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const Calendary = styled.img`
  transform: skewX(20deg);
  position: absolute;
  top: -2rem;
  margin-left: -15rem;

  @media (max-width: 1440px) {
    width: 8vw;
    margin-left: -6rem;
  }

  @media (max-width: 1024px) {
    width: 10vw;
    margin-left: 1rem;
    top: -1.8rem;
  }

  @media (max-width: 768px) {
    width: 10vw;
    margin-left: -2rem;
    top: -1rem;
  }

  @media (max-width: 375px) {
    transform: skewX(0deg);
    width: 20vw;
    margin-top: -16rem;
    margin-left: 5rem;
  }
`;

// export const Date = styled.div`
//   display: flex;
//   transform: skewX(20deg);
// `;

// export const PrimeiraAste = styled.span`
//   background-color: red;
//   width: 0.4rem;
//   height: 5rem;
//   position: absolute;
// `;

// export const SegundaAste = styled.span`
//   background-color: red;
//   width: 0.4rem;
//   height: 5rem;
//   position: absolute !important;
//   margin: -4rem 2rem 0 6rem;
// `;

// export const Box = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Topo = styled.span`
//   width: 160px;
//   height: 40px;
//   background-color: var(--tertiary-color);
//   border-radius: 10px 10px 0 0;
//   position: absolute;
// `;

// export const Base = styled.span`
//   display: flex;
//   flex-direction: column;
//   width: 160px;
//   height: 170px;
//   background-color: #fff;
//   color: var(--secondary-color);
//   border-radius: 10px;
// `;

// export const Dia = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   font-size: 5rem;
//   margin: 1rem 0 -1rem 0;
// `;

// export const Mes = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   font-size: 1.5rem;
// `;
