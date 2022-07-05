import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import data from '../data.js';

export default function Projects () {
  return (
    <Wrapper>
      <h2>Projects</h2>
      <div className="projects">
        {data.map((project) => {
          return (
            <article key={uuidv4()}>
              <div className="image-container">
                <img src={project.image} alt={project.name} />
              </div>
              <footer>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="buttons">
                  <a href={project.link} target="_blank">Live</a>
                  <a href={project.github} target="_blank">Github</a>
                </div>
              </footer>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-image: linear-gradient(to left bottom, #ff1a1a, #ff5308, #ff7600, #ff9300, #ffae1a);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .projects {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;    
  }

  article {
    width: 90vw;
    max-width: 400px;
    height: 90vh;
    max-height: 600px;
    margin: auto;
    border: 1px solid black;
    border-radius: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;

    .image-container {
      height: 50%;
      width: 100%;

      img {
        height: 100%;
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        object-fit: cover;
      }      
    }


    footer {
      background-color: white;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: .8rem;
        line-height: 2;
        text-align: center;
        text-transform: capitalize;
        margin: .5rem;

        @media (min-width: 600px) {
          font-size: .9rem;
        }
      }
      .buttons {
        margin: 2rem;
        display: flex;
        justify-content: space-between;

        a {
          padding: .5rem 0;
          width: 45%;
          background: orange;

          &:hover {
            background: black;
            color: white;
          }
        }
      }
    }
    
  }
`