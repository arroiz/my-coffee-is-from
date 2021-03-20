import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  bottom: var(--medium);
  left: var(--medium);
  color: var(--black);
  font-size: var(--medium);
  cursor: pointer;

  a {
    text-decoration: none;
  }

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
