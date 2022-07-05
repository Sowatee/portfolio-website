import styled from 'styled-components';

export default function Home () {
  return (
    <Wrapper>
      <h3>James Prescott</h3>
      <h1>Frontend Developer</h1>
      <a href="/">Download CV</a>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-image: linear-gradient(to right bottom, #ff1a1a, #ff5308, #ff7600, #ff9300, #ffae1a);  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
`