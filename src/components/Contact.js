import styled from 'styled-components';

export default function Contact () {
  return (
    <Wrapper>
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xzbolzyk" method="POST">
          <input type="email" name="email" placeholder="example@email.com" required/>
          <input type="text" name="subject" placeholder="subject" required/>
          <textarea name="message" cols="30" rows="10" placeholder="We'd like to schedule an interview!" required></textarea>   
        <button type="submit">SEND</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-image: linear-gradient(to right, #ff1a1a, #ff5308, #ff7600, #ff9300, #ffae1a);  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 600px) {
    form {
      max-width: 600px;

      button {
        max-width: 200px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 2rem;
    width: 90vw;



    *, *::placeholder {
      text-transform: uppercase;
      letter-spacing: .2rem;
      line-height: 1.5;
      color: black;
    }

    input {
      height: 2rem;
      border: none;
      border-radius: .5rem;
      padding-left: 1rem;

      &:focus {
        outline: none;
      }
    }

    textarea {
      padding-left: 1rem;
      resize: none;
      border: none;
      border-radius: .5rem;
      
      &:focus {
        outline: none;
      }
    }

    button {
      width: 40%;
      height: 2.5rem;
      align-self: flex-end;
      padding: .5rem 2rem;
      border: none;
      border-radius: 2rem;
      transition: .2s all linear;

      &:hover {
        background-color: #ff1a1a;
        color: white;
        cursor: pointer;
      }
    }
  }
`