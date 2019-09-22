import styled from 'styled-components';

export default styled.nav`
  display: flex;
  font-family: Days One, sans-serif;
  font-size: 1.5rem;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  a {
    color: yellow;
    text-decoration: none;
  }
  a:hover {
    color: papayawhip;
    transform: scale(1.25);
    transition: .5s ease-in;
    }`