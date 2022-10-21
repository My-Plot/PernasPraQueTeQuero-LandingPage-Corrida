import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  /* width: 100vw; */
  padding: 7rem;
  gap: 8rem;

  @media (max-width: 1024px){
    padding: 3rem;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding: 0;
    gap: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  font-size: min(1.1rem, 3vw);

  @media (max-width: 1024px){
    font-size: .8rem;
  }

  @media (max-width: 375px) {
    width: 70vw;
  }
`;

export const Title = styled.h1`
  font-size: min(2rem, 6vw);
  margin-bottom: 1rem;

  @media (max-width: 1024px){
    font-size: 1rem;
  }

  @media (max-width: 375px){
    margin-top: 1rem;
  }
`;

export const Imagem = styled.img`
  width: 30vw;
  border-radius: 9px;

  @media (max-width: 1024px){
    width: 35vw; 
  }

  @media (max-width: 375px) {
    width: 70vw;
    margin-bottom: 2rem;
  }
`;
