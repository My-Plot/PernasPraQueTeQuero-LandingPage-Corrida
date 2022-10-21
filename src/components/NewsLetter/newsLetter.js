import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 140px;
  background-color: var(--tertiary-color);

  @media (max-width: 1024px){
    height: 140px;
  }

  @media (max-width: 375px){
    height: 70px;
  }
`;

export const Title = styled.h2`
  font-size: min(2rem, 3vw);

  @media (max-width: 1024px){
      font-size: 1.7rem;
  }
`;

export const InputButton = styled.div`
  display: flex;
  gap: min(1rem, 2vw);
`;

export const Input = styled.input`
  width: 35vw;
  padding: 1vw;
  border: none;
  border-radius: 20px;
  ::-webkit-input-placeholder {
    font-size: min(1rem, 2vw);
  }
`;

export const Button = styled.button`
  background-color: var(--secondary-color);
  color: var(--quaternary-color);
  border-radius: 25px;
  border: none;
  width: 15vw;
  font-size: min(1rem, 1.5vw);
  cursor: pointer;
  
  :hover{
    opacity: 0.9;
  }

  @media (min-width: 375px){
    /* width: 10vw; */
  }
`;
