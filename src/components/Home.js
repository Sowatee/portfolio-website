import styled from 'styled-components';
import background from '../images/background-2.jpg'

export default function Home () {
  return (
    <Wrapper>
      <h1>Frontend Developer</h1>
      <a href="/images/myw3schoolsimage.jpg">Download CV</a>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background: url(${background}) no-repeat;
  text-align: center;
  background-attachment: fixed;

  a {
    border: 1px solid white;
    padding: 1rem;
    border-radius: .5rem;
    transition: all .2s linear;

    &:hover {
      background: white;
      color: orange;
    }
  }
`