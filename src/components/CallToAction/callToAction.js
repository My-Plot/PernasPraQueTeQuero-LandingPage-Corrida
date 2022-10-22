import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: #eeeeee;

  @media (max-width: 375px){
    padding: 0;
  }
`;


export const Section = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 3rem;

  @media (max-width: 1024px){
    flex-wrap: wrap;
    gap: 8rem;
    justify-content: center;
  }

  @media (max-width: 375px){
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 3rem;

  }
`;


export const Images = styled.img`
  width: 13vw;

  @media (max-width: 375px){
    width: 50vw;

  }
`;


export const Title = styled.h2`
  font-size: min(2rem, 6vw);
  margin: 2rem 0 3rem 4rem;
`;


export const Participant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20vw;
  height: 60vh;
  /* gap: 1rem; */

  @media (max-width: 375px){
    width: 50vw;

  }
`;


export const Text = styled.p`
  @media (max-width: 1024px){
    font-size: .8rem;
  }
`;

export const Button = styled.button`
  background-color: var(--secondary-color);
  color: var(--quaternary-color);
  padding: 1rem;
  border-radius: 25px;
  border: none;
  width: 12rem;
  margin-top: 2rem;
  cursor: pointer;
  :hover{
    opacity: 0.9;
  }

  @media (max-width: 375px){
    width: 10rem;
    padding: .5rem;
    margin: auto;

  }
`;
