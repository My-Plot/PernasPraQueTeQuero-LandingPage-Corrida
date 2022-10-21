import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  padding: 8rem;
  gap: 15rem;

  @media (max-width: 1024px) {
    padding: 3rem;
    gap: 7rem;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 3rem;
  }
`;

export const TextImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: min(2rem, 6vw);
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

export const Imagem = styled.img`
  width: 30vw;
  border-radius: 9px;
  background-color: #eeeeee;

  @media (max-width: 1024px) {
    width: 35vw;
  }

  @media (max-width: 375px) {
    width: 60vw;
  }
`;

export const Text = styled.div`
  width: 35vw;
  font-size: min(1.1rem, 3vw);

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    width: 70vw;
    margin-bottom: 2rem;
  }
`;
