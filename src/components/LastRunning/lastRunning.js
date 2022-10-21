import styled from "styled-components";


export const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 7rem;

    @media (max-width: 1024px){
    padding: 3rem;
  }

    @media (max-width: 375px){
    padding: 0;
  }
    `;

export const Section = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    margin: 0 auto;
    gap: 1.5rem;

    @media (max-width: 375px){
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
    font-size: min(2rem, 5vw);
    margin: 2rem 0 3rem 4rem;

    @media (max-width: 375px){
        margin: 1rem auto;
  }
`;

export const Image = styled.img`
    width: 25vw;
    border-radius: 9px;
`;