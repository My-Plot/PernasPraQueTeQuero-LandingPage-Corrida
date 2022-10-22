import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #232931;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 60vw;
  height: 100%;

  @media (max-width: 540px) {
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

  @media (max-width: 540px) {
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

  @media (max-width: 540px) {
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

  @media (max-width: 540px) {
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

  @media (max-width: 1770px) {
    width: 8vw;
    margin-left: -6rem;
  }

  @media (max-width: 1660px) {
    width: 7vw;
    margin-left: -5rem;
    margin-top: 0;
  }

  @media (max-width: 1323px) {
    width: 6vw;
    margin-left: -5rem;
    margin-top: 1rem;
  }

  @media (max-width: 1024px) {
    width: 8vw;
    margin-left: 1rem;
    top: -1.8rem;
  }

  @media (max-width: 768px) {
    width: 10vw;
    margin-left: -2rem;
    top: -2rem;
  }

  @media (max-width: 540px) {
    transform: skewX(0deg);
    width: 18vw;
    margin-top: -21rem;
    margin-left: 8rem;
  }

  @media (max-width: 510px) {
    transform: skewX(0deg);
    width: 18vw;
    margin-top: -20rem;
    margin-left: 8rem;
  }

  @media (max-width: 481px) {
    transform: skewX(0deg);
    width: 17vw;
    margin-top: -19rem;
    margin-left: 8rem;
  }

  @media (max-width: 460px) {
    transform: skewX(0deg);
    width: 17vw;
    margin-top: -18rem;
    margin-left: 8rem;
  }

  @media (max-width: 438px) {
    transform: skewX(0deg);
    width: 16vw;
    margin-top: -17rem;
    margin-left: 8rem;
  }

  @media (max-width: 418px) {
    transform: skewX(0deg);
    width: 16vw;
    margin-top: -16rem;
    margin-left: 8rem;
  }

  @media (max-width: 395px) {
    transform: skewX(0deg);
    width: 16vw;
    margin-top: -15rem;
    margin-left: 8rem;
  }
`;

