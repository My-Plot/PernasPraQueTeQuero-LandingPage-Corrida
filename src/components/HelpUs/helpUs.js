import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 180px;
  background-color: var(--tertiary-color);

  @media (max-width: 1024px){
    height: 140px;
  }

  @media (max-width: 375px){
    flex-direction: column;
    height: 140px;
    padding: 0;
  }
`;

export const Title = styled.h2`
    font-size: min(2.5rem, 4vw);

    @media (max-width: 1024px){
      font-size: 1.7rem;
  }
`;

export const Calls = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1024px){
    gap: 6vw;
  }

  @media (max-width: 375px){
    gap: 3vw;
  }
`;

export const Number = styled.h2`
    font-size: min(4rem, 7vw);

    @media (max-width: 1024px){
    font-size: 2rem;
  }
`;

export const Span = styled.span`
  margin: 0 -2rem; 
  font-size: 1.5rem;

  @media (max-width: 1024px){
    margin: 0 -3rem;
  }

  @media (max-width: 375px){
    margin: 0;
  }
`;

export const Button = styled.button`
  width: 12rem;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  margin: 0 3rem 0 -1.2rem;
  font-size: min(1rem, 2vw);
  background-color: var(--secondary-color);
  color: var(--quaternary-color);
  cursor: pointer;
  :hover{
    opacity: 0.9;
  }

  @media (max-width: 1024px){
    width: 20vw;
    padding: .7rem;
    margin: 0 auto;
  }

  @media (max-width: 375px){
    width: 22vw;
    padding: .5rem;
    margin: 0 1.5rem 0 0;
  }
`;

